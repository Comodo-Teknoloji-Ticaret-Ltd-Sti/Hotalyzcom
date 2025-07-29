import * as React from "react"
import { cn } from "@/lib/utils"

function Toaster({ className, ...props }, ref) {
  return (
    <div ref={ref} className={cn("toaster-root", className)} {...props} />
  )
}

const ForwardedToaster = React.forwardRef(Toaster)
ForwardedToaster.displayName = "Toaster"

export { ForwardedToaster as Toaster }
