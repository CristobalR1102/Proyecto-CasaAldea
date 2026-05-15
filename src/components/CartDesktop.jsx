export default function CartDesktop({ cart, onCheckout }) {
  const items = Object.values(cart)
  const total = items.reduce((sum, item) => sum + Number(item.precio || item.price) * item.qty, 0)
  const fmt = (n) => "$" + Number(n).toLocaleString("es-CL")

  return (
    <div className="sticky top-24 border rounded-xl overflow-hidden" style={{ background: "#FAF5EC", borderColor: "#E8DDD0" }}>
      <div className="px-5 py-4 border-b" style={{ borderColor: "#E8DDD0" }}>
        <span className="font-black text-lg tracking-widest" style={{ color: "var(--gold)" }}>Tu pedido</span>
      </div>

      <div className="px-5 py-4 flex flex-col gap-2 min-h-32">
        {items.length === 0 ? (
          <p className="text-xs text-center py-6" style={{ color: "#C4A882" }}>Agrega productos al carrito</p>
        ) : (
          items.map((item) => (
            <div key={item.id} className="flex justify-between text-sm">
              <span style={{ color: "#8B5E3C" }}>{item.nombre || item.name} <span style={{ color: "#C4A882" }}>x{item.qty}</span></span>
              <span className="font-medium" style={{ color: "#3D1F0A" }}>{fmt(Number(item.precio || item.price) * item.qty)}</span>
            </div>
          ))
        )}
      </div>

      {items.length > 0 && (
        <div className="px-5 pb-5 border-t pt-4" style={{ borderColor: "#E8DDD0" }}>
          <div className="flex justify-between mb-4">
            <span className="text-sm" style={{ color: "#8B5E3C" }}>Total</span>
            <span className="font-black text-base" style={{ color: "var(--gold)" }}>{fmt(total)}</span>
          </div>
          <button
            onClick={onCheckout}
            className="w-full rounded-xl py-3.5 text-sm font-semibold tracking-wide transition-opacity hover:opacity-85"
            style={{ background: "var(--gold)", color: "#FAF5EC" }}
          >
            Revisar pedido
          </button>
        </div>
      )}
    </div>
  )
}