import * as React from "react"
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area"
import { cn } from "@/lib/utils"

const ScrollArea = React.forwardRef(function ScrollArea({ className, ...props }, ref) {
  return (
    <ScrollAreaPrimitive.Root ref={ref} className={cn("overflow-auto", className)} {...props} />
  );
});
ScrollArea.displayName = "ScrollArea";

export { ScrollArea }
