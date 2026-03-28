function RegisterForm(){
    return (
        <>
            <div class="m-10 p-5 rounded-md bg-sky-50">
                <div class="m-2 ml-25 text-4xl">Create Account</div>
                <div class="flex contents-left">
                    <div class="m-2 ml-25 text-2xl text-slate-500">Already have an account?</div>
                    <div class="m-2 text-2xl text-sky-500 underline">Sign In here</div>
                </div>
                <div>
                    <div class="flex contents-center m-2">
                        <div class="my-auto h-1  min-w-100  mx-auto rounded-full bg-slate-300"></div>
                        <div class="text-xl text-slate-500">Personal Information</div>
                        <div class="my-auto h-1 min-w-100 mx-auto rounded-full bg-slate-300"></div>
                    </div>
                    <div class="flex m-3">
                        <input type="text" class="m-auto p-2 px-5 text-2xl focus:border-sky-500 focus:border-2" placeholder="First Name"></input>
                        <input type="text" class="m-auto p-2 px-5 text-2xl" placeholder="Last Name"/>
                        <input type="text" class="m-auto p-2 px-5 text-2xl" placeholder="Middle Name"/>
                    </div>
                    <div class="flex justify-center">
                        <input id="hasMI" type="checkbox" class="m-2 my-auto w-10"></input>
                        <div for="hasMI" class="my-auto">No Middle Initial</div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default RegisterForm