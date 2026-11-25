import Page from './Page'
import { FaGithub } from 'react-icons/fa'

function ProjectPage({ project }) {
  const { title, status, description, stack, github, live } = project

  return (
    <Page>
      <p className="text-sm uppercase tracking-widest text-zinc-500">Chapter I</p>
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="text-sm italic text-zinc-500">{status}</p>

      <p className="mt-6">{description}</p>

      {/* stack tags: .map over stack, one <span> each */}
      <div className="flex flex-wrap gap-2 mt-6">
        {stack.map((tech) => (
          <span key={tech} className="px-2 py-1 text-sm border rounded">{tech}</span>
        ))}
      </div>

      {/* links pinned to the bottom */}
      <div className="mt-auto flex justify-center gap-6">
        <a href={github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-zinc-500 transition-colors">
          <FaGithub />
          GitHub
        </a>
        {live && (
          <a href={live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-zinc-500 transition-colors">
            Live Demo
          </a>
        )}
      </div>
    </Page>
  )
}

export default ProjectPage