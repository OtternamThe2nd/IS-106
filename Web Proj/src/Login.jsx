import { useState } from 'react'
import Form from './Form.jsx'
import Header from './Header.jsx'
import bgBuilding from './assets/bg-building.jpg'

function Login() {
  const [count, setCount] = useState(0)

  return (
  <>
    <Header/>
    <div class="flex relative bg-cover h-200 bg-center h-200">
      <Form/>
    </div>
  </>
  )
}

export default Login
