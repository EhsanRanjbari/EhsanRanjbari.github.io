import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-10 md:mb-12", className)}>
      {eyebrow && (
        <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
        {title}
      </h2>
    </div>
  )
}
