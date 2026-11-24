import Hero from './components/Hero'
import ProjectCard from './components/ProjectCard'
import projects from './data/projects'


function App() {
  return (
    <div className = "bg-zinc-950 text-white min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
      <Hero name="Anthony Villalobos" pet="panda" />
      {projects.map((p) => (
        <ProjectCard key={p.id} title={p.title} description={p.description} />
      ))}
    
    </div>
    </div>
  )
}

export default App
