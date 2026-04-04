import { useState } from 'react'
import Form from './Form.jsx'
import Header from './Header.jsx'
import bgBuilding from './assets/bg-building.jpg'

function Login() {
  const [count, setCount] = useState(0)

  return (
  <>
    <Header/>
    <div style={{backgroundImage:`url(${bgBuilding})`}} class="flex relative bg-cover h-200 bg-center h-200">
      <div class="absolute inset-0 bg-gradient-to-r from-slate-950 to-slate-150 h-200 flex opacity-50">
      </div>
      <div class ="relative z-1 md:hidden sm:hidden lg:block mt-auto text-5xl ml-10 mb-25 font-black font-[glacial]">
        <p class="p-2 bg-red-500 rounded-t-md text-rose-50">Taguig's Healthcare</p>
        <p class="w-fit p-2 bg-red-500 rounded-b-md text-rose-50">Center</p>
      </div>
      <div class="relative z-1 opacity-100 flex mr-auto ml-auto lg:mr-10 h-200">
          <Form/>
      </div>
    </div>
  </>
  )
}

export default Login
