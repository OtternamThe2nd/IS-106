import logo from "../assets/taguig-city-logo.png";
import hamburgicon from'../assets/hamburg-icon.svg';
import HeaderDropdown from "./HeaderDropdown";
function HeaderHome(){

    return (
        <>
            <div class="flex h-16 bg-red-700 bg-gradient-to-r from-rose-700 to-red-700">
                <div class="flex h-16 rounded-full">
                    <div style={{backgroundImage: `url(${logo})`}} class="mx-2 m-auto h-12 w-12 rounded-full bg-cover bg-center"></div>
                    <div class="my-auto text-xl font-[agrandir] font-black text-rose-50">Central Healthcare Portal</div>
                </div>
                <div class="ml-auto flex h-16 items-right">
                    <div class="text-center hidden mx-4 text-rose-50 my-auto md:block :w-20 font-[agrandir] font-extrabold text-l">
                        Home
                    </div>
                    <div class="text-center hidden mx-4 text-rose-50 my-auto md:block :w-20 font-[agrandir] font-extrabold text-l">
                        About Us
                    </div>
                    <div class="text-center hidden mx-4 text-rose-50 my-auto md:block :w-20 font-[agrandir] font-extrabold text-l">
                        Book Appointment
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