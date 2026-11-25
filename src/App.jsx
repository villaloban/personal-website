import { useState } from 'react'
import Cover from './components/Cover'
import TableOfContents from './components/TableOfContents'
import ProjectPage from './components/ProjectPage'
import projects from './data/projects'

function App() {  
  const [page, setPage] = useState(0)
  const chapters = [
    { title: "Projects", page: 2 },
    { title: "Collaborations", page: null },
    { title: "Skills", page: null },
    { title: "Resume", page: null },
  ]

  const pages = [
    <Cover />,
    <TableOfContents chapters={chapters} onNavigate={setPage} />, 
    ...projects.map((p) => <ProjectPage key={p.id} project={p} />),
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