import logo from "../assets/taguig-city-logo.png";
import hamburgicon from'../assets/hamburg-icon.svg';
import HeaderDropdown from "./HeaderDropdown";
import { useNavigate } from "react-router-dom";
function HeaderHome(){
    const navigate = useNavigate()
    return (
        <>
            <div class="flex h-16 bg-red-700 bg-gradient-to-r from-rose-700 to-red-700">
                <div class="flex h-16 rounded-full">
                    <div style={{backgroundImage: `url(${logo})`}} class="mx-2 m-auto h-12 w-12 rounded-full bg-cover bg-center"></div>
                    <div class="my-auto text-xl font-[agrandir] font-black text-rose-50">Central Healthcare Portal</div>
                </div>
                <div class="ml-auto flex h-16 items-right">
                    <div onClick={()=>{navigate('/home')}} class="transition-colors duration-200 cursor-pointer text-center mx-4 text-rose-50 md:block :w-20 font-[agrandir] hover:text-slate-900 hover:bg-sky-50 px-2 h-full font-extrabold text-l flex">
                        <div class="flex h-full">
                            <div class="my-auto">
                                Home
                            </div>
                        </div>
                    </div>
                    <div onClick={()=>{navigate('/about')}} class="transition-colors duration-200 cursor-pointer text-center mx-4 text-rose-50 md:block :w-20 font-[agrandir] hover:text-slate-900 hover:bg-sky-50 px-2 h-full font-extrabold text-l flex">
                        <div class="flex h-full">
                            <div class="my-auto">
                                About Us
                            </div>
                        </div>
                    </div>
                    <div onClick={()=>{navigate('/booking')}} class="transition-colors duration-200 cursor-pointer text-center mx-4 text-rose-50 md:block :w-20 font-[agrandir] hover:text-slate-900 hover:bg-sky-50 px-2 h-full font-extrabold text-l flex">
                        <div class="flex h-full">
                            <div class="my-auto">
                                Book Appointment
                            </div>
                        </div>
                    </div>
                    <div class="mx-2 my-auto aspect-[1/1]">
                        <HeaderDropdown/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default HeaderHome