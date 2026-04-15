import { FileText } from "lucide-react"
import { Card } from "@/components/ui/card"
import { SectionHeading } from "@/components/section-heading"
import { publications } from "@/lib/cv"

export function Publications() {
  return (
    <section
      id="publications"
      className="px-4 md:px-8 py-20 md:py-28 max-w-5xl mx-auto"
    >
      <SectionHeading eyebrow="Research" title="Publications" />

      <div className="space-y-4">
        {publications.map((pub, idx) => (
          <Card
            key={idx}
            className="bg-neutral-950 border-neutral-800 p-6 md:p-7"
          >
            <div className="flex items-start gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-neutral-900 ring-1 ring-neutral-800">
                <FileText className="h-4 w-4 text-neutral-300" aria-hidden />
              </span>
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-neutral-500">
                  {pub.venue} · {pub.year}
                </p>
                <p className="mt-2 text-sm md:text-base text-neutral-200 leading-relaxed">
                  {pub.citation}
                </p>
                {pub.link && (
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex text-sm text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    View Publication →
                  </a>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
