import { Languages as LanguagesIcon } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { languages } from "@/lib/cv"

export function Languages() {
  return (
    <section
      id="languages"
      className="px-4 md:px-8 py-20 md:py-28 max-w-5xl mx-auto"
    >
      <SectionHeading eyebrow="Spoken" title="Languages" />

      <div className="flex flex-wrap gap-3">
        {languages.map((lang) => (
          <div
            key={lang}
            className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-950 px-4 py-2 text-sm text-neutral-200"
          >
            <LanguagesIcon
              className="h-3.5 w-3.5 text-neutral-500"
              aria-hidden
            />
            {lang}
          </div>
        ))}
      </div>
    </section>
  )
}
