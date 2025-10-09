import { MinimalNav } from "@/components/minimal-nav"
import { UniqueHero } from "@/components/unique-hero"
import { UniqueAbout } from "@/components/unique-about"
import { UniqueServices } from "@/components/unique-services"
import { UniqueExperience } from "@/components/unique-experience"
import { UniqueProjects } from "@/components/unique-projects"
import { UniqueSkills } from "@/components/unique-skills"
import { UniqueContact } from "@/components/unique-contact"

export default function Home() {
  return (
    <main className="min-h-screen">
      <MinimalNav />
      <UniqueHero />
      <UniqueAbout />
      <UniqueServices />
      <UniqueExperience />
      <UniqueProjects />
      <UniqueSkills />
      <UniqueContact />
    </main>
  )
}
