import * as React from "react"
import * as MenubarPrimitive from "@radix-ui/react-menubar"
import { cn } from "@/lib/utils"

const Menubar = MenubarPrimitive.Root
const MenubarTrigger = MenubarPrimitive.Trigger
const MenubarContent = React.forwardRef(function MenubarContent({ className, ...props }, ref) {
  return (
    <MenubarPrimitive.Content
      ref={ref}
      className={cn("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md", className)}
      {...props}
    />
  );
});
MenubarContent.displayName = "MenubarContent";

export {
  Menubar,
  MenubarTrigger,
  MenubarContent
}
