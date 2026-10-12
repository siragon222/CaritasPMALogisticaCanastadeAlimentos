window.CARITAS_MONTHS = window.CARITAS_MONTHS || {};
window.CARITAS_MONTHS.agosto = {
  id: "agosto",
  label: "Agosto 2026",
  short: "Ago",
  sections: [
    {
      title: "Comunidades Atendidas (Agosto)",
      icon: "pin",
      subtitle: "Haz clic en cualquier comunidad para ver el detalle completo de la asistencia.",
      spec: "Una canasta equivale a dos kits (1 aceite, 1 sal).",
      days: [
        {
          date: "26/08/2026",
          communities: [
            {
              name: "5 de Julio",
              assigned: "420 canastas (840 kits)",
              modal: {
                type: "simple",
                title: "5 de Julio (26/08)",
                asignadas: "420 canastas (840 kits)",
                entregadas: "356 canastas (712 kits)",
                remanentes: "64 canastas (128 kits)",
                waybill: "https://drive.google.com/file/d/1L9aR9djevAt_Fhd4wuOBSdwgMzlb8Qi8/view?usp=drivesdk"
              }
            },
            {
              name: "El Centro",
              assigned: "140 canastas (280 kits)",
              modal: {
                type: "simple",
                title: "El Centro (26/08)",
                asignadas: "140 canastas (280 kits)",
                entregadas: "145 canastas (290 kits) (Incluye 5 extras del remanente de 5 de Julio)",
                remanentes: "0 canastas (0 kits)",
                waybill: "https://drive.google.com/file/d/1pfTo68AnVio3V_TH40u9aKAarIQs_2og/view?usp=drivesdk"
              }
            },
            {
              name: "La Flor de Apure",
              assigned: "140 canastas (280 kits)",
              modal: {
                type: "simple",
                title: "La Flor de Apure (26/08)",
                asignadas: "140 canastas (280 kits)",
                entregadas: "144 canastas (288 kits) (Incluye 4 extras del remanente de 5 de Julio)",
                remanentes: "0 canastas (0 kits)",
                waybill: "https://drive.google.com/file/d/1tML1lzlFZItFEJXtQy0sCfWhThY6upVA/view?usp=drivesdk"
              }
            }
          ],
          remainder: {
            title: "Conteo de Remanentes (Fecha 26/08):",
            lines: ["<strong>55 canastas (110 kits)</strong>"]
          }
        },
        {
          date: "27/08/2026",
          communities: [
            {
              name: "Sinaí",
              assigned: "320 canastas (640 kits)",
              modal: {
                type: "simple",
                title: "Sinaí (27/08)",
                asignadas: "320 canastas (640 kits)",
                entregadas: "286 canastas (572 kits)",
                remanentes: "34 canastas (68 kits)",
                waybill: "https://drive.google.com/file/d/1i3W5yoaPkLs24CaVDlZZD9oD8zdQvyY0/view?usp=drivesdk"
              }
            },
            {
              name: "San Francisco",
              assigned: "300 canastas (600 kits)",
              modal: {
                type: "simple",
                title: "San Francisco (27/08)",
                asignadas: "300 canastas (600 kits)",
                entregadas: "288 canastas (576 kits)",
                remanentes: "12 canastas (24 kits)",
                waybill: "https://drive.google.com/file/d/1pTj-Z4f12ZmcXSMUyszH8PZhFXVhdPsc/view?usp=drivesdk"
              }
            }
          ],
          remainder: {
            title: "Conteo de Remanentes (Fecha 27/08):",
            lines: ["<strong>46 canastas</strong> (del día) + <strong>55 canastas</strong> (acumuladas del día anterior) = <strong>101 canastas acumuladas (202 kits)</strong>"]
          }
        },
        {
          date: "28/08/2026",
          communities: [
            {
              name: "Los Caracaros",
              assigned: "0 canastas (76 movilizadas)",
              modal: {
                type: "simple",
                title: "Los Caracaros (28/08)",
                asignadas: "0 canastas (76 movilizadas del depósito)",
                entregadas: "76 canastas (152 kits)",
                remanentes: "0 canastas (0 kits)",
                waybill: "https://drive.google.com/file/d/12GAqvAN8VJWfRm809N3Nka-dZwTdMDjg/view?usp=drivesdk"
              }
            },
            {
              name: "La Primavera",
              assigned: "115 canastas (230 kits)",
              modal: {
                type: "simple",
                title: "La Primavera (28/08)",
                asignadas: "115 canastas (230 kits)",
                entregadas: "115 canastas (230 kits)",
                remanentes: "0 canastas (0 kits)",
                waybill: "https://drive.google.com/file/d/1dXDJe9-k5vuSm9Aq5IpW2QCmWA7S_P4N/view?usp=drivesdk"
              }
            }
          ],
          remainder: {
            title: "Conteo de Remanentes (Fecha 28/08):",
            lines: ["<strong>101 canastas acumuladas</strong> - <strong>76 canastas (Los Caracaros)</strong> = <strong>25 canastas acumuladas (50 kits)</strong> (Balance Final del Depósito)"]
          }
        }
      ]
    },
    {
      title: "Balance General de Agosto",
      icon: "chart",
      progress: { label: "Eficiencia de Almacén / Depósito", value: "89%", width: 89 },
      metrics: [
        { label: "Total Asignadas", value: "1.435 canastas (2.870 kits)" },
        { label: "Total Entregadas", value: "1.410 canastas (2.820 kits)" },
        { label: "Total Remanentes", value: "25 canastas (50 kits) 📦" }
      ]
    }
  ]
};
