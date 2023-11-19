import React from "react"
import dynamic from "next/dynamic"

const Project = dynamic(() => import("./_components/project"), { ssr: false })

export default function ProjectsPage() {
  const projects: Project[] = [
    {
      title: "Vercel.com",
      description: "The Vercel homepage",
      year: 2023,
      link: "https://vercel.com/home",
    },
    {
      title: "Web Interface Guidelines",
      description: "A list of details that make a good web interface",
      year: 2023,
      link: "https://interfaces.rauno.me/",
    },
    {
      title: "Vesper",
      description: "Peppermint and orange flavored dark theme for VSCode",
      year: 2023,
      link: "https://github.com/raunofreiberg/vesper",
    },
    {
      title: "(Basic) Bookmarks",
      description: "A home for internet discoveries",
      year: 2023,
      link: "https://bmrks.com/",
    },
    {
      title: "⌘K",
      description: "Fast, unstyled, composable command menu for React",
      year: 2022,
      link: "https://cmdk.paco.me/",
    },
    {
      title: "User Interface Gallery",
      description: "Painting with user interfaces",
      year: 2022,
      link: "https://ui.gallery/",
    },
    {
      title: "Ultra",
      description: "A multi-media smart canvas for your mind",
      year: 2022,
      link: "https://ultra.tf/",
    },
    {
      title: "uiwtf",
      description: "An experimental laboratory for user interfaces",
      year: 2022,
      link: "https://uiw.tf/",
    },
  ]

  return (
    <main className="max-w-2xl mx-auto px-2 mt-32">
      <div className="flex flex-col">
        {projects.map((project, i) => {
          return (
            <Project
              project={project}
              index={i}
              key={`project-${project.title}-${i}`}
            />
          )
        })}
      </div>
    </main>
  )
}
