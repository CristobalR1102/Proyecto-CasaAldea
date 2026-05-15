import { useState } from "react"

export default function ItemCard({ item, qty, onAdd, onRemove }) {
  const [expanded, setExpanded] = useState(false)
  const fmt = (n) => "$" + Number(n).toLocaleString("es-CL")
  const nombre = item.nombre || item.name
  const descripcion = item.descripcion || item.desc
  const precio = item.precio || item.price
  const tags = item.tags ? item.tags.split(",").map(t => t.trim()) : []

  return (
    <div className="border rounded-xl overflow-hidden" style={{ background: "#FAF5EC", borderColor: "#E8DDD0" }}>
      <div className="p-4 flex justify-between items-center gap-4 cursor-pointer" onClick={() => setExpanded(!expanded)}>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-sm font-medium" style={{ color: "#3D1F0A" }}>{nombre}</span>
            {tags.includes("popular") && (
              <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: "#FAE5E5", color: "var(--gold)", border: "1px solid #F5C6C6" }}>Popular</span>
            )}
            {tags.includes("veg") && (
              <span className="text-xs px-2 py-0.5 rounded-full bg-green-50 text-green-700 border border-green-200">Vegano</span>
            )}
          </div>
          {!expanded && (
            <p className="text-xs leading-relaxed truncate" style={{ color: "#8B5E3C" }}>{descripcion}</p>
          )}
          <p className="text-sm font-medium mt-2" style={{ color: "var(--gold)" }}>{fmt(precio)}</p>
        </div>

        <div className="flex items-center gap-3 flex-shrink-0">
          {qty === 0 ? (
            <button
              onClick={(e) => { e.stopPropagation(); onAdd(item) }}
              className="w-8 h-8 rounded-full flex items-center justify-center text-xl font-light transition-opacity hover:opacity-80"
              style={{ background: "var(--gold)", color: "#FAF5EC" }}
            >
              +
            </button>
          ) : (
            <div className="flex items-center gap-3">
              <button
                onClick={(e) => { e.stopPropagation(); onRemove(item) }}
                className="w-8 h-8 rounded-full border flex items-center justify-center text-lg transition-colors"
                style={{ borderColor: "#E8DDD0", color: "#3D1F0A" }}
              >
                -
              </button>
              <span className="text-sm font-medium w-4 text-center" style={{ color: "#3D1F0A" }}>{qty}</span>
              <button
                onClick={(e) => { e.stopPropagation(); onAdd(item) }}
                className="w-8 h-8 rounded-full flex items-center justify-center text-xl font-light hover:opacity-80 transition-opacity"
                style={{ background: "var(--gold)", color: "#FAF5EC" }}
              >
                +
              </button>
            </div>
          )}
          <span className="text-xs" style={{ color: "#C4A882" }}>{expanded ? "▲" : "▼"}</span>
        </div>
      </div>

      {expanded && (
        <div className="border-t" style={{ borderColor: "#E8DDD0" }}>
          {item.imagen_url ? (
            <img src={item.imagen_url} alt={nombre} className="w-full object-cover" style={{ maxHeight: "200px" }} />
          ) : (
            <div className="w-full flex items-center justify-center py-8" style={{ background: "#F0E8DC" }}>
              <span className="text-xs" style={{ color: "#C4A882" }}>Sin imagen disponible</span>
            </div>
          )}
          <p className="text-xs leading-relaxed p-4" style={{ color: "#8B5E3C" }}>{descripcion}</p>
        </div>
      )}
    </div>
  )
}