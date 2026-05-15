import { useState } from "react"
import { WHATSAPP_NUMBER } from "../data/menu"

export default function Checkout({ cart, onBack, onAdd, onRemove }) {
  const [nombre, setNombre] = useState("")
  const [pago, setPago] = useState("")
  const [horario, setHorario] = useState("ahora")
  const [hora, setHora] = useState("")

  const items = Object.values(cart)
  const total = items.reduce((sum, item) => sum + Number(item.precio || item.price) * item.qty, 0)
  const fmt = (n) => "$" + Number(n).toLocaleString("es-CL")

  const sendWhatsApp = () => {
    if (!nombre.trim()) { alert("Ingresa tu nombre para continuar."); return }
    if (!pago) { alert("Selecciona un método de pago."); return }
    if (horario === "programado" && !hora) { alert("Ingresa la hora para tu pedido."); return }

    const lines = items.map((i) => `• ${i.nombre || i.name} x${i.qty} — ${fmt(Number(i.precio || i.price) * i.qty)}`).join("\n")
    const horarioTexto = horario === "ahora" ? "Lo antes posible" : `Para las ${hora}`

    const msg =
      `*Pedido CASA ALDEA*\n\n` +
      `*Cliente:* ${nombre}\n` +
      `*Método de pago:* ${pago}\n` +
      `*Horario:* ${horarioTexto}\n\n` +
      `${lines}\n\n` +
      `*Total: ${fmt(total)}*`

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank")
  }

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
        <span className="font-black text-xl tracking-widest" style={{ color: "var(--gold)" }}>Tu pedido</span>
      </div>

      <div className="px-5 pt-6 flex flex-col gap-6">

        <div className="border rounded-xl p-4 flex flex-col gap-2" style={{ background: "#FAF5EC", borderColor: "#E8DDD0" }}>
          {items.map((item) => (
            <div key={item.id} className="flex justify-between items-center text-sm gap-2">
              <span className="flex-1" style={{ color: "#8B5E3C" }}>{item.nombre || item.name}</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => onRemove(item)}
                  className="w-7 h-7 rounded-full border flex items-center justify-center text-base transition-colors"
                  style={{ borderColor: "#E8DDD0", color: "#3D1F0A" }}
                >
                  -
                </button>
                <span className="font-medium w-4 text-center" style={{ color: "#3D1F0A" }}>{item.qty}</span>
                <button
                  onClick={() => onAdd(item)}
                  className="w-7 h-7 rounded-full flex items-center justify-center text-base hover:opacity-80 transition-opacity"
                  style={{ background: "var(--gold)", color: "#FAF5EC" }}
                >
                  +
                </button>
              </div>
              <span className="font-medium min-w-16 text-right" style={{ color: "#3D1F0A" }}>{fmt(Number(item.precio || item.price) * item.qty)}</span>
            </div>
          ))}
          <div className="border-t pt-3 mt-1 flex justify-between" style={{ borderColor: "#E8DDD0" }}>
            <span className="text-sm" style={{ color: "#8B5E3C" }}>Total</span>
            <span className="font-black text-base" style={{ color: "var(--gold)" }}>{fmt(total)}</span>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-xs tracking-widest uppercase" style={{ color: "#8B5E3C" }}>Nombre de quien retira</label>
          <input
            type="text"
            placeholder="Tu nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="rounded-xl px-4 py-3 text-sm outline-none border"
            style={{ background: "#FAF5EC", borderColor: "#E8DDD0", color: "#3D1F0A" }}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-xs tracking-widest uppercase" style={{ color: "#8B5E3C" }}>Método de pago</label>
          <div className="grid grid-cols-3 gap-2">
            {["Efectivo", "Débito", "Transferencia"].map((m) => (
              <button
                key={m}
                onClick={() => setPago(m)}
                className="rounded-xl py-3 text-sm border transition-all"
                style={
                  pago === m
                    ? { background: "var(--gold)", color: "#FAF5EC", borderColor: "var(--gold)", fontWeight: 600 }
                    : { background: "#FAF5EC", borderColor: "#E8DDD0", color: "#8B5E3C" }
                }
              >
                {m}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-xs tracking-widest uppercase" style={{ color: "#8B5E3C" }}>Horario</label>
          <div className="grid grid-cols-2 gap-2">
            {[
              { value: "ahora", label: "Lo antes posible" },
              { value: "programado", label: "Hora específica" }
            ].map((op) => (
              <button
                key={op.value}
                onClick={() => setHorario(op.value)}
                className="rounded-xl py-3 text-sm border transition-all"
                style={
                  horario === op.value
                    ? { background: "var(--gold)", color: "#FAF5EC", borderColor: "var(--gold)", fontWeight: 600 }
                    : { background: "#FAF5EC", borderColor: "#E8DDD0", color: "#8B5E3C" }
                }
              >
                {op.label}
              </button>
            ))}
          </div>

          {horario === "programado" && (
            <input
              type="time"
              value={hora}
              onChange={(e) => setHora(e.target.value)}
              className="rounded-xl px-4 py-3 text-sm outline-none border mt-1"
              style={{ background: "#FAF5EC", borderColor: "#E8DDD0", color: "#3D1F0A" }}
            />
          )}
        </div>

        <button
          onClick={sendWhatsApp}
          className="w-full rounded-xl py-4 text-sm font-semibold tracking-wide transition-opacity hover:opacity-85 mt-2"
          style={{ background: "var(--gold)", color: "#FAF5EC" }}
        >
          Confirmar y enviar por WhatsApp
        </button>

      </div>
    </div>
  )
}