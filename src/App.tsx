import { ProjectsProvider } from "./context/ProjectsContext"
import ProjectsList from "./components/projects/ProjectsList"
import Terminal from "./components/terminal/Terminal"

function App() {
  return (
    <ProjectsProvider>
      <Terminal />
      <ProjectsList />
    </ProjectsProvider>
  )
}

export default App
