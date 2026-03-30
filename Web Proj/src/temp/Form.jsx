import { useNavigate } from "react-router-dom";
import logo from "../assets/taguig-city-logo.png"

function Form() {
    const navigate = useNavigate();
    const handleClickRegister = () => {
        navigate('/register')
    }
    const handleClickLogin = () => {
        navigate('/profile')
    }
  return (
    <>
        <div class="cursor-default my-auto mx-auto p-5 py-10 max-w-md rounded-xl bg-slate-50 shadow-sm font-[garet]">
            <div style={{backgroundImage:`url(${logo})`}} class="w-25 h-25 bg-cover mx-auto"></div>
                <div class = "w-100 flex justify-center my-2 mx-auto text-2xl text-slate-950 font-[garet] font-black align-middle">
                    <div>Sign in to Healthcare Portal</div>
                </div>
                <div class="w-100 flex justify-center">
                    <div class="p-2">New Here?</div>
                    <div onClick={handleClickRegister} class="select-none hover:text-sky-300 cursor-pointer p-2 font-semibold text-sky-500 underline">Create your Account Here</div>
                </div>
                <div class="w-100 my-3">
                    <div class="font-semibold p-2">Email Address or Username</div>
                    <input type="text" class = "relative z-10 mx-5 w-90 px-5 p-2 rounded-l bg-slate-100" placeholder="Enter Email or Username"></input>
                </div>
                <div class="w-100 my-3">
                    <div class="flex justify-stretch w-100">
                        <div class="font-semibold p-2">Password</div>
                        <div class=" ml-auto font-semibold p-2 contents-right text-sky-500 underline select-none hover:text-sky-300 cursor-pointer ">Forgot Password</div>
                    </div>
                    <input type="text" class = "relative z-10 mx-5 w-90 px-5 p-2 rounded-l bg-slate-100" placeholder="Enter Password"></input>
                </div>
                <div class = "w-100 my-3">
                    <button class="select-none cursor-pointer w-100 mx-auto bg-sky-950 text-rose-50 p-3 rounded-xl font-black text-center" onClick={handleClickLogin}>Sign In</button>
                </div>
                <div class="w-100 my-3">
                    <button class="select-none cursor-pointer w-100 mx-auto bg-sky-50 text-rose-50 p-2 rounded-xl border-1 border-sky-950 text-sky-950 text-center">Cancel</button>
                </div>
      </div>
    </>
  );
}

export default Form