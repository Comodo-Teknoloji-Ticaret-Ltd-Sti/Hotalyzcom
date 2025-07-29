import * as React from "react"
import { cn } from "@/lib/utils"

function Sonner({ className, ...props }, ref) {
  return (
    <div ref={ref} className={cn("sonner-root", className)} {...props} />
  )
}

const ForwardedSonner = React.forwardRef(Sonner)
ForwardedSonner.displayName = "Sonner"

export { ForwardedSonner as Sonner }
