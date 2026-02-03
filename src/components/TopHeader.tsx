import { Settings, Rows3, SlidersHorizontal } from 'lucide-react'

export function TopHeader() {
  return (
    <header className="flex items-center justify-between px-4 py-3 bg-[#14181c]">
      <button className="text-[#9ab]">
        <Settings size={24} />
      </button>
      <span className="text-white font-semibold text-lg">Vic</span>
      <div className="flex gap-4">
        <button className="text-[#9ab]">
          <Rows3 size={24} />
        </button>
        <button className="text-[#9ab]">
          <SlidersHorizontal size={24} />
        </button>
      </div>
    </header>
  )
}
