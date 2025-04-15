import { ProjectsProvider } from "./ProjectsContext"
import ProjectsList from "./ProjectsList"
import Terminal from "./Terminal"

function App() {
  return (
    <ProjectsProvider>
      <Terminal />
      <ProjectsList />
    </ProjectsProvider>
  )
}

export default App
