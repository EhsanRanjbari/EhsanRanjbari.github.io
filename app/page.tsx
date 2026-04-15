import { Hero } from "@/components/sections/hero"
import { Experience } from "@/components/sections/experience"
import { Education } from "@/components/sections/education"
import { Skills } from "@/components/sections/skills"
import { Publications } from "@/components/sections/publications"
import { Projects } from "@/components/sections/projects"
import { Languages } from "@/components/sections/languages"
import { profile } from "@/lib/cv"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-neutral-100">
      <Hero />
      <Experience />
      <div className="mx-auto h-px w-full max-w-5xl bg-neutral-900" />
      <Education />
      <div className="mx-auto h-px w-full max-w-5xl bg-neutral-900" />
      <Skills />
      <div className="mx-auto h-px w-full max-w-5xl bg-neutral-900" />
      <Publications />
      <div className="mx-auto h-px w-full max-w-5xl bg-neutral-900" />
      <Projects />
      <div className="mx-auto h-px w-full max-w-5xl bg-neutral-900" />
      <Languages />

      <footer className="border-t border-neutral-900 mt-10">
        <div className="max-w-5xl mx-auto px-4 md:px-8 py-10 text-sm text-neutral-500 flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {profile.name}
          </p>
        </div>
      </footer>
    </main>
  )
}
