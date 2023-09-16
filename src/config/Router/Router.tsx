import { BrowserRouter, Routes, Route } from "react-router-dom";
import MASignup from "../../Screens/MAsignUp";
import MALogin from "../../Screens/MAlogin";
import MADashboard from "../../Screens/MADashboard/MADashboard";
export default function AppRouter() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="MAsignup" element={<MASignup/>} />
                    <Route path="MAlogin" element={<MALogin/>} />
                    <Route path="MADashboard/*" element={<MADashboard/>} />
                </Routes>
            </BrowserRouter>

        </>
    )
}
