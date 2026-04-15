import { Briefcase, MapPin } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { experience } from "@/lib/cv"

export function Experience() {
  return (
    <section
      id="experience"
      className="px-4 md:px-8 py-20 md:py-28 max-w-5xl mx-auto"
    >
      <SectionHeading eyebrow="Career" title="Experience" />

      <ol className="relative border-l border-neutral-800 ml-3 md:ml-4">
        {experience.map((job, idx) => (
          <li key={idx} className="mb-12 last:mb-0 pl-6 md:pl-10 relative">
            {/* Timeline dot */}
            <span
              className="absolute -left-[7px] top-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-neutral-200 ring-4 ring-black"
              aria-hidden
            />

            <div className="flex flex-col gap-1">
              <p className="font-mono text-xs uppercase tracking-wider text-neutral-500">
                {job.period}
              </p>
              <h3 className="text-xl md:text-2xl font-semibold text-neutral-100">
                {job.role}
              </h3>
              <p className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-neutral-400">
                <span className="inline-flex items-center gap-1.5">
                  <Briefcase
                    className="h-3.5 w-3.5 text-neutral-500"
                    aria-hidden
                  />
                  {job.company}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin
                    className="h-3.5 w-3.5 text-neutral-500"
                    aria-hidden
                  />
                  {job.location}
                </span>
              </p>
            </div>

            {/* Bullets */}
            {job.bullets.length > 0 && (
              <ul className="mt-4 space-y-2 text-neutral-300 leading-relaxed">
                {job.bullets.map((bullet, i) => (
                  <li key={i} className="relative pl-5">
                    <span
                      className="absolute left-0 top-2.5 h-1 w-1 rounded-full bg-neutral-500"
                      aria-hidden
                    />
                    {bullet}
                  </li>
                ))}
              </ul>
            )}

            {/* Grouped sub-projects (e.g. IIT) */}
            {job.groups?.map((group, gi) => (
              <div key={gi} className="mt-5">
                <h4 className="text-sm font-semibold uppercase tracking-wide text-neutral-200">
                  {group.title}
                </h4>
                <ul className="mt-2 space-y-2 text-neutral-300 leading-relaxed">
                  {group.bullets.map((bullet, i) => (
                    <li key={i} className="relative pl-5">
                      <span
                        className="absolute left-0 top-2.5 h-1 w-1 rounded-full bg-neutral-500"
                        aria-hidden
                      />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </li>
        ))}
      </ol>
    </section>
  )
}
