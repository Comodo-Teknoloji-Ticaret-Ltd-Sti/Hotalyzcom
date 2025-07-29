import * as React from "react"
import { cn } from "@/lib/utils"

const Progress = React.forwardRef(function Progress({ className, value, max = 100, ...props }, ref) {
  return (
    <progress
      ref={ref}
      className={cn("w-full h-2 rounded bg-muted", className)}
      value={value}
      max={max}
      {...props}
    />
  );
});
Progress.displayName = "Progress";

export { Progress }
