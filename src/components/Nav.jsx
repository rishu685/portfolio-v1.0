import { useState, useEffect } from 'react'

const links = [['#services','Services'],['#projects','Projects'],['#experience','Experience'],['#faq','FAQ']]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-bg/90 backdrop-blur-xl border-b border-white/[0.06]' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-16 h-16 flex items-center justify-between">
        <div className="font-serif text-xl text-white">Rishabh<span className="text-lime">.</span></div>

        <div className="hidden md:flex items-center gap-8">
          {links.map(([href, label]) => (
            <a key={href} href={href} className="nav-link-hover font-mono text-[11px] text-gray-400 uppercase tracking-widest transition-colors duration-200">
              {label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href="mailto:rishabh45628@gmail.com"
            className="font-mono text-[11px] text-gray-300 px-4 py-2 border border-white/10 rounded-md hover:border-white/25 transition-colors hover:text-white">
            Email
          </a>
          <a href="https://github.com/rishu685" target="_blank" rel="noopener"
            className="font-mono text-[11px] text-bg bg-lime px-4 py-2 rounded-md font-semibold hover:bg-lime-dark transition-colors tracking-wide">
            GitHub →
          </a>
        </div>

        <button className="md:hidden text-gray-400 hover:text-white" onClick={() => setOpen(o => !o)}>
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="6" x2="19" y2="6" />
            <line x1={open ? '5' : '3'} y1="12" x2={open ? '17' : '19'} y2="12" />
            <line x1="3" y1="18" x2="19" y2="18" />
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-s1 border-t border-white/[0.06] px-6 py-5 flex flex-col gap-4">
          {links.map(([href, label]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}
              className="font-mono text-xs text-gray-400 uppercase tracking-widest hover:text-lime transition-colors">
              {label}
            </a>
          ))}
          <a href="mailto:tanishkraghav2004@gmail.com"
            className="font-mono text-xs text-bg bg-lime px-4 py-2 rounded text-center font-semibold mt-2">
            Get in Touch →
          </a>
        </div>
      )}
    </nav>
  )
}
