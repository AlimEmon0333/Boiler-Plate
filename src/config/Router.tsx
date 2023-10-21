import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MAtask from "../Screens/MAtask";
export default function AppRouter() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<MAtask/>} />
                </Routes>
            </Router>
        </>
    )
}