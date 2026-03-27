import { useState } from 'react'
import Form from './Form.jsx'
import Header from './Header.jsx'
import bgBuilding from './assets/bg-building.jpg'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
    <Header/>
    <div style={{backgroundImage:`url(${bgBuilding})`}} class="flex relative -z-2 bg-cover h-200 bg-center h-200">
      <div class="absolute inset-0 -z-1 bg-gradient-to-r from-slate-950 to-slate-150 h-200 flex opacity-50">
      </div>
      <div class="z-2 opacity-100 flex mr-auto ml-auto lg:mr-10 h-200">
          <Form/>
      </div>
    </div>
  </>
  )
}

export default App
