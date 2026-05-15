import logo from "../assets/Logo_CasaAldea.jpg"

export default function Header({ activeCategory, setActiveCategory, cartCount, onInfo, onEspecial, menu }) {
  return (
    <header className="sticky top-0 z-50 border-b" style={{ background: "#1C1008", borderColor: "#3D1F0A" }}>
      <div className="max-w-7xl mx-auto px-4 pt-4 pb-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Casa Aldea Logo" className="h-12 w-12 object-contain rounded-full" />
          <div>
            <div className="font-black text-2xl tracking-widest" style={{ color: "var(--gold)" }}>CASA ALDEA</div>
            <div className="text-xs tracking-widest mt-0.5" style={{ color: "#8B5E3C" }}>HAMBURGUESAS ARTESANALES</div>
          </div>
        </div>
        <div className="flex items-center gap-1.5">
          <button
            onClick={onInfo}
            className="text-xs border rounded-full px-3 py-1.5 transition-colors hover:bg-neutral-800"
            style={{ borderColor: "#3D1F0A", color: "#8B5E3C" }}
          >
            Info
          </button>
          <button
            onClick={onEspecial}
            className="text-xs border rounded-full px-3 py-1.5 transition-colors hover:bg-neutral-800"
            style={{ borderColor: "#3D1F0A", color: "#8B5E3C" }}
          >
            Especial
          </button>
          <div
            className="text-xs font-medium border rounded-full px-3 py-1.5"
            style={{ borderColor: "var(--gold)", color: "var(--gold)" }}
          >
            Carrito ({cartCount})
          </div>
        </div>
      </div>

      <nav className="max-w-7xl mx-auto flex gap-2 px-4 pb-3 overflow-x-auto scrollbar-hide">
        {menu.map((section) => (
          <button
            key={section.category}
            onClick={() => setActiveCategory(section.category)}
            className="whitespace-nowrap text-xs tracking-wide px-4 py-1.5 rounded-full border transition-all"
            style={
              activeCategory === section.category
                ? { background: "var(--gold)", color: "#FAF5EC", borderColor: "var(--gold)", fontWeight: 600 }
                : { borderColor: "#3D1F0A", color: "#8B5E3C" }
            }
          >
            {section.category}
          </button>
        ))}
      </nav>
    </header>
  )
}