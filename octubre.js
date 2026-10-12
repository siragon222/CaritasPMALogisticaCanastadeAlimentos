window.CARITAS_MONTHS = window.CARITAS_MONTHS || {};
window.CARITAS_MONTHS.octubre = {
  id: "octubre",
  label: "Octubre 2026",
  short: "Oct",
  sections: [
    {
      title: "Bloque 1 de Octubre",
      icon: "block",
      spec: "Una canasta equivale a dos kits (4 aceites, 1 sal).",
      days: [
        {
          date: "09/10/2026",
          communities: [
            {
              name: "La Esperancita",
              assigned: "30 canastas (60 kits)",
              modal: {
                type: "octubre",
                title: "La Esperancita (09/10)",
                canastas: {
                  asignadas: "3 canastas 6 kits + 27 canastas 54 kits remanentes de septiembre = 30 canastas 60 kits",
                  entregadas: "29 canastas 58 kits",
                  remanente: "1 canasta 2 kits"
                },
                aceite: { asignadas: "174 Aceites", entregadas: "116 Aceites", remanente: "58 Aceites" },
                sal: {
                  asignadas: "3 sales + 27 sales remanentes de septiembre = 30 sales",
                  entregadas: "29 Sales",
                  remanente: "1 Sal"
                },
                waybill: "https://drive.google.com/file/d/1iS3xUpP0lvl6lu_xPaVherMZBDwu5ARn/view?usp=drive_link"
              }
            },
            {
              name: "Barrio Nuevo",
              assigned: "159 canastas (318 kits)",
              modal: {
                type: "octubre",
                title: "Barrio Nuevo (09/10)",
                canastas: { asignadas: "159 canastas 318 kits", entregadas: "152 canastas 304 kits", remanente: "7 canastas 14 kits" },
                aceite: { asignadas: "636 Aceites", entregadas: "608 Aceites", remanente: "28 Aceites" },
                sal: { asignadas: "159 sales", entregadas: "152 Sales", remanente: "7 Sales" },
                waybill: "https://drive.google.com/file/d/1B3rS8NHRr2soQ3GxYiopZpakrip-bIV0/view?usp=drive_link"
              }
            }
          ],
          remainder: {
            title: "Conteo de Remanentes (Fecha 09/10):",
            lines: [
              "<strong>• 8 canastas (16 kits)</strong>",
              "<strong>• 140 aceites</strong> (54 aceites depósito + 58 aceites La Esperancita + 28 aceites Barrio Nuevo)",
              "<strong>• 35 sales</strong> (27 en el depósito + 7 sales La Esperancita + 1 sal de Barrio Nuevo)"
            ]
          }
        },
        {
          date: "10/10/2026",
          communities: [
            {
              name: "Santa Rita",
              assigned: "68 canastas (136 kits)",
              note: "Nota: Vino dos tipos de kits variando el peso",
              modal: {
                type: "octubre",
                title: "Santa Rita (10/10)",
                canastas: { asignadas: "68 canastas 136 kits", entregadas: "68 canastas 136 kits", remanente: "0 canastas 0 kits" },
                aceite: { asignadas: "272 Aceites", entregadas: "272 Aceites", remanente: "0 Aceites" },
                sal: { asignadas: "68 Sales", entregadas: "68 Sales", remanente: "0 Sales" },
                waybill: "https://drive.google.com/file/d/1pgJ_LJ6zUnsWudx-0jHr0hPuFM08-qvZ/view?usp=drive_link"
              }
            },
            {
              name: "El Progreso",
              assigned: "47 canastas (94 kits)",
              note: "Incluye nota de Waybills y depósitos",
              warn: true,
              modal: {
                type: "octubre",
                title: "El Progreso (10/10)",
                canastas: { asignadas: "47 canastas 94 kits", entregadas: "47 canastas 94 kits", remanente: "0 canastas 0 kits" },
                aceite: {
                  asignadas: "80 Aceites + 120 del depósito = 188 aceites",
                  entregadas: "188 Aceites",
                  remanente: "0 canastas 0 kits"
                },
                sal: {
                  asignadas: "20 sales + 27 sales sobrantes del depósito = 47 sales",
                  entregadas: "47 Sales",
                  remanente: "0 Sales"
                },
                waybill: "https://drive.google.com/file/d/1kYzxf5EHQRNAVUK_Wi2L8qPCuGTcb0AJ/view?usp=drive_link"
              }
            }
          ],
          notes: [
            {
              title: "Nota sobre los Waybills (El Progreso):",
              text: "Los Waybills muestran reflejado que llegaron los aceites para las 115 familias (o sea 460), pero en realidad en el almacén del PMA solo se cargaron 352 aceites, por lo que se tuvo que complementar para los 460 destinados a las 115 familias mediante una extracción de 108 aceites del depósito.",
              links: [
                {
                  label: "Ver evidencia fotográfica de la nota del PMA",
                  href: "https://drive.google.com/file/d/1T4zbO-JUVqJK0MeHSMo3GhINTcvVQhnw/view",
                  dark: true
                }
              ]
            }
          ],
          remainder: {
            title: "Conteo de Remanentes (Fecha 10/10):",
            lines: [
              "<strong>• 8 canastas (16 kits)</strong> (no hubo extracción de canastas)",
              "<strong>• 32 aceites</strong> (108 aceites fueron extraídos del depósito del total inicial que tenía de 140 del día anterior)",
              "<strong>• 8 sales</strong> (27 sales fueron extraídas del total inicial de 35 sales del día anterior)"
            ]
          }
        }
      ]
    },
    {
      title: "Balance General de Octubre",
      icon: "chart",
      progress: { label: "Eficiencia de Distribución", value: "En curso", width: 50 },
      metrics: [
        { label: "Total Asignadas", value: "189 canastas (378 kits)" },
        { label: "Total Entregadas", value: "181 canastas (362 kits)" },
        { label: "Total Remanentes", value: "8 canastas (16 kits) 📦" }
      ]
    }
  ]
};
