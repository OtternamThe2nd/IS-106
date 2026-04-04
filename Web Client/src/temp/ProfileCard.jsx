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
                <div class={`fixed top-0 left-0 w-screen h-screen ${modal===1?"block flex":"hidden"}`}>
                    <div class="absolute z-0 w-screen h-screen opacity-80 bg-neutral-500">

                    </div>
                    <div class="z-1  m-auto">
                        <div class="rounded-t-md flex flex-col z-1 w-md bg-sky-50 py-4 ">
                            <div class="font-bold m-auto">Update Email</div>
                        </div>
                        <div class="p-4 my-1 w-md bg-sky-50 rounded-b-md ">
                            <div class="ml-8">Email</div>
                            <input type="text" class="p-2 px-4 h-10 w0fu"></input>
                            <div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="" onClick={()=>{openModal(1);console.log(modal)}}>Ello</div>
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