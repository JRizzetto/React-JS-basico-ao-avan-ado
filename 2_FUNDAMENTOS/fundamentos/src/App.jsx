import './App.css'
import Events from './components/Events'
import FirstComponent from './components/FirstComponent'
import MyComponents from './components/MyComponents'
import TemplateExpression from './components/TemplateExpression'

function App() {

  return (
    <>
      <div>
        <h1>Fundamentos {2 + 2}</h1>
        <FirstComponent/>
        <TemplateExpression/>
        <MyComponents/>
        <Events />
      </div>
    </>
  )
}

export default App
