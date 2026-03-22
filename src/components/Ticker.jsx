import { TICKER } from '../data'

export default function Ticker() {
  const items = [...TICKER, ...TICKER]
  return (
    <div className="border-t border-b border-white/[0.06] bg-s1 py-3.5 overflow-hidden">
      <div className="ticker-track flex whitespace-nowrap w-max">
        {items.map((t, i) => (
          <span key={i} className="font-mono text-[12px] text-gray-500 px-7 flex items-center gap-2.5 tracking-wide">
            {t}<span className="text-lime text-lg">·</span>
          </span>
        ))}
      </div>
    </div>
  )
}
