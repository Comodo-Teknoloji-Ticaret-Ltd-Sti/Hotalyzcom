import * as React from "react"
import * as HoverCardPrimitive from "@radix-ui/react-hover-card"
import { cn } from "@/lib/utils"

const HoverCard = HoverCardPrimitive.Root
const HoverCardTrigger = HoverCardPrimitive.Trigger
const HoverCardPortal = HoverCardPrimitive.Portal

const HoverCardContent = React.forwardRef(function HoverCardContent({ className, ...props }, ref) {
  return (
    <HoverCardPrimitive.Content
      ref={ref}
      className={cn("z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none", className)}
      {...props}
    />
  );
});
HoverCardContent.displayName = "HoverCardContent";

export {
  HoverCard,
  HoverCardTrigger,
  HoverCardPortal,
  HoverCardContent
}
