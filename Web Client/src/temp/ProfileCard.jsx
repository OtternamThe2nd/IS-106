import { useState } from "react"

function ProfileCard(){
    const [activeTab, setActiveTab] = useState(1)
    const [modal, openModal] = useState(0)
    const tabs = [
        {id:1,label:"Personal Information"},
        {id:2,label:"Security"}
    ]
    const tabContent = {
        1:(<>
            <div class="">
                <div class="my-4">
                    <div class="text-slate-500 text-sm">
                        Full Name
                    </div>
                    <div class="font-bold text-md">
                        Place Holder
                    </div>
                </div>
                <div class="my-4">                
                    <div class="text-slate-500 text-sm">
                        Birthday
                    </div>
                    <div class="font-bold text-md">
                        Place Holder
                    </div>
                </div>
                <div class="my-4">                
                    <div class="text-slate-500 text-sm">
                        Gender
                    </div>
                    <div class="font-bold text-md">
                        Place Holder
                    </div>
                </div>
                <div class="my-4">
                    <div class="text-slate-500 text-sm">
                        Civil Status
                    </div>
                    <div class="font-bold text-md">
                        Place Holder
                    </div>
                </div>
                <div class="my-4">                
                    <div class="text-slate-500 text-sm">
                        Address
                    </div>
                    <div class="font-bold text-md">
                        Place Holder
                    </div>
                </div>
                <div class="my-4">                
                    <div class="text-slate-500 text-sm">
                        Contact No.
                    </div>
                    <div class="font-bold text-md">
                        Place Holder
                    </div>
                </div>
            </div>
        </>),
        2:(<>Hewwo
            <div class="">
                <div class="my-4">
                    <div class="text-slate-500 text-sm">
                        Email
                    </div>
                    <div class="font-bold text-md">
                        Place Holder
                    </div>
                </div>
                <div class="my-4">                
                    <div class="text-slate-500 text-sm">
                        Password
                    </div>
                    <div class="font-bold text-md">
                        Place Holder
                    </div>
                </div>
                <div class={`fixed top-0 left-0 transition-opacity transition-transform duration-300 h-screen flex ${modal===1?"opacity-100 translate-y-0 w-screen h-screen":"opacity-0 translate-y-3 w-0 h-0"}`}>
                    <div class="absolute w-full h-full opacity-80 bg-neutral-500" onClick={()=>openModal(0)}>

                    </div>
                    <div class="z-1  m-auto">
                        <div class="rounded-t-md flex flex-col z-1 w-md bg-sky-50 py-4 ">
                            <div class="font-bold m-auto">Update Email</div>
                        </div>
                        <div class="flex flex-col p-4 my-1 w-md bg-sky-50 rounded-b-md ">
                            <div class="ml-8">Email</div>
                            <input type="text" class="p-2 mx-10 px-4 h-5 rounded-2xl bg-slate-300 flex-1"></input>
                            <div class="ml-8">Password</div>
                            <input type="text" class="p-2 mx-10 px-4 h-5 rounded-2xl bg-slate-300 flex-1"></input>
                            <div class="flex my-5">
                                <div class="h-sm w-18 p-2 ml-auto mr-5 bg-slate-400 text-center text-sky-50 rounded-md cursor-pointer focus:border-0" onClick={()=>openModal(0)}>Cancel</div>
                                <div class="h-sm w-18 p-2 mr-10 bg-sky-500 text-center text-sky-50 rounded-md cursor-pointer focus:border-0">Submit</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="" onClick={()=>{openModal(1)}}>Ello</div>
            </div>
        </>)
    }
    return(<>
        <div class="mx-10 mt-5 mb-2 px-8 pt-8 bg-sky-50 rounded-t-3xl">
            <div class="flex flex-wrap">
                <div class="bg-red-500 mb-2 w-18 h-18 rounded-full"></div>
                <div class="mt-auto mb-3 mx-2">
                    <div class="my-auto text-xl font-bold">Place Holder</div>
                    <div class="flex gap-x-2">
                        <div class="">Client</div>
                        <div class="">placeholder@gmail.com</div>
                    </div>
                </div>
                <div class="ml-auto mt-auto">
                    {tabs.map((tab)=>(
                        <button key={tab.id}
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
    </>)
}
export default ProfileCard