import { FolderGit2 } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { academicProjects } from "@/lib/cv"

export function Projects() {
  return (
    <section
      id="projects"
      className="px-4 md:px-8 py-20 md:py-28 max-w-5xl mx-auto"
    >
      <SectionHeading eyebrow="Coursework" title="Academic Projects" />

      <div className="grid gap-4 md:grid-cols-3">
        {academicProjects.map((project, idx) => (
          <div
            key={idx}
            className="rounded-lg border border-neutral-800 bg-neutral-950 p-6 hover:border-neutral-700 transition-colors"
          >
            <FolderGit2
              className="h-5 w-5 text-neutral-400 mb-4"
              aria-hidden
            />
            <p className="text-sm text-neutral-200 leading-relaxed">
              {project}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
