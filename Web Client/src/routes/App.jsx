import LoginPage from '../login/LoginPage.jsx'
import RegisterPage from '../login/RegisterPage.jsx'
import ProfilePage from '../client/ProfilePage.jsx'
import { HashRouter, Routes, Route } from 'react-router-dom'
import MailSample from '../temp/MailSample.jsx'
import EmailVerificationPage from '../login/EmailVerificationPage.jsx'
import dotenv from 'dotenv'
import AccountRecoveryPage from '../login/AccountRecoveryPage.jsx'
import Home from '../client/HomePage.jsx'
import Booking from '../client/BookingPage.jsx'
import About from '../client/AboutPage.jsx'
import AdminPage from '../admin/AdminPage.jsx'
import bg from '../assets/white-bg-city.png'

function App(){
    return(
        <>
            <div style={{"backgroundImage":`url(${bg})`}} class="fixed top-0 left-0 w-full h-screen -z-1 bg-cover bg-center">

            </div>
            <HashRouter>
                <Routes>
                    <Route path="/" element={<LoginPage/>}/>
                    <Route path="/register" element={<RegisterPage/>}/>
                    <Route path="/profile" element={<ProfilePage/>}/>
                    <Route path="/mail" element={<MailSample/>}/>
                    <Route path="/emailverification" element={<EmailVerificationPage/>}/>
                    <Route path="/accountrecovery" element={<AccountRecoveryPage/>}/>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/booking" element={<Booking/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/admin" element={<AdminPage/>}/>
                </Routes>
            </HashRouter>
        </>
    )
}
export default App;