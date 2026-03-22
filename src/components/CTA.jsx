import { useInView } from '../hooks'

export default function CTA() {
  const [ref, vis] = useInView()
  return (
    <section className="relative px-6 md:px-16 py-32 text-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 70% at 50% 50%,rgba(212,245,78,.05),transparent)' }} />

      <div ref={ref} className={`fade-in ${vis ? 'show' : ''} relative z-10`}>
        <div className="inline-flex items-center gap-2 font-mono text-[10px] text-emerald-400 border border-emerald-400/20 px-4 py-1.5 rounded-full mb-8 tracking-wide">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Available for new projects
        </div>

        <h2 className="font-serif text-[clamp(48px,7vw,88px)] leading-[.92] tracking-[-2.5px] mb-6">
          Ready to<br /><em className="italic text-lime">get started?</em>
        </h2>

        <p className="text-[16px] text-gray-400 max-w-lg mx-auto mb-12 leading-relaxed font-light">
          Let's build something amazing together. Whether it's a full-stack application, AI integration, or solving a complex problem, I'm ready to help.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-6">
          <a href="mailto:rishabh45628@gmail.com"
            className="font-mono text-[12px] font-semibold bg-lime text-bg px-8 py-3.5 rounded-md hover:bg-lime-dark transition-all duration-200 hover:-translate-y-0.5 tracking-wide">
            Start a Project →
          </a>
          <a href="https://github.com/rishu685" target="_blank" rel="noopener"
            className="font-mono text-[12px] text-white px-8 py-3.5 border border-white/10 rounded-md hover:border-white/25 transition-all duration-200 hover:-translate-y-0.5">
            View on GitHub
          </a>
        </div>

        <p className="font-mono text-[11px] text-gray-600 tracking-wide">
          Free 30-minute call · No obligation · India &amp; Worldwide
        </p>
      </div>
    </section>
  )
}
