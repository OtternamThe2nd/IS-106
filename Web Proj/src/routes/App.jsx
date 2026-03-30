import LoginPage from '../login/LoginPage.jsx'
import RegisterPage from '../login/RegisterPage.jsx'
import ProfilePage from '../client/ProfilePage.jsx'
import { HashRouter, Routes, Route } from 'react-router-dom'

function App(){
    return(
        <>
            <HashRouter>
                <Routes>
                    <Route path="/" element={<LoginPage/>}></Route>
                    <Route path="/register" element={<RegisterPage/>}></Route>
                    <Route path="/profile" element={<ProfilePage/>}></Route>
                </Routes>
            </HashRouter>
        </>
    )
}
export default App;