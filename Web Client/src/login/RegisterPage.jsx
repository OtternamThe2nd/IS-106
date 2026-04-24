import Header from "../temp/Header.jsx"
import RegisterForm from "../temp/RegiterForm.jsx"

function RegisterPage(){
    return(
        <>
            <div class="w-full flex">
                <div class="m-auto xl:mx-auto lg:mx-auto sm:mx-20 md:mx-20 mx-auto">
                    <RegisterForm/>
                </div>
            </div>
        </>
    )
}
export default RegisterPage