import Header from "./Header.jsx"
import RegisterForm from "./RegiterForm.jsx"

function RegisterPage(){
    return(
        <>
            <Header/>
            <div class="w-full flex">
                <div class="m-auto sm:mx-20 md:mx-20 mx-0">
                    <RegisterForm/>
                </div>
            </div>
        </>
    )
}
export default RegisterPage