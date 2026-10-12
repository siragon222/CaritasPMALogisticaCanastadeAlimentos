(function () {
  const MONTH_ORDER = ["agosto", "septiembre", "octubre"];
  const root = document.documentElement;
  const view = document.getElementById("monthView");
  const tabs = document.getElementById("monthTabs");
  const search = document.getElementById("globalSearch");
  const overlay = document.getElementById("modalOverlay");
  const modalTitle = document.getElementById("modalTitle");
  const modalStats = document.getElementById("modalStats");
  const modalWaybill = document.getElementById("modalWaybill");
  const themeBtn = document.getElementById("themeToggleBtn");
  const topBtn = document.getElementById("scrollTopBtn");

  const esc = (v) => String(v ?? "")
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  function noteBlock(note) {
    const links = (note.links || []).map((l) =>
      `<a class="btn-link${l.dark ? " dark" : ""}" href="${esc(l.href)}" target="_blank" rel="noopener">${esc(l.label)}</a>`
    ).join("");
    return `<aside class="note"><strong>${esc(note.title)}</strong> ${esc(note.text)}${links}</aside>`;
  }

  function communityCard(c, index) {
    const note = c.note
      ? `<p class="hint">${c.warn ? "⚠ " : ""}${esc(c.note)}</p>`
      : "";
    return `<button type="button" class="community" data-i="${index}">
      <h4>${esc(c.name)}</h4>
      <p>Asignadas: ${esc(c.assigned)}</p>${note}
    </button>`;
  }

  function renderSection(section, monthId, sIdx) {
    const days = (section.days || []).map((day, dIdx) => {
      const cards = (day.communities || []).map((c, cIdx) =>
        communityCard(c, `${monthId}:${sIdx}:${dIdx}:${cIdx}`)
      ).join("");
      const dayNotes = (day.notes || []).map(noteBlock).join("");
      const rem = day.remainder
        ? `<div class="remainder"><h4>${esc(day.remainder.title)}</h4>${day.remainder.lines.map((l) => `<p>${l}</p>`).join("")}</div>`
        : "";
      return `<div class="date-chip">Fecha: ${esc(day.date)}</div>
        <div class="grid">${cards}</div>${dayNotes}${rem}`;
    }).join("");

    const spec = section.spec
      ? `<div class="spec"><strong>Especificación de la canasta:</strong> ${esc(section.spec)}</div>`
      : "";
    const sub = section.subtitle ? `<p class="subtitle">${esc(section.subtitle)}</p>` : "";
    const progress = section.progress
      ? `<div class="progress"><div class="progress-head"><span>${esc(section.progress.label)}</span><span>${esc(section.progress.value)}</span></div>
         <div class="bar"><span style="width:${Number(section.progress.width) || 0}%"></span></div></div>`
      : "";
    const metrics = section.metrics
      ? `<div class="grid">${section.metrics.map((m) => `<div class="metric"><span>${esc(m.label)}</span><strong>${esc(m.value)}</strong></div>`).join("")}</div>`
      : "";
    const notes = (section.notes || []).map(noteBlock).join("");

    return `<section class="panel">
      <div class="section-head"><h3>${esc(section.title)}</h3></div>
      ${sub}${spec}${days}${progress}${metrics}${notes}
    </section>`;
  }

  function renderMonth(id) {
    const month = window.CARITAS_MONTHS[id];
    if (!month) return;
    view.innerHTML = month.sections.map((s, i) => renderSection(s, id, i)).join("");
    view.dataset.month = id;
    tabs.querySelectorAll(".month-tab").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.month === id);
    });
    history.replaceState(null, "", "#" + id);
    applySearch();
  }

  function openModal(data) {
    modalTitle.textContent = data.title;
    if (data.type === "octubre") {
      modalStats.innerHTML = [
        ["Canastas", data.canastas],
        ["Aceite", data.aceite],
        ["Sal", data.sal]
      ].map(([label, g]) => `
        <div class="group-label">${esc(label)}</div>
        <div class="stat"><span>Asignadas:</span><strong>${esc(g.asignadas)}</strong></div>
        <div class="stat"><span>Entregadas:</span><strong>${esc(g.entregadas)}</strong></div>
        <div class="stat"><span>Remanente:</span><strong>${esc(g.remanente)}</strong></div>
      `).join("");
    } else {
      modalStats.innerHTML = `
        <div class="stat"><span>Asignadas:</span><strong>${esc(data.asignadas)}</strong></div>
        <div class="stat"><span>Entregadas:</span><strong>${esc(data.entregadas)}</strong></div>
        <div class="stat"><span>Remanentes:</span><strong>${esc(data.remanentes)}</strong></div>`;
    }
    if (data.waybill && data.waybill !== "#") {
      modalWaybill.href = data.waybill;
      modalWaybill.style.display = "flex";
    } else {
      modalWaybill.style.display = "none";
    }
    overlay.classList.add("show");
  }

  function closeModal() { overlay.classList.remove("show"); }

  function findCommunity(token) {
    const [monthId, sIdx, dIdx, cIdx] = token.split(":");
    return window.CARITAS_MONTHS[monthId]?.sections[sIdx]?.days[dIdx]?.communities[cIdx];
  }

  function applySearch() {
    const q = search.value.toLowerCase().trim();
    view.querySelectorAll(".community").forEach((el) => {
      el.style.display = !q || el.innerText.toLowerCase().includes(q) ? "flex" : "none";
    });
  }

  function setTheme(theme) {
    root.setAttribute("data-theme", theme);
    localStorage.setItem("caritas-theme", theme);
    const dark = theme === "dark";
    themeBtn.querySelector("#themeIcon").textContent = dark ? "☀" : "🌙";
    themeBtn.querySelector("#themeText").textContent = dark ? "Modo Claro" : "Modo Oscuro";
  }

  MONTH_ORDER.forEach((id) => {
    const m = window.CARITAS_MONTHS[id];
    if (!m) return;
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "month-tab";
    btn.dataset.month = id;
    btn.textContent = m.label;
    btn.addEventListener("click", () => renderMonth(id));
    tabs.appendChild(btn);
  });

  view.addEventListener("click", (e) => {
    const card = e.target.closest(".community");
    if (!card) return;
    const item = findCommunity(card.dataset.i);
    if (item?.modal) openModal(item.modal);
  });

  overlay.addEventListener("click", (e) => { if (e.target === overlay) closeModal(); });
  document.getElementById("modalClose").addEventListener("click", closeModal);
  search.addEventListener("input", applySearch);
  themeBtn.addEventListener("click", () => {
    setTheme(root.getAttribute("data-theme") === "dark" ? "light" : "dark");
  });
  topBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  window.addEventListener("scroll", () => topBtn.classList.toggle("show", window.scrollY > 280));
  window.addEventListener("hashchange", () => {
    const id = location.hash.slice(1);
    if (window.CARITAS_MONTHS[id]) renderMonth(id);
  });

  setTheme(localStorage.getItem("caritas-theme") || "light");
  const start = location.hash.slice(1);
  renderMonth(window.CARITAS_MONTHS[start] ? start : "agosto");
})();
