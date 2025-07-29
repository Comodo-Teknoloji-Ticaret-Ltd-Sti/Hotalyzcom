import { useCallback } from "react"

export function useToast() {
  const toast = useCallback((msg) => {
    window.alert(msg)
  }, [])
  return { toast }
}
