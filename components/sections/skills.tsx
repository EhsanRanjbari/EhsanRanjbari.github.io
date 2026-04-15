import { Badge } from "@/components/ui/badge"
import { SectionHeading } from "@/components/section-heading"
import { skills } from "@/lib/cv"

export function Skills() {
  return (
    <section
      id="skills"
      className="px-4 md:px-8 py-20 md:py-28 max-w-5xl mx-auto"
    >
      <SectionHeading eyebrow="Toolbox" title="Skills" />

      <div className="grid gap-6 md:grid-cols-2">
        {skills.map((group) => (
          <div
            key={group.category}
            className="rounded-lg border border-neutral-800 bg-neutral-950 p-6"
          >
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
              {group.category}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <Badge
                  key={item}
                  variant="secondary"
                  className="bg-neutral-900 text-neutral-200 border border-neutral-800 hover:bg-neutral-800/80"
                >
                  {item}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
