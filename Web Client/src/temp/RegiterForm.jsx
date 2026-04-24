
import { useRef, useState } from "react"
import { useCookies } from "react-cookie"
import { useNavigate } from "react-router-dom"
import env from "react-dotenv"
import Select from './Select'
import logo from "../assets/taguig-city-logo.png"

function RegisterForm(){
    const [cookies, setCookie, removeCookie] = useCookies(['user'])
    class ValueSetter{
        constructor(defaultValue){
            this.value = defaultValue
        }
        setValue(value){
            this.value = value
        }
    }
    const [focus,setFocus] = useState(0)
    const navigate = useNavigate()
    const handleClickSignIn = () => navigate("/")
    const firstNameRef = useRef(null)
    const lastNameRef = useRef(null)
    const middleNameRef = useRef(null)
    const birthDateRef = useRef(null)
    const barangayRef = useRef(null)
    const houseNoRef = useRef(null)
    const streetRef = useRef(null)
    const zipCodeRef = useRef(null)
    const phoneNoRef = useRef(null)
    const emailRef = useRef(null)
    const passwordRef = useRef(null)
    const retypePasswordRef = useRef(null)
    const nameSuffixSetter = new ValueSetter("Select Name Suffix")
    const suffixOptions = ["None","Jr.","Sr."]
    const civilStatusSetter = new ValueSetter("Select Civil Status")
    const civilStatusOptions = ["Single","Married","Widowed"]
    const genderSetter = new ValueSetter("Select Gender")
    const genderOptions = ["Male","Female","Other"] 
    const citySetter = new ValueSetter("City of Taguig")
    const cityOptions = ["City of Taguig"]
    const submit = async () => {
        const errors = []
        const data = {
            first_name:firstNameRef.current.value,
            middle_name:middleNameRef.current.value,
            last_name:lastNameRef.current.value,
            name_suffix:nameSuffixSetter.value,
            civil_status:civilStatusSetter.value,
            gender:genderSetter.value,
            birth_date:birthDateRef.current.value,
            city:citySetter.value,
            barangay:barangayRef.current.value,
            house_no:houseNoRef.current.value,
            street:streetRef.current.value,
            zip_code:zipCodeRef.current.value,
            phone_no:phoneNoRef.current.value,
            email:emailRef.current.value,
            password:passwordRef.current.value
        }
        const emptyFields = []
        for(const [key,value] of Object.entries(data)){
            if(!value) emptyFields.push(key)
        }
        var emptyFieldsMes = "Fill all the required entries :"
        if(emptyFields.length!==0) {
            for(const field of emptyFields) emptyFieldsMes +=` ${field},`
            errors.push(emptyFieldsMes)
        }
        if(data.password !== retypePasswordRef.current.value) errors.push("Your password does not match")
        if(errors.length>0) console.log(errors)
        const res = await fetch(import.meta.env.VITE_API_URL + "register",{
            method: 'POST',
            headers:{
                'Content-Type':'application/json',
                'Accept' : 'application/json',
            },
            body: JSON.stringify(data),
            mode:'cors'
        })
        if(!res.ok){
            errors.push("Something went wrong with the servers")
            return
        }
        const result = await res.json()
        console.log(result)
        setCookie("user",JSON.stringify(data))
        console.log(errors)
        if(errors.length===0) navigate('/emailverification')
    }
    return (
        <>

            <div class="my-5 p-5 rounded-md bg-sky-50">
                <div class="flex flex-wrap justify-center">
                    <div style={{backgroundImage: `url(${logo})`}} class="bg-cover mx-5 my-5 h-30 w-30"></div>
                    <div class="mt-auto mb-8">
                        <div class=" mx-auto text-3xl">Create Account</div>
                        <div class="flex contents-left">
                            <div class="m-2 text-xl text-slate-500">Already have an account?</div>
                            <div class="m-2 text-xl hover:text-sky-300 text-sky-500 underline cursor-pointer" onClick={()=>handleClickSignIn()}>Sign In here</div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="flex contents-center m-2">
                        <div class="my-auto h-1 flex-1  mx-auto rounded-full bg-slate-300"></div>
                        <div class="text-lg mx-2 text-slate-500">Personal Information</div>
                        <div class="my-auto h-1 flex-1 mx-auto rounded-full bg-slate-300"></div>
                    </div>
                    <div class="mx-5 flex m-3 flex-wrap justify-center gap-x-4 gap-y-2 ">
                        <div class="p-2 focus-within:outline-sky-500 focus-within:outline-2 flex-1 w-64 m-auto my-3 px-5 bg-slate-200 rounded-xl" >
                            <div class="text-slate-500 text-sm">First Name</div>
                            <input ref={firstNameRef} class="w-full focus:outline-0 text-md"></input>
                        </div>
                        <div class="p-2 focus-within:outline-sky-500 focus-within:outline-2 flex-1 w-64 m-auto my-3 px-5 bg-slate-200 rounded-xl" >
                            <div class="text-slate-500 text-sm">Last Name</div>
                            <input ref={lastNameRef} class="w-full focus:outline-0 text-md"></input>
                        </div>
                        <div class="p-2 focus-within:outline-sky-500 focus-within:outline-2 flex-1 w-64 m-auto my-3 px-5 bg-slate-200 rounded-xl" >
                            <div class="text-slate-500 text-sm">Middle Name</div>
                            <input ref={middleNameRef} class="w-full focus:outline-0 text-md"></input>
                        </div>
                    </div>
                    <div class="m-3 flex justify-center">
                        <input id="hasMI" type="checkbox" class="h-5 w-5 m-2 my-auto"></input>
                        <div for="hasMI" class="my-auto text-xl">No Middle Name</div>
                    </div>
                    <div class="gap-y-2 gap-x-4 mx-5 flex flex-wrap items-center text-slate-500">
                        <Select placeholder={'Select Name Suffix'} valueSetter={nameSuffixSetter} options={suffixOptions} label={"Name Suffix"}></Select>
                        <Select placeholder={'Select Civil Status'} valueSetter={civilStatusSetter} options={civilStatusOptions} label={"Civil Status"}></Select>
                        <Select placeholder={'Select Gender'} valueSetter={genderSetter} options={genderOptions} label={"Gender"}></Select>
                        <div class="p-2 focus-within:outline-sky-500 focus-within:outline-2 flex-1 w-64 m-auto my-3 px-5 bg-slate-200 rounded-xl" >
                            <div class="text-slate-500 text-sm">Birth Date:</div>
                            <input ref={birthDateRef} type = "date" class="w-full focus:outline-0 text-md"></input>
                        </div>
                    </div>
                    <div class="flex contents-center m-2">
                        <div class="my-auto h-1 flex-1  mx-auto rounded-full bg-slate-300"></div>
                        <div class="text-lg mx-2 text-slate-500">Residence Information</div>
                        <div class="my-auto h-1 flex-1 mx-auto rounded-full bg-slate-300"></div>
                    </div>
                    <div class="mx-5 flex m-3 flex-wrap justify-center gap-x-4 gap-y-2">
                        <Select placeholder={'City of Taguig'} valueSetter={citySetter} options={cityOptions} label={"City/Municipality"}></Select>
                        <div class="p-2 focus-within:outline-sky-500 focus-within:outline-2 flex-1 w-64 m-auto my-3 px-5 bg-slate-200 rounded-xl" >
                            <div class="text-slate-500 text-sm">Barangay</div>
                            <input ref={barangayRef} class="w-full focus:outline-0 text-md"></input>
                        </div>
                    </div>
                    <div class="mx-5 flex m-3 flex-wrap justify-center gap-x-4 gap-y-2">
                        <div class="p-2 focus-within:outline-sky-500 focus-within:outline-2 flex-1 w-64 m-auto my-3 px-5 bg-slate-200 rounded-xl" >
                            <div class="truncate text-slate-500 text-sm">House No. Block, Lot, ETC.</div>
                            <input ref={houseNoRef} class="w-full focus:outline-0 text-md"></input>
                        </div>
                        <div class="p-2 focus-within:outline-sky-500 focus-within:outline-2 flex-1 w-64 m-auto my-3 px-5 bg-slate-200 rounded-xl" >
                            <div class="truncate text-slate-500 text-sm">Street Village ETC.</div>
                            <input ref={streetRef} class="w-full focus:outline-0 text-md"></input>
                        </div>
                        <div class="p-2 focus-within:outline-sky-500 focus-within:outline-2 flex-1 w-64 m-auto my-3 px-5 bg-slate-200 rounded-xl" >
                            <div class="text-slate-500 text-sm">Zip Code</div>
                            <input ref={zipCodeRef} class="w-full focus:outline-0 text-md"></input>
                        </div>
                    </div>
                    <div class="flex contents-center m-2">
                        <div class="my-auto h-1 flex-1  mx-auto rounded-full bg-slate-300"></div>
                        <div class="text-lg mx-2 text-slate-500">Account Information</div>
                        <div class="my-auto h-1 flex-1 mx-auto rounded-full bg-slate-300"></div>
                    </div>
                    <div class="mx-5 flex m-3 flex-wrap justify-center gap-x-4 gap-y-2">
                        <div class="p-2 focus-within:outline-sky-500 focus-within:outline-2 flex-1 w-64 m-auto my-3 px-5 bg-slate-200 rounded-xl" >
                            <div class="text-slate-500 text-sm">Phone No.</div>
                            <input ref={phoneNoRef} class="w-full focus:outline-0 text-md"></input>
                        </div>
                        <div class="p-2 focus-within:outline-sky-500 focus-within:outline-2 flex-1 w-64 m-auto my-3 px-5 bg-slate-200 rounded-xl" >
                            <div class="text-slate-500 text-sm">Email</div>
                            <input ref={emailRef} class="w-full focus:outline-0 text-md"></input>
                        </div>
                        <div class="p-2 focus-within:outline-sky-500 focus-within:outline-2 flex-1 w-64 m-auto my-3 px-5 bg-slate-200 rounded-xl" >
                            <div class="text-slate-500 text-sm">Password</div>
                            <input ref={passwordRef} class="w-full focus:outline-0 text-md"></input>
                        </div><div class="p-2 focus-within:outline-sky-500 focus-within:outline-2 flex-1 w-64 m-auto my-3 px-5 bg-slate-200 rounded-xl" >
                            <div class="text-slate-500 text-sm truncate">Re-Enter Password</div>
                            <input ref={retypePasswordRef} class="w-full focus:outline-0 text-md"></input>
                        </div>
                    </div>
                </div>
                <div class="my-10 flex justify-center gap-x-10">
                    <div class="flex rounded-lg font-extrabold text-2xl w-40 bg-red-600 h-15 text-rose-50">
                        <div class="m-auto">Cancel</div>
                    </div>
                    <div class="flex font-extrabold rounded-lg text-2xl w-40 bg-blue-600 h-15 text-rose-50">
                        <div class="m-auto cursor-pointer" onClick={submit}>Register</div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default RegisterForm