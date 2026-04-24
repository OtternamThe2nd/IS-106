import { useCookies } from "react-cookie";
import Select from "./Select";

export default function BookingContents() {
    class ValueSetter {
        setValue(value){
            this.value = value
        }
    }
    const api = import.meta.env.VITE_API_URL
    const [cookies, setCookies,removeCookies] = useCookies(['user'])
    const barangaySetter = new ValueSetter()
    const user = cookies.user
    const barangays_taguig = ["Bagumbayan","Bambang","Calzada","Cembo","Central Bicutan","Central Signal Village","Comembo","East Rembo","Fort Bonifacio","Hagonoy","Ibayo Tipas","Katuparan","Ligid Tipas","Lower Bicutan","Maharlika Village","Napindan","New Lower Bicutan","North Daang Hari","North Signal Village","Northside","Palingon","Pembo","Pinagsama","Pitogo","Rizal","San Miguel","Santa Ana","South Cembo","South Daang Hari","South Signal Village","Southside","Tanyag","Tuktukan","Upper Bicutan","Ususan","Wawa","Western Bicutan","West Rembo"]
    const purpose = new ValueSetter
    const purposeOptions = [
        "Check Up","Follow Up & Check Up","Medicine Recievable"
    ]
    return (<div class='flex flex-col flex-1 mx-10 bg-sky-50 rounded-2xl p-10 my-10'>
        <div class='font-bold text-xl'>
            Book Appointment
        </div>
        <div class='flex flex-wrap my-5 gap-y-5'>
            <div class='min-w-sm flex-1'>
                <div class='font-bold text-xl'>
                    Client
                </div>
                <div class='text-slate-500'>This information is given using the account registered.</div>
                <div class="p-2 focus-within:outline-sky-500 focus-within:outline-2 flex-1 w-64 mt-5 px-5 rounded-xl" >
                    <div class="text-slate-500 text-sm">Full Name</div>
                    <div class="w-full focus:outline-0 text-md text-slate-500">Placeholder</div>
                </div>
                <div class="p-2 focus-within:outline-sky-500 focus-within:outline-2 flex-1 w-64 mt-1 px-5 rounded-xl" >
                    <div class="text-slate-500 text-sm">Full Address</div>
                    <div class="w-full focus:outline-0 text-md text-slate-500">Placeholder</div>
                </div>
                <div class="p-2 focus-within:outline-sky-500 focus-within:outline-2 flex-1 w-64 mt-1 px-5 rounded-xl" >
                    <div class="text-slate-500 text-sm">Email</div>
                    <div class="w-full focus:outline-0 text-md text-slate-500">Placeholder</div>
                </div>
                <div class="p-2 focus-within:outline-sky-500 focus-within:outline-2 flex-1 w-64 mt-1 px-5 rounded-xl" >
                    <div class="text-slate-500 text-sm">Phone No.</div>
                    <div class="w-full focus:outline-0 text-md text-slate-500">0909090909</div>
                </div>
            </div>
            <form class='flex flex-col min-w-sm flex-1'>
                <div class="font-bold text-xl">
                    Patient
                </div>
                <div class=' text-slate-500 italic'>
                    The Patient must accurately complete all required information and review it before submitting.
                </div>
                <div class=' text-slate-500 italic mt-1'>
                    Dapat punan ng pasyente ng tama ang lahat ng kinakailangang impormasyon at suriin bago isumite.
                </div>
                <div class='flex flex-wrap justify center gap-x-5'>
                    <div class="p-2 focus-within:outline-sky-500 focus-within:outline-2 flex-1 min-w-50 flex-1 m-auto my-3 px-5 bg-slate-200 rounded-xl" >
                        <div class="text-slate-500 text-sm">First Name</div>
                        <input class="w-full focus:outline-0 text-md"></input>
                    </div>
                    <div class="p-2 focus-within:outline-sky-500 focus-within:outline-2 flex-1 min-w-50 flex-1 m-auto my-3 px-5 bg-slate-200 rounded-xl" >
                    <div class="text-slate-500 text-sm">Middle Name</div>
                        <input class="w-full focus:outline-0 text-md"></input>
                    </div>
                    <div class="p-2 focus-within:outline-sky-500 focus-within:outline-2 flex-1 min-w-50 flex-1 m-auto my-3 px-5 bg-slate-200 rounded-xl" >
                        <div class="text-slate-500 text-sm">Last Name</div>
                        <input class="w-full focus:outline-0 text-md"></input>
                    </div>
                    <div class="p-2 focus-within:outline-sky-500 focus-within:outline-2 flex-1 min-w-50 flex-1 m-auto my-3 px-5 bg-slate-200 rounded-xl" >
                        <div class="text-slate-500 text-sm">Name Suffix</div>
                        <input class="w-full focus:outline-0 text-md"></input>
                    </div>
                    <Select className="flex-1 " placeholder={"Select Barangay"} valueSetter={barangaySetter} searchable={true} options={barangays_taguig} label="Barangay"/>
                </div>
                <div class='flex'>
                    <Select className={"flex-1"} options={purposeOptions} valueSetter={purpose} label="Purpose of Visit" placeholder="Select Purpose"></Select>
                </div>
            </form>
            <div class="flex w-full">
                <div class='ml-auto mt-8'>
                    <button class='ml-auto bg-slate-200 rounded-xl text-slate-500 font-bold py-3 px-6'>
                        Discard
                    </button>
                    <button class='mr-8 ml-5 bg-blue-600 text-rose-50 font-bold py-3 px-6 rounded-xl'>
                        Submit
                    </button>
                </div>
            </div>
        </div>
    </div>)
}