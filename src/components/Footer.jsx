const COLS = [
  {
    h: 'Services',
    links: [
      ['#services', 'Full Stack Development'],
      ['#services', 'Frontend Development'],
      ['#services', 'AI & Chat Apps'],
      ['#services', 'Problem Solving'],
    ],
  },
  {
    h: 'Work',
    links: [
      ['#projects', 'Krowdfund'],
      ['#projects', 'ResDeep'],
      ['#projects', 'AI Agent Chat App'],
      ['#projects', 'All Projects'],
    ],
  },
  {
    h: 'Connect',
    links: [
      ['https://github.com/rishu685', 'GitHub'],
      ['https://www.linkedin.com/in/a758a0214/', 'LinkedIn'],
      ['https://medium.com/@rishabh45628', 'Medium'],
      ['mailto:rishabh45628@gmail.com', 'Email'],
    ],
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] px-6 md:px-16 pt-14 pb-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        {/* Brand */}
        <div className="md:col-span-1">
          <div className="font-serif text-2xl mb-3">
            Rishabh<span className="text-lime">.</span>
          </div>
          <p className="text-[13px] text-gray-500 leading-relaxed max-w-[220px] font-light mb-5">
            Full Stack Developer & Problem Solver. Building responsive, scalable web solutions with modern technologies.
          </p>
          <a
            href="mailto:rishabh45628@gmail.com"
            className="block font-mono text-[11px] text-gray-500 hover:text-lime transition-colors mb-1.5 tracking-wide"
          >
            rishabh45628@gmail.com
          </a>
          <a
            href="https://github.com/rishu685"
            target="_blank"
            rel="noopener"
            className="block font-mono text-[11px] text-gray-500 hover:text-lime transition-colors tracking-wide"
          >
            GitHub · India
          </a>
        </div>

        {/* Link columns */}
        {COLS.map(col => (
          <div key={col.h}>
            <h4 className="font-mono text-[10px] text-white uppercase tracking-[2px] mb-4">{col.h}</h4>
            <div className="space-y-2.5">
              {col.links.map(([href, label]) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : '_self'}
                  rel={href.startsWith('http') ? 'noopener' : undefined}
                  className="block text-[13px] text-gray-500 hover:text-white transition-colors duration-200"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.06] pt-7 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="font-mono text-[11px] text-gray-600 tracking-wide">
          © 2026 <span className="text-lime">Rishabh Mishra</span>. All rights reserved.
        </div>
        <div className="flex items-center gap-5">
          {[
            ['https://github.com/rishu685', 'GitHub'],
            ['https://www.linkedin.com/in/a758a0214/', 'LinkedIn'],
            ['https://leetcode.com/u/ris1685/', 'LeetCode'],
          ].map(([href, label]) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener"
              className="font-mono text-[11px] text-gray-600 hover:text-lime transition-colors tracking-wide"
            >
              {label}
            </a>
          ))}
          <span className="font-mono text-[11px] text-gray-700">Available IST · GMT · EST</span>
        </div>
      </div>
    </footer>
  )
}
