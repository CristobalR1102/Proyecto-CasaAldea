export default function Info({ onBack }) {
  const horarios = [
    { dia: "Lunes",     hora: "13:00 — 23:00" },
    { dia: "Martes",    hora: "13:00 — 23:00" },
    { dia: "Miércoles", hora: "13:00 — 23:00" },
    { dia: "Jueves",    hora: "13:00 — 23:00" },
    { dia: "Viernes",   hora: "13:00 — 00:00" },
    { dia: "Sábado",    hora: "13:00 — 00:00" },
    { dia: "Domingo",   hora: "13:00 — 00:00" },
  ]

  const ahora = new Date(new Date().toLocaleString("en-US", { timeZone: "America/Santiago" }))
  const dia = ahora.getDay()
  const minutos = ahora.getHours() * 60 + ahora.getMinutes()

  const abierto = (() => {
    if (dia === 5 || dia === 6 || dia === 0) return minutos >= 780 && minutos < 1440
    return minutos >= 780 && minutos < 1380
  })()

  return (
    <div className="min-h-screen max-w-md mx-auto pb-10" style={{ background: "#1C1008" }}>

      <div className="px-5 pt-6 pb-4 flex items-center gap-4 border-b" style={{ borderColor: "#3D1F0A" }}>
        <button
          onClick={onBack}
          className="text-sm border rounded-full px-4 py-1.5 transition-colors"
          style={{ borderColor: "#3D1F0A", color: "#8B5E3C" }}
        >
          Volver
        </button>
        <span className="font-black text-xl tracking-widest" style={{ color: "var(--gold)" }}>Información</span>
      </div>

      <div className="px-5 pt-6 flex flex-col gap-6">

        <div className="border rounded-xl p-5 flex flex-col gap-1" style={{ background: "#FAF5EC", borderColor: "#E8DDD0" }}>
          <span className="text-xs tracking-widest uppercase mb-2" style={{ color: "#8B5E3C" }}>Dirección</span>
          <span className="text-sm font-medium" style={{ color: "#3D1F0A" }}>Sgto. Aldea 970, Letra B</span>
          <span className="text-sm" style={{ color: "#8B5E3C" }}>Pudahuel, Región Metropolitana</span>
          <a
            href="https://www.google.com/maps/place/Casa+aldea/@-33.4408339,-70.7560521,18.75z/data=!4m6!3m5!1s0x9662c33424680a37:0x671174d19b7536dd!8m2!3d-33.4406598!4d-70.7561911!16s%2Fg%2F11xf60mb6c?entry=ttu&g_ep=EgoyMDI2MDUxMi4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noreferrer"
            className="mt-3 w-full text-center rounded-xl py-3 text-sm font-semibold tracking-wide transition-opacity hover:opacity-85"
            style={{ background: "var(--gold)", color: "#FAF5EC" }}
          >
            Ver en Google Maps
          </a>
        </div>

        <div className="border rounded-xl p-5" style={{ background: "#FAF5EC", borderColor: "#E8DDD0" }}>
          <div className="flex justify-between items-center mb-4">
            <span className="text-xs tracking-widests uppercase" style={{ color: "#8B5E3C" }}>Horario</span>
            <span
              className="text-xs font-semibold px-3 py-1 rounded-full"
              style={
                abierto
                  ? { background: "#e8f5e9", color: "#2e7d32", border: "1px solid #c8e6c9" }
                  : { background: "#fce4ec", color: "#c62828", border: "1px solid #f8bbd0" }
              }
            >
              {abierto ? "Abierto ahora" : "Cerrado"}
            </span>
          </div>

          <div className="flex flex-col gap-2">
            {horarios.map((h, index) => {
              const diaActual = dia === 0 ? 6 : dia - 1
              const esHoy = index === diaActual
              return (
                <div key={h.dia} className="flex justify-between text-sm py-2 border-b" style={{ borderColor: "#E8DDD0" }}>
                  <span style={esHoy ? { color: "var(--gold)", fontWeight: 600 } : { color: "#8B5E3C" }}>{h.dia}</span>
                  <span style={esHoy ? { color: "var(--gold)", fontWeight: 600 } : { color: "#C4A882" }}>{h.hora}</span>
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </div>
  )
}