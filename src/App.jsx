import Cover from './components/Cover'
import ProjectCard from './components/ProjectCard'
import projects from './data/projects'

function App() {
  return (
    <div className="bg-zinc-950 text-white min-h-screen p-8 flex items-center justify-center">  
      <Cover />                                      

      {/*                                              
        <ProjectCard key={p.id} title={p.title} description={p.description} />
      ))}
      */}
    </div>
  )
}

export default App