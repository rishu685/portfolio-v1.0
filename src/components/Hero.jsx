export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-28 pb-20 px-6 md:px-16 overflow-hidden">
      <div className="hero-grid absolute inset-0 pointer-events-none" />
      <div className="absolute top-[-200px] right-[-100px] w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle,rgba(212,245,78,.06),transparent 60%)' }} />

      <div className="relative z-10 max-w-5xl">
        <div className="inline-flex items-center gap-2 font-mono text-[11px] text-lime border border-lime/20 px-3 py-1.5 rounded-full mb-8 tracking-wide">
          <span className="w-1.5 h-1.5 rounded-full bg-lime animate-blink" />
          Available for Freelance Projects · Ghaziabad, India
        </div>

        <h1 className="font-serif text-[clamp(52px,8vw,96px)] leading-[.92] tracking-[-2px] mb-5">
          Full Stack<br />
          <em className="text-lime not-italic italic">Web Developer.</em><br />
          <span className="text-gray-500">Building Modern Solutions.</span>
        </h1>

        <p className="text-[17px] text-gray-400 leading-relaxed max-w-[540px] mb-12 font-light">
          React.js, Node.js, and MongoDB expert —{' '}
          <strong className="text-white font-medium">passionate about clean code and user experience</strong>. 
          Creating responsive, scalable applications with modern technologies.
        </p>

        <div className="flex flex-wrap gap-3 mb-16">
          <a href="#projects"
            className="font-mono text-[12px] font-semibold bg-lime text-bg px-7 py-3.5 rounded-md hover:bg-lime-dark transition-all duration-200 hover:-translate-y-0.5 tracking-wide">
            View My Work →
          </a>
          <a href="#services"
            className="font-mono text-[12px] text-white px-7 py-3.5 border border-white/10 rounded-md hover:border-white/25 transition-all duration-200 hover:-translate-y-0.5 bg-white/[0.02]">
            Explore Services
          </a>
        </div>

        <div className="flex flex-wrap gap-10">
          {[
            { n: '3+',   l: 'Internships',     s: 'HAL, Alfido Tech, Skillrisers' },
            { n: '8+',  l: 'Projects Shipped', s: 'Full Stack, AI Chat, Tools' },
            { n: 'BTech',  l: 'CSE Student',    s: 'IMSEC, Ghaziabad (2022-2026)' },
            { n: '🚀',    l: 'Open Source',       s: 'Available on GitHub' },
          ].map(({ n, l, s }) => (
            <div key={l}>
              <div className="font-serif text-5xl text-white leading-none tracking-[-2px]">{n}</div>
              <div className="font-mono text-[10px] text-gray-500 tracking-widest uppercase mt-1.5">{l}</div>
              <div className="text-[12px] text-gray-600 mt-0.5">{s}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
