import { useState } from "react"
import health_ofice_logo from '../assets/health-office-logo.png'
export default function AdminPage(){
    const [selectedTab,selectTab] = useState(0)
    const tabs = [
        'Users',
        'Departments',
        'Posts/Events',
        'Sessions/Booking',
        'Admins',
    ]
    const tabContents = [
        (<div>
            Hello 1
        </div>),
        (<div>
            Hello 2
        </div>),
        (<div>
            Hello 3
        </div>),
        (<div>
            Hello 4
        </div>),
        (<div>
            Hello 5
        </div>),
    ]
    return(<div class="h-screen w-full flex flex-wrap bg-gradient-to-r from-rose-700 to-red-900">
        <div class='h-screen w-55 overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar]:rounded-l-xl [&::-webkit-scrollbar-thumb]:bg-slate-50 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-200'>
            <div class='flex flex-wrap'>
                <div style={{backgroundImage: `url(${health_ofice_logo})`}} class='h-15 w-15 bg-cover ml-2 my-5'>
                </div>
                <div class='font-bold text-xl ml-5 my-auto text-sky-50'><div>City Health</div><div>Office</div></div>
            </div>
            <div class='flex flex-col'>
                {tabs.map((tab,i)=>
                    (<button onClick={()=>{selectTab(i)}} class="flex-1 text-slate-50 text-xl border-t-1 border-rose-800 py-3">
                        {tab}
                    </button>)
                )}
            </div>
        </div>
        <div class='bg- bg-center bg-slate-50 flex-1 rounded-l-2xl h-screen'>
            {tabContents[selectedTab]}
        </div>
    </div>)
}