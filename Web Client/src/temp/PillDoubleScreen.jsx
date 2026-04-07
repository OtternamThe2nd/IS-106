import { useState } from "react"
import ProfileCard from "./ProfileCard"

function PillDoubleScreen(){
    const [dropdownState,showDropdownItems] = useState(0)
    const [activeTab,showDropdownTab] = useState(0)
    const dropdownTabs = [
        {
            key:1,
            label:"Profile",
            char:'P'
        },
        {
            key:2,
            label:"Announcement",
            char:'A'
        }
    ]
    const dropdownContents = {
        0:(<>
        </>),
        1:(<>
            <div class="">
                <ProfileCard></ProfileCard>
            </div>
        </>),
        2:(<>
            Hewwo
        </>)
    }
    return (<>
        <div class = "flex mx-5 h-[calc(100vh-6em)] my-4">
            <div class={`overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar]:rounded-l-xl [&::-webkit-scrollbar-track]:bg-slate-50 [&::-webkit-scrollbar-thumb]:bg-slate-50 dark:[&::-webkit-scrollbar-track]:bg-neutral-100 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-200 ml-auto mx-1 ${activeTab===0?"opacity-0":"opacity-100 flex-1"} duration-300 rounded-xl bg-sky-50`}>{dropdownContents[activeTab]}</div>
            <div class="h-[calc(30%)]">
                <div class="flex flex-col min-h-0 w-10 bg-sky-50 rounded-md">
                    {dropdownTabs.map((tab)=>
                        (<button class={`flex-1 text-center my-2 py-2 select-none ${activeTab===tab.key?"text-red-500 font-bold border-l-1 border-red-500":""} cursor-pointer `} onClick={()=>{(activeTab===tab.key)?showDropdownTab(0):showDropdownTab(tab.key)}}>
                            {`${tab.char}`}
                        </button>)
                    )}
                </div>
            </div>
        </div>
    </>)
}
export default PillDoubleScreen