import { useCallback, useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

export const useGsapToggle = (options) => {
  const [isOpen, setIsOpen] = useState(false)

  const [ref, setRef] = useState(null)

  const { current: tl } = useRef(gsap.timeline({ paused: true }))

  useEffect(() => {
    if (!ref) return
    tl.to(ref, options)
    return () => tl
  }, [ref, options, tl])

  const toggle = useCallback(() => {
    isOpen ? tl.reverse() : tl.play()

    setIsOpen(!isOpen)
  }, [isOpen, tl])

  return [setRef, toggle]
}

export const useGsapToPlay = (options) => {
  const [ref, setRef] = useState(null)

  const { current: tl } = useRef(gsap.timeline({ paused: true }))

  useEffect(() => {
    if (!ref) return
    tl.to(ref, options)
    return () => tl
  }, [ref, options, tl])

  const play = useCallback(() => {
    tl.play()
  }, [tl])

  return [setRef, play]
}
export const useGsapTl = (options) => {
  const [ref, setRef] = useState(null)

  const { current: tl } = useRef(gsap.timeline({ paused: true }))

  useEffect(() => {
    if (!ref) return
    tl.to(ref, options)
    return () => tl
  }, [ref, options, tl])

  return [setRef, tl]
}
