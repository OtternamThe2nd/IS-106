import { useState } from 'react'
import Form from '../temp/Form.jsx'
import Header from '../temp/Header.jsx'
import bgBuilding from '../assets/bg-building.jpg'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'

function Login() {
  const [count, setCount] = useState(0)
  const navigate = useNavigate()
  const [cookies,setCookie,removeCookie] = useCookies(['user'])
  console.log(cookies.user)
  const api = import.meta.env.VITE_API_URL
  const init = async () => {
    const res = await fetch(api+"check",{
      "method":"POST",
      "headers":{
          "Content-Type":"application/json",
          Accept:"application/json",
      },
      body:JSON.stringify({session_id:cookies.user})
    })
    const body = await res.json()
    if(body.code==="MATCHING_ID") navigate('/home')
  }
  init()
  return (
  <>
    <div class="flex relative bg-cover h-200 bg-center h-200">
      <Form/>
    </div>
  </>
  )
}

export default Login
