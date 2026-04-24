import { useEffect, useState } from "react";
import ClickOutside from "./ClickOutside"
import { RiUserFill, RiNotification3Fill,RiMenuLine } from 'react-icons/ri'
import NotificationCard from "./NotificationCard";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

function HeaderDropdown(){
    const [cookies,setCookie,removeCookie] = useCookies(['user'])
    const [dropdownState,showDropdownItems] = useState(0)
    const [activeTab,showDropdownTab] = useState(0)
    const [userdat,setUserDat] = useState(null)
    const navigate = useNavigate()
    const api = import.meta.env.VITE_API_URL
    const dropdownTabs = [
        {label:"Profile",icon:(<RiUserFill size="20" class="m-auto"/>),key:1},
        {label:"Booking",icon:(<RiNotification3Fill size="20" class="m-auto"/>),key:2}
    ]
    const notifications = [
        {header:"Check Up Appointment",message:"Your booking at baranggay Tipas Healthcare Center has been approved",time:'Sun 1:45 PM', status:true,id:1},
    ]
    useEffect(()=>{    
        fetch(api+'userdat' ,{
            method:'POST',
            "headers":{
                    "Content-Type":"application/json",
                    Accept:"application/json",
            },
        body:JSON.stringify({session_id:cookies.user})
        }).then((response)=>
            response.json()
        ).then((dat)=>{
            setUserDat(dat)
        })
    },[])
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
    const logout = async () => {
        fetch(api+`logout` , {
            method:'POST',
            "headers":{
                "Content-Type":"application/json",
                Accept:"application/json",
            },
            body : JSON.stringify({session_id:cookies.user})
        }).then((result) => {
            if(result.ok) {
                removeCookie('user')
                navigate('')
            }
        }).catch((err)=>
            console.log(err)
        )
    }
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
        if(body.code!=="MATCHING_ID") navigate('/')
    }
    init()
    const dropdownContents = {
        0:(<>
        </>),
        1:(<>
            <div class={`bg-sky-50 rounded-md shadow-xl flex-col flex`}>
                <div class='flex ml-5 md-2 mt-8'>
                    <div class="bg-red-500 mb-2 w-18 h-18 rounded-full"></div>
                    <div class="mt-auto mb-3 mr-2 ml-5">
                        <div class="my-auto text-xl font-bold">{userdat ? createFullName(userdat):''}</div>
                        <div class="flex gap-x-2">
                            <div class="">{userdat&&userdat.type ? userdat.type:'Client'}</div>
                            <div class="">{userdat ? userdat.email:''}</div>
                        </div>
                    </div>
                </div>
                <div class="w-md h-1 bg-slate-200"></div>
                <div onClick={()=>navigate('/profile')} class="text-xl ml-8 font-bold p-2 mt-3 cursor-pointer" >My Profile</div>
                <div onClick={()=>logout()} class="text-xl ml-8 font-bold text-red-500 p-2 mt-3 cursor-pointer">Sign Out</div>
                <div class="text-xl ml-8 font-bold text-sky-500 p-2 ml-auto mr-8 my-3 cursor-pointer">Edit Profile</div>
            </div>
        </>),
        2:(<>
            <div class={`bg-sky-50 rounded-md shadow-xl flex-col flex h-100`}>
                <div class='flex ml-5 md-2 mt-8'>
                    <div class="mt-auto mb-3 mr-2 ml-5 text-2xl font-bold">
                        Notifications
                    </div>
                </div>
                <div class="w-md h-1 bg-slate-200"></div>
                <div class='flex flex-col'>
                    {notifications.map((notification) => 
                        (<NotificationCard key={notification.id} notification={notification}/>)
                    )}
                    {(notifications.length===0)?(<div class="flex">
                        <div class="mx-auto my-auto py-20 font-bold text-xl">
                            No Notifications Yet...
                        </div>
                    </div>):(
                            <div class='text-slate-500 font-bold mx-auto my-2'>
                                No More Notifications
                            </div>
                    )}
                </div>
                {(notifications.length!==0)?(<div class="ml-auto mt-auto mb-3 mr-5 text-sky-500">
                        Mark all as Read
                    </div>):(<></>)}
            </div>
        </>)
    }
    const triggerDropdown = () =>{
        if (dropdownState===0) showDropdownTab(0)
        if (dropdownState===1) showDropdownItems(0)
        else showDropdownItems(1);
        
    }
    return (<>
        <ClickOutside onClick={()=>{showDropdownItems(0)}}>
            <div class="w-10 overflow-hidden">
                <div class={`absolute transition-all duration-200 ${(dropdownState===1)?"opacity-100 translate-y-16 z-2":"opacity-0 -z-1 translate-y-10"}`}>
                    <div class={`absolute -translate-x-10`}>
                        <div class="relative h-10 w-full">
                            <div class={`absolute right-0 w-12 w-md transition-all duration-300`}>
                                {dropdownContents[activeTab]}
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col min-h-0 w-10 bg-stone-300 rounded-md">
                        {dropdownTabs.map((tab)=>
                        (<button class={`transition-colors duration-200 flex-1 text-center my-2 py-2 select-none ${activeTab===tab.key?"text-red-500 font-bold border-l-1 border-red-500":""} cursor-pointer `} onClick={()=>{(activeTab===tab.key)?showDropdownTab(0):showDropdownTab(tab.key)}}>
                            {tab.icon}
                        </button>)
                        )}
                    </div>
                </div>
                <div class="text-sky-50 flex" onClick={()=>{triggerDropdown()}}>
                    <RiMenuLine size="35" class={`my-auto ${(dropdownState===1)?"text-slate-700":"text-sky-50"}`}/>
                </div>
            </div>
        </ClickOutside>
        
    </>)
}
export default HeaderDropdown