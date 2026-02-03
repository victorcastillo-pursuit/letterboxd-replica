const tabs = ['Profile', 'Diary', 'Lists', 'Watchlist']

export function TopTabs() {
  return (
    <div className="flex border-b border-[#2c3440]">
      {tabs.map(tab => (
        <button
          key={tab}
          className={`flex-1 py-3 text-sm font-medium transition-colors ${
            tab === 'Watchlist'
              ? 'text-white bg-[#456] rounded-full mx-1 my-1'
              : 'text-[#9ab]'
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  )
}
