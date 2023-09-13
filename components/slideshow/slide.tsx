import { FadeOnVisible } from "@/components/ui/fade-on-visible"
import { CNProps, cn } from "@/lib/utils"

export const SlideContainer = ({ children, className }: CNProps) => {
  return (
    <main
      className={cn(
        "max-h-screen w-full snap-y snap-mandatory overflow-y-scroll [-ms-overflow-style:'none'] [scrollbar-width:'none'] [&::-webkit-scrollbar]:hidden",
        className,
      )}
    >
      {children}
    </main>
  )
}

export const Slide = ({ children, className }: CNProps) => {
  return (
    <section
      className={cn(
        "grid h-screen w-full snap-start gap-2 pt-8 lg:gap-6 lg:pt-16",
        className,
      )}
    >
      {children}
    </section>
  )
}