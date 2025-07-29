import * as React from "react"
import useEmblaCarousel from "embla-carousel-react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

function Carousel({ children, className, ...props }, ref) {
  const [emblaRef] = useEmblaCarousel()
  return (
    <div ref={ref} className={cn("relative", className)} {...props}>
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">{children}</div>
      </div>
      {/* Kontroller ve diğer özellikler sadeleştirildi */}
    </div>
  )
}

const ForwardedCarousel = React.forwardRef(Carousel)
ForwardedCarousel.displayName = "Carousel"

export { ForwardedCarousel as Carousel }
