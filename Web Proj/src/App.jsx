import Login from './Login.jsx'
import RegisterPage from './RegisterPage.jsx'
import { HashRouter, Routes, Route } from 'react-router-dom'

function App(){
    return(
        <>
            <HashRouter>
                <Routes>
                    <Route path="/" element={<Login/>}></Route>
                    <Route path="/register" element={<RegisterPage/>}></Route>
                </Routes>
            </HashRouter>
        </>
    )
}
export default App;