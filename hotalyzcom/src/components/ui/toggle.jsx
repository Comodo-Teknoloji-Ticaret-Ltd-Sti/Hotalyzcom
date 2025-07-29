import * as React from "react"
import { cn } from "@/lib/utils"

const Toggle = React.forwardRef(function Toggle({ className, ...props }, ref) {
  return (
    <button
      ref={ref}
      className={cn("toggle-root", className)}
      {...props}
    />
  );
});
Toggle.displayName = "Toggle";

export { Toggle }
