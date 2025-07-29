import * as React from "react"
import { cn } from "@/lib/utils"

function Toast({ className, ...props }, ref) {
  return (
    <div ref={ref} className={cn("toast-root", className)} {...props} />
  )
}

const ForwardedToast = React.forwardRef(Toast)
ForwardedToast.displayName = "Toast"

export { ForwardedToast as Toast }
