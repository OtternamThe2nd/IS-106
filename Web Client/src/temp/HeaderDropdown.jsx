import { useState } from "react";

function HeaderDropdown(){
    const [dropdownState,showDropdownItems] = useState(0)
    const [activeTab,showDropdownTab] = useState(0)
    const dropdownTabs = {
        1:"Profile",
        2:"Notification"
    }
    const dropdownContents = {
        1:(<>
        
        </>),
        2:(<>
        
        </>)
    }
    return (<>
        <div class="w-10 overflow-hidden">
            <svg viewBox="0 0 24 24" fill="none" class="">
                <path d="M20 7L4 7" stroke="#F8FAFC" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M20 12L4 12" stroke="#F8FAFC" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M20 17L4 17" stroke="#F8FAFC" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <div class="h-100% " >
                Hello
            </div>
        </div>
    </>)
}
export default HeaderDropdown