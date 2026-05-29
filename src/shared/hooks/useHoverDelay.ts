import { useRef, useState } from 'react'
export function useHoverDelay(showDelay = 150, hideDelay = 100) {
  const t = useRef<number | null>(null)
  const [open, setOpen] = useState(false)
  const enter = () => {
    if (t.current !== null) window.clearTimeout(t.current)
    t.current = window.setTimeout(() => setOpen(true), showDelay) as unknown as number
  }
  const leave = () => {
    if (t.current !== null) window.clearTimeout(t.current)
    t.current = window.setTimeout(() => setOpen(false), hideDelay) as unknown as number
  }
  return { open, enter, leave }
}
