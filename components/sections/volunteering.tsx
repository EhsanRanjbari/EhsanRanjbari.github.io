import { Users } from "lucide-react"
import { Card } from "@/components/ui/card"
import { SectionHeading } from "@/components/section-heading"
import { volunteering } from "@/lib/cv"

export function Volunteering() {
  return (
    <section
      id="volunteering"
      className="px-4 md:px-8 py-20 md:py-28 max-w-5xl mx-auto"
    >
      <SectionHeading eyebrow="Community" title="Volunteering" />

      <div className="grid gap-6 md:grid-cols-2">
        {volunteering.map((entry, idx) => (
          <Card
            key={idx}
            className="bg-neutral-950 border-neutral-800 p-6 md:p-7"
          >
            <div className="flex items-start gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-neutral-900 ring-1 ring-neutral-800">
                <Users className="h-4 w-4 text-neutral-300" aria-hidden />
              </span>
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-neutral-500">
                  {entry.period}
                </p>
                <h3 className="mt-1 text-lg font-semibold text-neutral-100 leading-snug">
                  {entry.title}
                </h3>
                {entry.description && (
                  <p className="text-sm text-neutral-400">
                    {entry.description}
                  </p>
                )}
              </div>
            </div>

            <ul className="mt-5 space-y-2 text-sm text-neutral-300 leading-relaxed">
              {entry.bullets.map((bullet, i) => (
                <li key={i} className="relative pl-4">
                  <span
                    className="absolute left-0 top-2 h-1 w-1 rounded-full bg-neutral-500"
                    aria-hidden
                  />
                  {bullet}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </section>
  )
}
