export default function Cart({ cart, onCheckout }) {
  const items = Object.values(cart)
  const total = items.reduce((sum, item) => sum + Number(item.precio || item.price) * item.qty, 0)
  const fmt = (n) => "$" + Number(n).toLocaleString("es-CL")

  if (items.length === 0) return null

  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md z-50 border-t flex flex-col" style={{ background: "#FAF5EC", borderColor: "#E8DDD0", maxHeight: "30vh" }}>

      <div className="px-5 pt-4 flex justify-between items-center flex-shrink-0">
        <span className="text-sm" style={{ color: "#8B5E3C" }}>
          {items.reduce((s, i) => s + i.qty, 0)} productos
        </span>
        <span className="font-black text-lg tracking-wide" style={{ color: "var(--gold)" }}>{fmt(total)}</span>
      </div>

      <div className="px-5 py-3 flex flex-col gap-1 overflow-y-auto flex-1">
        {items.map((item) => (
          <div key={item.id} className="flex justify-between text-sm">
            <span style={{ color: "#8B5E3C" }}>{item.nombre || item.name} <span style={{ color: "#C4A882" }}>x{item.qty}</span></span>
            <span className="font-medium" style={{ color: "#3D1F0A" }}>{fmt(Number(item.precio || item.price) * item.qty)}</span>
          </div>
        ))}
      </div>

      <div className="px-5 pb-5 flex-shrink-0">
        <button
          onClick={onCheckout}
          className="w-full rounded-xl py-3.5 text-sm font-semibold tracking-wide transition-opacity hover:opacity-85"
          style={{ background: "var(--gold)", color: "#FAF5EC" }}
        >
          Revisar pedido
        </button>
      </div>

    </div>
  )
}