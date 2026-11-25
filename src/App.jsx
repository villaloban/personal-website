import { useState } from 'react'
import Cover from './components/Cover'
import TableOfContents from './components/TableOfContents'
import ProjectPage from './components/ProjectPage'
import projects from './data/projects'
import collaborations from './data/collaborations'
import buildIndex from './data/buildIndex'
import SkillsPage from './components/SkillsPage'

function App() {  
  const [page, setPage] = useState(0)
  const projectStart = 2
  const collaborationStart = projectStart + projects.length
  const skillsStart = collaborationStart + collaborations.length
  const indexed = buildIndex([
    ...projects.map((p, i) => ({ stack: p.stack, page: projectStart + i })),
    ...collaborations.map((c, i) => ({ stack: c.stack, page: collaborationStart + i })),
  ])
  const chapters = [
    { title: "Projects", page: projectStart },
    { title: "Collaborations", page: collaborationStart },
    { title: "Skills", page: skillsStart },
    { title: "Resume", page: null },
  ]
  

  const pages = [
    <Cover />,
    <TableOfContents chapters={chapters} onNavigate={setPage} />, 
    ...projects.map((p) => <ProjectPage key={p.id} project={p} chapter="Chapter I" />),
    ...collaborations.map((c) => <ProjectPage key={c.id} project={c} chapter="Chapter II" />),
    <SkillsPage groups={indexed} />
  ]


  console.log("render", page)

  return (
    <div className="bg-zinc-950 text-white min-h-screen p-8 flex items-center justify-center">  
    <div className="flex flex-col items-center gap-4 w-full max-w-md">
      {pages[page]}
      <div className="flex gap-4">
        <button 
        onClick={() => setPage(page - 1)}
        disabled={page === 0}
        className="disabled:opacity-30"
        >Previous</button>
        <button 
        onClick={() => setPage(page + 1)}
        disabled={page === pages.length - 1}
        className="disabled:opacity-30"
        >Next
        </button>
      </div>
    </div>
  </div>
  )
}

export default App