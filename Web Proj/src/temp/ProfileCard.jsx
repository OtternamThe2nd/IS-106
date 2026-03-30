import { useState } from "react"

function ProfileCard(){
    const [activeTab, setActiveTab] = useState(1)
    const tabs = [
        {id:1,label:"Personal Information"},
        {id:2,label:"Security"}
    ]
    const tabContent = {
        1:(<>Hello</>),
        2:(<>Hewwo</>)
    }
    return(<>
        <div class="m-10 px-8 pt-8 bg-sky-50 rounded-t-3xl">
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
        <div class="min-h-20 m-10 px-8 pt-8 bg-sky-50 rounded-b-3xl">
            {tabContent[activeTab]}
        </div>
    </>)
}
export default ProfileCard