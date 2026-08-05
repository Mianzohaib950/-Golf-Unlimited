import { useEffect, useRef, useState } from 'react'

interface CountUpProps {
  value: string
  duration?: number
  style?: React.CSSProperties
}

export default function CountUp({ value, duration = 1400, style }: CountUpProps) {
  const ref = useRef<HTMLDivElement>(null)
  const match = value.match(/^([\d.]+)(.*)$/)
  const target = match ? parseFloat(match[1]) : null
  const suffix = match ? match[2] : ''
  const [display, setDisplay] = useState(target === null ? value : `0${suffix}`)

  useEffect(() => {
    const el = ref.current
    if (!el || target === null) return

    let started = false
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || started) return
      started = true
      const start = performance.now()

      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        if (progress < 1) {
          setDisplay(`${Math.round(target * eased)}${suffix}`)
          requestAnimationFrame(tick)
        } else {
          setDisplay(`${target}${suffix}`)
        }
      }
      requestAnimationFrame(tick)
      observer.disconnect()
    }, { threshold: 0.3 })

    observer.observe(el)
    return () => observer.disconnect()
  }, [target, suffix, duration])

  return <div ref={ref} style={style}>{display}</div>
}
