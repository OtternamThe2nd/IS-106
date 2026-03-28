function RegisterForm(){
    return (
        <>
            <div class="my-5 p-5 rounded-md bg-sky-50">
                <div class="m-2 ml-15 text-2xl">Create Account</div>
                <div class="flex contents-left">
                    <div class="m-2 ml-15 text-xl text-slate-500">Already have an account?</div>
                    <div class="m-2 text-xl text-sky-500 underline">Sign In here</div>
                </div>
                <div>
                    <div class="flex contents-center m-2">
                        <div class="my-auto h-1 flex-1  mx-auto rounded-full bg-slate-300"></div>
                        <div class="text-lg mx-2 text-slate-500">Personal Information</div>
                        <div class="my-auto h-1 flex-1 mx-auto rounded-full bg-slate-300"></div>
                    </div>
                    <div class="mx-5 flex m-3 flex-wrap justify-center gap-x-4 gap-y-2">
                        <input type="text" class="w-64 m-auto p-2 my-3 px-5 text-xl bg-slate-200 rounded-xl" placeholder="First Name"></input>
                        <input type="text" class="w-64 m-auto p-2 my-3 px-5 text-xl bg-slate-200 rounded-xl" placeholder="Last Name"/>
                        <input type="text" class="w-64 m-auto my-3 p-2 px-5 text-xl bg-slate-200 rounded-xl" placeholder="Middle Name"/>
                    </div>
                    <div class="m-3 flex justify-center">
                        <input id="hasMI" type="checkbox" class="m-2 my-auto"></input>
                        <div for="hasMI" class="my-auto text-xl">No Middle Name</div>
                    </div>
                    <div class="gap-y-2 gap-x-4 mx-5 flex flex-wrap items-center text-slate-500">
                        <select class="w-64 mx-auto my-2 p-2 px-3 text-xl bg-slate-200 rounded-xl focus:border-sky-500 focus:border-2" placeholder="First Name">
                            <option value="" disabled selected hidden>Name Suffix: </option>
                            <option>None</option>
                            <option>Jr.</option>
                            <option>Sr.</option>
                        </select>
                        <select type="text" class="w-64 mx-auto my-2 p-2 px-3 text-xl bg-slate-200 rounded-xl">
                            <option value="" disabled selected hidden>Civil Status:</option>
                            <option>Single</option>
                            <option>Married</option>
                            <option>Widowed</option>
                        </select>
                        <select type="text" class="w-64 mx-auto my-2 p-2 px-3 text-xl bg-slate-200 rounded-xl" placeholder="Middle Name">
                            <option value="" disabled selected hidden>Civil Status:</option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other:</option>
                        </select>
                        <input type="date" class="w-64 mx-auto my-2 p-2 px-3 text-xl bg-slate-200 rounded-xl"/>
                    </div>
                    <div class="flex contents-center m-2">
                        <div class="my-auto h-1 flex-1  mx-auto rounded-full bg-slate-300"></div>
                        <div class="text-xl mx-2 text-slate-500">Residence Information</div>
                        <div class="my-auto h-1 flex-1 mx-auto rounded-full bg-slate-300"></div>
                    </div>
                    <div class="mx-5 flex m-3 flex-wrap justify-center gap-x-4 gap-y-2">
                        <input type="text" class="flex-1 w-64 m-auto p-2 my-3 px-5 text-xl bg-slate-200 rounded-xl" placeholder="City/Municipality"></input>
                        <input type="text" class="flex-1 w-64 m-auto p-2 my-3 px-5 text-xl bg-slate-200 rounded-xl" placeholder="Barangay"/>
                    </div>
                    <div class="mx-5 flex m-3 flex-wrap justify-center gap-x-4 gap-y-2">
                        <input type="text" class="flex-1 w-64 m-auto p-2 my-3 px-5 text-xl bg-slate-200 rounded-xl" placeholder="House No. Block, Lot, ETC."></input>
                        <input type="text" class="flex-1 w-64 m-auto p-2 my-3 px-5 text-xl bg-slate-200 rounded-xl" placeholder="Street Village ETC."/>
                        <input type="text" class="flex-1 w-64 m-auto p-2 my-3 px-5 text-xl bg-slate-200 rounded-xl" placeholder="Zip Code"/>
                    </div>
                    <div class="flex contents-center m-2">
                        <div class="my-auto h-1 flex-1  mx-auto rounded-full bg-slate-300"></div>
                        <div class="text-xl mx-2 text-slate-500">Account Information</div>
                        <div class="my-auto h-1 flex-1 mx-auto rounded-full bg-slate-300"></div>
                    </div>
                    <div class="mx-5 flex m-3 flex-wrap justify-center gap-x-4 gap-y-2">
                        <input type="text" class="min-w-sm flex-1 w-64 m-auto p-2 my-3 px-5 text-xl bg-slate-200 rounded-xl" placeholder="Email"></input>
                        <input type="text" class="min-w-sm flex-1 w-64 m-auto p-2 my-3 px-5 text-xl bg-slate-200 rounded-xl" placeholder="Phone No."/>
                        <input type="text" class="min-w-sm flex-1 w-64 m-auto p-2 my-3 px-5 text-xl bg-slate-200 rounded-xl" placeholder="Password"/>
                        <input type="text" class="min-w-sm flex-1 w-64 m-auto p-2 my-3 px-5 text-xl bg-slate-200 rounded-xl" placeholder="Re-enter Password"/>
                    </div>
                </div>
                <div class="my-10 flex justify-center gap-x-10">
                    <div class="flex rounded-lg font-extrabold text-2xl w-40 bg-red-600 h-15 text-rose-50">
                        <div class="m-auto">Cancel</div>
                    </div>
                    <div class="flex font-extrabold rounded-lg text-2xl w-40 bg-blue-600 h-15 text-rose-50">
                        <div class="m-auto">Register</div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default RegisterForm