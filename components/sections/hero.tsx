'use client'

import { Mail, MapPin, Phone } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons"
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
import { SplineScene } from "@/components/ui/splite"
import { profile } from "@/lib/cv"

export function Hero() {
  return (
    <section className="px-4 md:px-8 pt-6 md:pt-10">
      <Card className="w-full max-w-6xl mx-auto h-auto md:h-[560px] bg-black/[0.96] border-neutral-800 relative overflow-hidden">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />

        <div className="flex flex-col md:flex-row h-full">
          {/* Left: identity */}
          <div className="flex-1 p-8 md:p-12 relative z-10 flex flex-col justify-center">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
              {profile.name}
            </h1>
            <p className="mt-3 text-lg md:text-xl font-medium text-neutral-200">
              {profile.title}
            </p>
            <p className="mt-4 text-neutral-400 max-w-lg leading-relaxed">
              {profile.tagline}
            </p>

            {/* Contact row */}
            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-sm text-neutral-300">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-neutral-500" aria-hidden />
                {profile.location}
              </span>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Mail className="h-4 w-4 text-neutral-500" aria-hidden />
                {profile.email}
              </a>
              <a
                href={`tel:${profile.phone.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Phone className="h-4 w-4 text-neutral-500" aria-hidden />
                {profile.phone}
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <GithubIcon className="h-4 w-4 text-neutral-500" />
                GitHub
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <LinkedinIcon className="h-4 w-4 text-neutral-500" />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Right: 3D scene */}
          <div className="flex-1 relative min-h-[300px] md:min-h-0">
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        </div>
      </Card>
    </section>
  )
}
