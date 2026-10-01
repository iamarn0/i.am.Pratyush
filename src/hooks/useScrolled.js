import { useSyncExternalStore } from "react"

export function useScrolled(offset = 8) {
  return useSyncExternalStore(
    (onStoreChange) => {
      window.addEventListener("scroll", onStoreChange, { passive: true })
      return () => window.removeEventListener("scroll", onStoreChange)
    },
    () => window.scrollY > offset,
    () => false,
  )
}
