import * as React from "react"
import { cn } from "@/lib/utils"

const Table = React.forwardRef(function Table({ className, ...props }, ref) {
  return (
    <table ref={ref} className={cn("w-full caption-bottom text-sm", className)} {...props} />
  );
});
Table.displayName = "Table";

export { Table }
