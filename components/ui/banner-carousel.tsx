"use client"

import Image from "next/image"
import { useEffect, useRef, useState, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils" // opsional; kalau tidak punya, ganti dengan join className biasa

type Slide = { src: string; alt: string }

export function BannerCarousel({
  slides = [
    { src: "/images/hero-banner.png", alt: "Blok Herba Community Banner 1" },
    { src: "/images/hero-banner-2.png", alt: "Blok Herba Community Banner 2" },
    { src: "/images/hero-banner-3.png", alt: "Blok Herba Community Banner 3" },
  ],
  autoplay = true,
  interval = 5000,
  className,
}: {
  slides?: Slide[]
  autoplay?: boolean
  interval?: number
  className?: string
}) {
  const [index, setIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  // swipe/drag
  const startX = useRef<number | null>(null)
  const deltaX = useRef<number>(0)
  const containerRef = useRef<HTMLDivElement | null>(null)

  const goTo = useCallback((i: number) => {
    setIndex((prev) => {
      const next = (i + slides.length) % slides.length
      if (prev === next) return prev
      return next
    })
  }, [slides.length])

  const next = useCallback(() => goTo(index + 1), [index, goTo])
  const prev = useCallback(() => goTo(index - 1), [index, goTo])

  // autoplay
  useEffect(() => {
    if (!autoplay || isPaused) return
    timerRef.current && clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length)
    }, interval)
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [autoplay, interval, slides.length, isPaused])

  // keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next()
      if (e.key === "ArrowLeft") prev()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [next, prev])

  // handlers drag/swipe
  const onPointerDown = (e: React.PointerEvent) => {
    (e.target as Element).setPointerCapture?.(e.pointerId)
    startX.current = e.clientX
    deltaX.current = 0
  }
  const onPointerMove = (e: React.PointerEvent) => {
    if (startX.current === null) return
    deltaX.current = e.clientX - startX.current
    // translate container while dragging (opsional untuk efek)
    if (containerRef.current) {
      containerRef.current.style.transition = "none"
      containerRef.current.style.transform = `translateX(calc(${-index * 100}% + ${-deltaX.current}px))`
    }
  }
  const onPointerUp = () => {
    if (startX.current === null) return
    const threshold = 60 // px
    if (deltaX.current > threshold) prev()
    else if (deltaX.current < -threshold) next()
    // reset transform
    if (containerRef.current) {
      containerRef.current.style.transition = ""
      containerRef.current.style.transform = `translateX(${-index * 100}%)`
    }
    startX.current = null
    deltaX.current = 0
  }

  // touch events (untuk iOS yang kadang beda feel)
  const touchStartX = useRef<number | null>(null)
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const dx = e.changedTouches[0].clientX - touchStartX.current
    const threshold = 50
    if (dx > threshold) prev()
    else if (dx < -threshold) next()
    touchStartX.current = null
  }

  return (
    <div
      className={cn(
        "relative select-none rounded-2xl overflow-hidden group", // ⬅️ tambahin group
        className
      )}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-roledescription="carousel"
      aria-label="Banner Komunitas"
    >
      {/* Track */}
      <div
        ref={containerRef}
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(${-index * 100}%)` }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {slides.map((s, i) => (
          <div
            className="relative min-w-full h-[240px] md:h-[360px] lg:h-[420px]"
            key={i}
            aria-hidden={index !== i}
          >
            <Image
              src={s.src}
              alt={s.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="w-full h-full object-cover"
              priority={i === 0}
            />
          </div>
        ))}
      </div>

      {/* Prev / Next */}
      <button
        type="button"
        aria-label="Sebelumnya"
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 
                  inline-flex items-center justify-center rounded-full 
                  bg-white/80 hover:bg-white shadow-md p-2 backdrop-blur-sm 
                  focus:outline-none focus:ring-2 focus:ring-emerald-500
                  opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                  transition-opacity duration-300"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        type="button"
        aria-label="Berikutnya"
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 
                  inline-flex items-center justify-center rounded-full 
                  bg-white/80 hover:bg-white shadow-md p-2 backdrop-blur-sm 
                  focus:outline-none focus:ring-2 focus:ring-emerald-500
                  opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                  transition-opacity duration-300"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>

  )
}
