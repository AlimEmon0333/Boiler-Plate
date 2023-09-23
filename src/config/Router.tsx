import { BrowserRouter, Routes, Route } from "react-router-dom";
import MADashboard from "../Screens/MADashboard/MADashboard";
import MALogin from "../Screens/MAlogin";
import MASignUp from "../Screens/MAsignUp";
import MAtask from "../Screens/MAtask";
export default function AppRouter() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="MAlogin" element={<MALogin />} />
                    <Route path="MAsignUp" element={<MASignUp />} />
                    <Route path="MADashboard/*" element={<MADashboard />} />
                    <Route path="MAtask" element={<MAtask />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}