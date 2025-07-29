import * as React from "react"
import { cn } from "@/lib/utils"

const Separator = React.forwardRef(function Separator({ className, ...props }, ref) {
  return (
    <hr
      ref={ref}
      className={cn("shrink-0 border border-border", className)}
      {...props}
    />
  );
});
Separator.displayName = "Separator";

export { Separator }
