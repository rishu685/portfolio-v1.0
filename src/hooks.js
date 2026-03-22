import { useState, useEffect, useRef } from 'react'

export function useInView(opts = {}) {
  const ref = useRef()
  const [vis, setVis] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVis(true)
          if (opts.once !== false) obs.unobserve(ref.current)
        }
      },
      { threshold: opts.threshold || 0.1 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return [ref, vis]
}

export function useCounter(target, trigger) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!trigger) return
    let n = 0
    const step = target / 55
    const iv = setInterval(() => {
      n += step
      if (n >= target) { n = target; clearInterval(iv) }
      setVal(Math.floor(n))
    }, 22)
    return () => clearInterval(iv)
  }, [trigger, target])
  return val
}
