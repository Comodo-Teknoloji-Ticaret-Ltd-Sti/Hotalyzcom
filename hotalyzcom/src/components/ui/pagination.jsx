import * as React from "react"
import { cn } from "@/lib/utils"

function Pagination({ className, ...props }, ref) {
  return (
    <nav ref={ref} className={cn("flex items-center justify-between", className)} {...props} />
  )
}

const ForwardedPagination = React.forwardRef(Pagination)
ForwardedPagination.displayName = "Pagination"

export { ForwardedPagination as Pagination }
