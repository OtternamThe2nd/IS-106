import logo from "../assets/taguig-city-logo.png";
import hamburgicon from'../assets/hamburg-icon.svg';
function HeaderHome(){

    return (
        <>
            <div class="flex h-16 bg-red-700 bg-gradient-to-r from-rose-700 to-red-700">
                <div class="flex h-16 w-110 rounded-full">
                    <div style={{backgroundImage: `url(${logo})`}} class="m-auto h-12 w-12 rounded-full bg-cover bg-center"></div>
                    <div class="my-auto text-3xl font-[agrandir] font-black text-rose-50">Central Healthcare Portal</div>
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
                    <div class="ml-2 p-2 h-14 w-14">
                        <svg viewBox="0 0 24 24" fill="none">
                            <path d="M20 7L4 7" stroke="#F8FAFC" strokeWidth="1.5" strokeLinecap="round"/>
                            <path d="M20 12L4 12" stroke="#F8FAFC" strokeWidth="1.5" strokeLinecap="round"/>
                            <path d="M20 17L4 17" stroke="#F8FAFC" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                    </div>
                    
                </div>
            </div>
        </>
    )
}
export default HeaderHome