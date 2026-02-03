import { Film, Search, PlusCircle, Zap, User } from 'lucide-react'

export function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-[#14181c] border-t border-[#2c3440] pb-[env(safe-area-inset-bottom)]">
      <div className="flex justify-around items-center h-12">
        <button className="flex flex-col items-center text-[#9ab]">
          <Film size={24} />
        </button>
        <button className="flex flex-col items-center text-[#9ab]">
          <Search size={24} />
        </button>
        <button className="flex flex-col items-center text-[#00e054]">
          <PlusCircle size={28} />
        </button>
        <button className="flex flex-col items-center text-[#9ab]">
          <Zap size={24} />
        </button>
        <button className="flex flex-col items-center text-[#40bcf4]">
          <User size={24} />
        </button>
      </div>
    </nav>
  )
}
