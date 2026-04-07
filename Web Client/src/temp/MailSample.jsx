import Logo from "../assets/health-office-logo.png"
import TaguigLogo from "../assets/taguig-city-logo.png"

function MailSample(){
    return(<>
        <div class="flex flex-col text-xl">
            <div class="flex justify-center bg-gradient-to-r from-rose-700 to-red-700 py-5">
                <img src={Logo} class="w-50 h-50"></img>
                <div class="my-auto mx-4 text-rose-50">
                    <div class="text-2xl font-bold">Taguig Health Center</div>
                    <div>Greetings From Our Faculty</div>
                </div>
            </div>
            <div class="mx-auto text-3xl mt-5">
                Hello,
            </div>
            <div class="mx-20 my-5">
                There was a request to use your email address to create an account for our website use the verification code below to continue.
            </div>

            <div class="m-auto bg-slate-400 p-10 rounded-md text-2xl">
                <div class="text-7xl text-rose-50">
                    102992
                </div>
            </div>
            <hr class="my-5"></hr>
            <div class="my-5 font-bold mx-auto">
                If this was not a request made by you, You can safely ignore this email.
            </div>
            <div class="flex justify-center bg-gradient-to-r from-rose-700 to-red-700 py-5">
                <img src={TaguigLogo} class="w-50 h-50"></img>
                <div class="my-auto mx-4 text-rose-50">
                    <div class="text-2xl font-bold">City of Taguig</div>
                    <div>Think Big. Dream Big. Love Taguig</div>
                </div>
            </div>
        </div>
    </>)
}
export default MailSample