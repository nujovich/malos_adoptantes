import { Description } from './components/Description'
import './input.css'
import { Grid } from './components/Grid'
import { Title } from './components/Title'

function App() {

  return (
    <div className="App">
      <Title title={"Malos Adoptantes"}/>
      <Description/>
      <Grid/>
    </div>
  )
}

export default App
