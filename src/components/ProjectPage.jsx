import Page from './Page'
import { FaGithub } from 'react-icons/fa'

function ProjectPage({ project, chapter }) {
  const { title, status, description, stack, github, live, role, team } = project


  return (
    <Page>
      <p className="text-sm uppercase tracking-widest text-zinc-500">{chapter}</p>
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="text-sm italic text-zinc-500">{status}</p>

      <p className="mt-6">{description}</p>

      <div className="flex flex-wrap gap-2 mt-6">
        {stack.map((tech) => (
          <span key={tech} className="px-2 py-1 text-sm border rounded">{tech}</span>
        ))}
      </div>

     {role && (
        <p className="mt-4"><span className="font-semibold">My role:</span> {role}</p>
    )}
    {team && (
        <p className="mt-1 text-sm text-zinc-500">Team: {team}</p>
    )}


      <div className="mt-auto flex justify-center gap-6">
        {github && (
    <a href={github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-zinc-500 transition-colors">
        <FaGithub />
        GitHub
        </a>
    )}
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