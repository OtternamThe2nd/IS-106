import { useState } from "react"
import { useClickAway } from "@uidotdev/usehooks";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { RiArrowDropDownLine } from 'react-icons/ri'

const Select = ({options,valueSetter,label,bg,placeholder,className,searchable}) => {
    const navigate = useNavigate()
    const [dropdown,dropdownState] = useState(false)
    const [items,setItems] = useState(options)
    const [inputvalue,setInputValue] = useState()
    const ref = useClickAway(() => {
        dropdownState(false);
    });
    const handleOpenModal = () => {
        if (dropdown === false) {
            dropdownState(true);
        }
    };
    const handleChange = (e) => {
        const value = e.target.value +''
        setItems(options.filter((item)=>item.includes(value)))
        setInputValue(value)
    }
    let length=0
    const [value,setValue] = useState(valueSetter.value)
    return (<div ref={ref} class={`${className} cursor-pointer relative flex-col p-2 focus-within:outline-sky-500 focus-within:outline-2 min-w-64 m-auto my-3 px-5 ${(bg)?''+bg:'bg-slate-200'} rounded-xl`} onClick={()=>handleOpenModal()}>
        <div class="text-slate-500 text-sm truncate">{label}:</div>
        <div class='flex'>
            {(!searchable)?(<div>{(valueSetter.value)? valueSetter.value:placeholder}</div>):(<input onChange={handleChange} value={inputvalue} class={`${searchable ? '':'z-0'} w-full text-md truncate text-slate-900 focus:outline-0`} placeholder={`${placeholder}`}/>)}<RiArrowDropDownLine size={20} class={`ml-auto transition-transform duration-200 ${dropdown ? 'rotate-180':''}`}/>
        </div>
        {(<div class={`trasition-opacity z-1 w-full rounded-xl translate-y-3 absolute bg-slate-200 overflow-y-auto duration-300 transition-[max-height] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar]:rounded-l-xl [&::-webkit-scrollbar-track]:bg-slate-50 [&::-webkit-scrollbar-thumb]:bg-slate-50 dark:[&::-webkit-scrollbar-track]:bg-neutral-100 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-200 ${dropdown?"max-h-35 p-2 opacity-100":"max-h-0 invisible"}`}>
            {items.map((val)=>
                {
                    length++
                    return (<div key={val} class={`flex w-full my-auto h-10 text-overflow:ellipsis ${length===1 ? "rounded-t-lg":(dropdown)?"outline-b-slate-500 outline-t-1":""} ${length===options.length ?"rounded-b-xl":(dropdown)?"outline-b-slate-500 outline-b-1":""}`} onClick={()=>{valueSetter.setValue(val);setValue(val);dropdownState(false);setInputValue(val)}}>
                        <div class="my-auto mx-2 text-slate-900">
                            {`${val}`}
                        </div>
                    </div>)
                }
            )}
        </div>)}
    </div>)
}
export default Select