export function Header() {
  return (
    <header className="bg-[#14181c] border-b border-[#2c3440]">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-2xl font-bold tracking-tight text-white">
            Letterboxd
          </span>
          <span className="text-xs font-semibold uppercase tracking-widest text-[#9ab] mt-1">
            Watchlist
          </span>
        </div>
        <div className="flex gap-1">
          <span className="w-2 h-2 rounded-full bg-[#00e054]" />
          <span className="w-2 h-2 rounded-full bg-[#40bcf4]" />
          <span className="w-2 h-2 rounded-full bg-[#ee7000]" />
        </div>
      </div>
    </header>
  )
}
