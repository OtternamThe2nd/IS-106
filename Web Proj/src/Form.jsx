function Form() {
  return (
    <>
        <div class="mx-auto p-5 max-w-md rounded-xl bg-slate-50 shadow-sm font-[garet]">
                {/* Header */}
                <div class = "w-100 flex justify-center my-2 mx-auto text-2xl text-slate-950 font-[garet] font-black align-middle">
                    <div>Sign in to Healthcare Portal</div>
                </div>
                {/* Sign-up link */}
                <div class="w-100 flex justify-center">
                    <div class="p-2">New Here?</div>
                    <div class="p-2 font-semibold text-sky-500 underline">Create your Account Here</div>
                </div>
                {/* Email Input */}
                <div class="w-100 my-3">
                    <div class="font-semibold p-2">Email Address or Username</div>
                    <input type="text" class = "mx-5 w-90 px-5 p-2 rounded-l bg-slate-100" placeholder="Enter Email or Username"></input>
                </div>

                {/* Pass Input */}
                <div class="w-100 my-3">
                    <div class="flex justify-stretch w-100">
                        <div class="float-left font-semibold p-2">Password</div>
                        <div class="float-right ml-auto font-semibold p-2 contents-right text-sky-500 underline">Forgot Password</div>
                    </div>
                    <input type="text" class = "mx-5 w-90 px-5 p-2 rounded-l bg-slate-100" placeholder="Enter Password"></input>
                </div>
                <div class = "w-100 my-3">
                    <div class="mx-auto bg-sky-950 text-rose-50 p-3 rounded-xl font-black text-center">Sign In</div>
                </div>
                <div class="w-100 my-3">
                    <div class="mx-auto bg-sky-50 text-rose-50 p-2 rounded-xl border-1 border-sky-950 text-sky-950 text-center">Cancel</div>
                </div>
      </div>
    </>
  );
}

export default Form