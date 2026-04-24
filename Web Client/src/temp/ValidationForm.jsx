import { useRef } from "react"
import { useCookies } from "react-cookie"
import healthcare_logo from "../assets/health-office-logo.png"
import { useNavigate } from "react-router-dom";

function ValidationForm(){
    const [cookies, setCookie, removeCookie] = useCookies(['user'])
    const userDat = (!cookies)? null:(cookies);
    const otpRef = useRef(null)
    const navigate = useNavigate()
    if(!(cookies.user&&cookies.user.email)) navigate('/')
    const submit = async ()=>{
        const otp = otpRef.current.value
        const email = (!cookies.user.email) ? navigate("") : cookies.user.email
        console.log({otp,email})
        const res = await fetch("http://localhost:8080/verify",{
            "method":"POST",
            "headers":{
                "Content-Type":"application/json",
                Accept:"application/json",
            },
            body:JSON.stringify({otp,email})
        })
        const response = await res.json()
        console.log(response)
        if(response.code == "MATCHING_OTP") setCookie('user',response.session_id)
        else return
        navigate('/profile')
    }

    const resend = () => {
        const otp = otpRef.current.value
        const email = (!cookies.email) ? navigate('/register') : cookies.email
        console.log({otp,email})
        const res = fetch(import.meta.env.VITE_API_URL+"verify",{
            "method":"POST",
            "headers":{
                "Content-Type":"application/json",
                Accept:"application/json",
            },
            body:JSON.stringify({cookies})
        })
        console.log(res)
    }

    return(<>
        <div class="w-xl rounded-xl bg-sky-50 m-auto p-4">
            <div class="flex m-auto">
                <div style={{backgroundImage:`url(${healthcare_logo})`}} class="m-2 my-auto bg-cover w-22 h-22"></div>
                <div class="flex flex-col w-sm my-4 text-md">
                    <div class="font-bold text-xl">
                        Verify Your Email Account.
                    </div>
                    <div class="">
                        A 6 digit code was sent to your email account:{userDat.email} 
                    </div>
                    <div>Check them for incoming mails.</div>
                </div>
            </div>
            <div class="h-1 flex-1 bg-slate-500"></div>
            <div class="flex">
                <div class="flex-1 mr-1 flex bg-slate-300 p-2 rounded-xl my-5">
                    <input ref={otpRef} type="text" maxLength={6} class="text-center focus:outline-0 flex-1 text-2xl" placeholder="Input OTP Here"></input>
                </div>
                <button onClick={()=>{submit()}} class="w-20 my-auto p-3 mx-1 bg-sky-500 text-sky-50 rounded-xl ml-auto mr-5">Submit</button> 
            </div>
            <div class="flex my-2">
                <div class="ml-8">
                    Haven't recieve an email yet?
                </div>
                <button onClick={()=>{resend()}} class="ml-auto mr-8 underline text-sky-500">Resend Mail</button>
            </div>
        </div>
    </>)
}
export default ValidationForm