import * as React from "react"
import * as SelectPrimitive from "@radix-ui/react-select"
import { cn } from "@/lib/utils"

const Select = SelectPrimitive.Root
const SelectTrigger = SelectPrimitive.Trigger
const SelectContent = React.forwardRef(function SelectContent({ className, ...props }, ref) {
  return (
    <SelectPrimitive.Content
      ref={ref}
      className={cn("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md", className)}
      {...props}
    />
  );
});
SelectContent.displayName = "SelectContent";

export {
  Select,
  SelectTrigger,
  SelectContent
}
