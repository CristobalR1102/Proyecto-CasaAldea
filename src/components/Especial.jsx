export default function Especial({ onBack }) {
  const servicios = [
    {
      titulo: "Eventos y Celebraciones",
      desc: "Si tienes una fecha importante que celebrar, podemos preparar hamburguesas artesanales especiales para que disfrutes junto a tus invitados una grata velada.",
      detalle: null
    },
    {
      titulo: "Servicio Catering",
      desc: "Nos encargamos de la planificación del menú, atención para los comensales y coordinación para un resultado totalmente personalizado.",
      detalle: "Consultar disponibilidad."
    },
    {
      titulo: "Pedidos por Mayor",
      desc: "Realizamos pedidos especiales para grupos grandes, empresas y eventos. Contáctanos para coordinar.",
      detalle: null
    }
  ]

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
        <span className="font-black text-xl tracking-widest" style={{ color: "var(--gold)" }}>Especial</span>
      </div>

      <div className="px-5 pt-6 flex flex-col gap-4">

        {servicios.map((s) => (
          <div key={s.titulo} className="border rounded-xl p-5 flex flex-col gap-2" style={{ background: "#FAF5EC", borderColor: "#E8DDD0" }}>
            <span className="font-black text-base tracking-wide" style={{ color: "var(--gold)" }}>{s.titulo}</span>
            <p className="text-sm leading-relaxed" style={{ color: "#8B5E3C" }}>{s.desc}</p>
            {s.detalle && (
              <p className="text-xs font-medium mt-1" style={{ color: "#C4A882" }}>{s.detalle}</p>
            )}
          </div>
        ))}

        <a
          href="mailto:contacto@casaaldea.cl"
          className="w-full text-center rounded-xl py-4 text-sm font-semibold tracking-widest uppercase mt-2 transition-opacity hover:opacity-85"
          style={{ background: "var(--gold)", color: "#FAF5EC", display: "block" }}
        >
          Solicita tu cotización
        </a>

        <p className="text-center text-xs mt-0" style={{ color: "#8B5E3C" }}>contacto@casaaldea.cl</p>

      </div>
    </div>
  )
}