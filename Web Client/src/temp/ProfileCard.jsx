import { useEffect, useRef, useState } from "react"
import { RiEdit2Line } from 'react-icons/ri'
import Select from "./Select"
import { useNavigate } from "react-router-dom"
import { useCookies } from "react-cookie"

function ProfileCard(){
    class ValueSetter{
        constructor(defaultValue){
            this.value = defaultValue
        }
        setValue(value){
            this.value = value
        }
    }
    class InputSetter {
        constructor(name,value){
            const [fields,setField] = useState()
        }
    }
    const [userdat,setUserDat] = useState(null)
    const [inputdat,setInputDat] = useState(null)
    const user = {userdat:null}
    const api = import.meta.env.VITE_API_URL
    const [cookies, setCookies,removeCookies] = useCookies(['user'])
    const [edit,setEdit] = useState(0)
    const [activeTab, setActiveTab] = useState(1)
    const [emailModal, openEmailModal] = useState(0)
    const [passModal,openPassModal] = useState(0)
    const [focus,setFocus] = useState(0)
    const navigate = useNavigate()
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
    useEffect(()=>{
        const res = fetch(api + 'userdat',{
            method:'POST',
            body:JSON.stringify({session_id:cookies.user}),
            headers:{
                'Content-Type':'application/json',
                'Accept' : 'application/json',
            },
        }).then((response)=>{
            return response.json()
        }).then((dat)=>{
            if(!userdat){setUserDat(dat);setInputDat(dat)}
        }).catch(err=>{
            console.log(err)
    })
    },[])
    const tabs = [
        {id:1,label:"Personal Information"},
        {id:2,label:"Security"}
    ]
    const toggleEdit=()=>{
        setEdit((edit===0)?1:0)
    }
    const update = () => {
        
    }
    const handleChange = (e) => {
        const {name,value} = e.target
        setInputDat(prev=>({...prev,[name]:value}))
    }
    const createFullName = (namedat,format="F M. L S") => {
        const format_order = format.split(' ')
        var out = ''
        for (let i of format_order){
            if (i=='F'){if(!namedat.first_name) continue; out += namedat.first_name+" "; continue }
            if (i=='M'){if(!namedat.middle_name) continue; out += namedat.middle_name+" "; continue }
            if (i=='L'){if(!namedat.last_name) continue; out += namedat.last_name+" ";continue }
            if (i=='S'){if(!namedat.name_suffix||namedat.name_suffix === 'None') continue; out += namedat.name_suffix+" "; continue }
        }
        return out
    }
    const createFullAddress = (namedat,format="H S B C") => {
        const format_order = format.split(' ')
        var out = ''
        for (let i of format_order){
            if (i=='H'){out += namedat.house_no+" "; continue }
            if (i=='S'){out += namedat.street+" "; continue }
            if (i=='B'){out += namedat.barangay+" ";continue }
            if (i=='C'){out += namedat.city+" "; continue }
            if (i=='Z'){out += namedat.zip_code+" "; continue }
        }
        return out
    }
    const tabContent = {
        1:(<>
            <div class="">
                <div class="flex text-slate-700 font-bold ">
                    {(edit===1)?(<></>):(<div class="text-xl">Personal Details</div>)}
                    <div onClick={()=>{toggleEdit()}} class={`ml-auto mr-8 text-l my-auto ${(edit===0)?'text-sky-500':'text-red-500'} cursor-pointer`}>{(edit===1)?'Cancel':'Edit'}</div>
                </div>
                {(edit===1)?(<div>
                    <div class="my-5 flex flex-wrap gap-x-5">
                        <div class="flex-1 flex flex-col max-w-xl">
                            <div>
                                <div class="text-xl font-bold text-slate-400">Personal Information</div>
                            </div>
                            <div class='flex flex-wrap gap-x-2'>
                                <div class='flex flex-1 flex-col'>
                                    <div class="flex-1 p-2 focus-within:outline-sky-500 focus-within:outline-2 flex-1 w-64 m-auto my-3 px-5 bg-sky-100 rounded-xl" >
                                        <div class="text-slate-500 text-sm">First Name</div>
                                        <input ref={firstNameRef} name='first_name' onChange={handleChange} value={(inputdat)?inputdat.first_name:''} class="w-full focus:outline-0 text-md"></input>
                                    </div>
                                    <div class="p-2 focus-within:outline-sky-500 focus-within:outline-2 flex-1 w-64 m-auto my-3 px-5 bg-sky-100 rounded-xl" >
                                        <div class="text-slate-500 text-sm">Last Name</div>
                                        <input ref={lastNameRef} name='last_name' onChange={handleChange} value={(inputdat)?inputdat.last_name:''} class="w-full focus:outline-0 text-md"></input>
                                    </div>
                                    <div class="p-2 focus-within:outline-sky-500 focus-within:outline-2 flex-1 w-64 m-auto my-3 px-5 bg-sky-100 rounded-xl" >
                                        <div class="text-slate-500 text-sm">Middle Name</div>
                                        <input ref={middleNameRef} name='middle_name' onChange={handleChange} value={(inputdat)?inputdat.middle_name:''} class="w-full focus:outline-0 text-md"></input>
                                    </div>
                                    <Select placeholder={'None'} valueSetter={nameSuffixSetter} options={suffixOptions} label={"Name Suffix"} bg={'bg-sky-100'}></Select>
                                </div>
                                <div class='flex flex-col'>
                                    <Select placeholder={'Married'} valueSetter={civilStatusSetter} options={civilStatusOptions} label={"Civil Status"} bg={'bg-sky-100'}></Select>
                                    <Select placeholder={'Male'} valueSetter={genderSetter} options={genderOptions} label={"Gender"} bg={'bg-sky-100'}></Select>
                                    <div class="p-2 focus-within:outline-sky-500 focus-within:outline-2 flex-1 w-64 m-auto my-3 px-5 bg-sky-100 rounded-xl" >
                                    <div class="text-slate-500 text-sm">Birth Date:</div>
                                        <input ref={birthDateRef} name='birth_date' onChange={handleChange} value={(inputdat)?inputdat.birth_date:''} type = "date" class="w-full focus:outline-0 text-md"></input>
                                    </div>
                                    <div class="p-2 focus-within:outline-sky-500 focus-within:outline-2 flex-1 w-64 m-auto my-3 px-5 bg-sky-100 rounded-xl" >
                                        <div class="text-slate-500 text-sm">Phone No.</div>
                                        <input ref={phoneNoRef} name='phone_no' onChange={handleChange} value={(inputdat)?inputdat.phone_no:''} class="w-full focus:outline-0 text-md"></input>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="max-w-md" >
                                <div class="text-xl font-bold text-slate-400">Residence Information</div>
                            </div>
                            <Select placeholder={'City of Taguig'} valueSetter={citySetter} options={cityOptions} label={"City/Municipality"} bg={'bg-sky-100'}></Select>
                            <div class="p-2 focus-within:outline-sky-500 focus-within:outline-2 flex-1 w-64 m-auto my-3 px-5 bg-sky-100 rounded-xl" >
                                <div class="text-slate-500 text-sm">Barangay</div>
                                <input ref={barangayRef} name='barangay' onChange={handleChange} value={(inputdat)?inputdat.barangay:''}  class="w-full focus:outline-0 text-md"></input>
                            </div>
                            <div class="p-2 focus-within:outline-sky-500 focus-within:outline-2 flex-1 w-64 m-auto my-3 px-5 bg-sky-100 rounded-xl" >
                            <div class="truncate text-slate-500 text-sm">House No. Block, Lot, ETC.</div>
                            <input ref={houseNoRef} name='house_no' onChange={handleChange} value={(inputdat)?inputdat.house_no:''} class="w-full focus:outline-0 text-md"></input>
                            </div>
                            <div class="p-2 focus-within:outline-sky-500 focus-within:outline-2 flex-1 w-64 m-auto my-3 px-5 bg-sky-100 rounded-xl" >
                                <div class="truncate text-slate-500 text-sm">Street Village ETC.</div>
                                <input ref={streetRef} name='street' onChange={handleChange} value={(inputdat)?inputdat.street:''} class="w-full focus:outline-0 text-md"></input>
                            </div>
                            <div class="p-2 focus-within:outline-sky-500 focus-within:outline-2 flex-1 w-64 m-auto my-3 px-5 bg-sky-100 rounded-xl" >
                                <div class="text-slate-500 text-sm">Zip Code</div>
                                <input ref={zipCodeRef} name='zip_code' onChange={handleChange} value={(inputdat)?inputdat.zip_code:''} class="w-full focus:outline-0 text-md"></input>
                            </div>
                        </div>
                    </div>
                    <div class='flex'>
                        <div onClick={()=>{update()}} class='text-sky-500 font-bold my-3 ml-auto mr-8'>Update</div>
                    </div>
                </div>):(<div>
                    <div class="my-4">
                    <div class="text-slate-500 text-sm">
                        Full Name
                    </div>
                    <div class="font-bold text-md">
                        {(userdat)?createFullName(userdat):''}
                    </div>
                </div>
                <div class="my-4">                
                    <div class="text-slate-500 text-sm">
                        Birthday
                    </div>
                    <div class="font-bold text-md">
                        {(userdat)?userdat.birth_date:''}
                    </div>
                </div>
                <div class="my-4">                
                    <div class="text-slate-500 text-sm">
                        Gender
                    </div>
                    <div class="font-bold text-md">
                        {(userdat)?userdat.gender:''}
                    </div>
                </div>
                <div class="my-4">
                    <div class="text-slate-500 text-sm">
                        Civil Status
                    </div>
                    <div class="font-bold text-md">
                        {(userdat)?userdat.civil_status:''}
                    </div>
                </div>
                <div class="my-4">                
                    <div class="text-slate-500 text-sm">
                        Address
                    </div>
                    <div class="font-bold text-md">
                        {(userdat)?createFullAddress(userdat):''}
                    </div>
                </div>
                <div class="my-4">                
                    <div class="text-slate-500 text-sm">
                        Contact No.
                    </div>
                    <div class="font-bold text-md">
                        {(userdat)?userdat.phone_no:''}
                    </div>
                </div>
                </div>)}
            </div>
        </>),
        2:(<>
            <div class="">
                <div class="text-slate-700 font-bold text-xl">
                    Security Details
                </div>
                <div class="my-4">
                    <div class="text-slate-500 text-sm">
                        Email
                    </div>
                    <div class="font-bold text-md">
                        <div class="flex min-w-20">
                            <div class='my-auto'>Placeholder</div> 
                            <div class='flex w-20'>
                                <div class={`fixed top-0 left-0 transition-opacity transition-transform duration-300 h-screen flex ${emailModal===1?"opacity-100 translate-y-0 w-screen h-screen":"opacity-0 -z-1 translate-y-3 w-0 h-0"}`}>
                                    <div class="absolute w-full h-full opacity-80 bg-neutral-500">

                                    </div>
                                    <div class="z-1  m-auto">
                                        <div class="rounded-t-md flex flex-col z-1 w-md bg-sky-50 py-4 ">
                                            <div class="font-bold m-auto">Update Email</div>
                                        </div>
                                        <div class="flex flex-col p-4 my-1 w-md bg-sky-50 rounded-b-md ">
                                            <div class="ml-8">Email</div>
                                            <input type="text" class="p-2 mx-10 px-4 h-5 rounded-2xl bg-slate-300 flex-1"></input>
                                            <div class="ml-8">Password</div>
                                            <input type="password" class="p-2 mx-10 px-4 h-5 rounded-2xl bg-slate-300 flex-1"></input>
                                            <div class="flex my-5">
                                                <div class="h-sm w-18 p-2 ml-auto mr-5 bg-slate-400 text-center text-sky-50 rounded-md cursor-pointer focus:border-0" onClick={()=>openEmailModal(0)}>Cancel</div>
                                                <div class="h-sm w-18 p-2 mr-10 bg-sky-500 text-center text-sky-50 rounded-md cursor-pointer focus:border-0">Submit</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div onClick={()=>{openEmailModal(1)}} class='ml-auto my-auto p-2 cursor-pointer'>
                                    <RiEdit2Line size={16}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="my-4">                
                    <div class="text-slate-500 text-sm">
                        <div class="flex">
                            <div class='my-auto'>Password</div>
                        </div>
                    </div>
                    <div class="font-bold text-md">
                         <div class="flex min-w-20">
                            <div class='my-auto'>Placeholder</div> 
                            <div class='flex w-20'>
                                <div class={`fixed top-0 left-0 transition-opacity transition-transform duration-300 h-screen flex ${passModal===1?"opacity-100 translate-y-0 w-screen h-screen":"opacity-0 -z-1 translate-y-3 w-0 h-0"}`}>
                                    <div class="absolute w-full h-full opacity-80 bg-neutral-500">

                                    </div>
                                    <div class="z-1  m-auto">
                                        <div class="rounded-t-md flex flex-col z-1 w-md bg-sky-50 py-4 ">
                                            <div class="font-bold m-auto">Update Email</div>
                                        </div>
                                        <div class="flex flex-col p-4 my-1 w-md bg-sky-50 rounded-b-md ">
                                            <div class="ml-8">Old Password</div>
                                            <input type="password" class="p-2 mx-10 px-4 h-5 rounded-2xl bg-slate-300 flex-1"></input>
                                            <div class="ml-8">New Password</div>
                                            <input type="password" class="p-2 mx-10 px-4 h-5 rounded-2xl bg-slate-300 flex-1"></input>
                                            <div class="ml-8">Retype New Password</div>
                                            <input type="password" class="p-2 mx-10 px-4 h-5 rounded-2xl bg-slate-300 flex-1"></input>
                                            <div class="flex my-5">
                                                <div class="h-sm w-18 p-2 ml-auto mr-5 bg-slate-400 text-center text-sky-50 rounded-md cursor-pointer focus:border-0" onClick={()=>openPassModal(0)}>Cancel</div>
                                                <div class="h-sm w-18 p-2 mr-10 bg-sky-500 text-center text-sky-50 rounded-md cursor-pointer focus:border-0">Submit</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div onClick={()=>{openPassModal(1)}} class='ml-auto my-auto p-2 cursor-pointer'>
                                    <RiEdit2Line size={16}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>)
    }
    return(<div>
        <div class="mx-10 mt-5 mb-2 px-8 pt-8 bg-sky-50 rounded-t-3xl">
            <div class="flex flex-wrap">
                <div class="bg-red-500 mb-2 w-18 h-18 rounded-full"></div>
                <div class="mt-auto mb-3 mx-2">
                    <div class="my-auto text-xl font-bold">{(userdat)?createFullName(userdat,"F M. L S"):'Place Holder'}</div>
                    <div class="flex gap-x-2">
                        <div class="">{(userdat)?userdat.type:'client'}</div>
                        <div class="">{(userdat)?userdat.email:'client'}</div>
                    </div>
                </div>
                <div class="ml-auto mt-auto">
                    {tabs.map((tab)=>(
                        <button 
                        class={`h-10 mx-2 ${activeTab === tab.id ? 
                            "border-b-2 border-red-500":""
                        }`}
                        onClick={()=>setActiveTab(tab.id)}
                        >
                        {tab.label}
                        </button>
                    ))}
                </div>
            </div>
        </div>
        <div class="min-h-20 mx-10 pb-4 px-8 pt-8 bg-sky-50 rounded-b-3xl">
            {tabContent[activeTab]}
        </div>
    </div>)
}
export default ProfileCard