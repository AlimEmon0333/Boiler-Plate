import { Box, Paper, TextField, Typography, Button, Avatar } from "@mui/material";
import { type } from "os";
import MAinput from "../Components/MAinput";
import MAbutton from "../Components/MAbutton";
import PersonIcon from '@mui/icons-material/Person';

export default function MALogin() {
    return (
        <>
            {/* Login */}
            <div className="flex justify-center items-center bg-gradient-to-r from-indigo-500 h-screen w-screen">
                <div className="w-[350px] ease-in duration-300 bg-white p-5 rounded-lg border-t-4 border-indigo-500 border-b-4 border-indigo-500 hover:border-r-4 border-indigo-500 hover:border-l-4 border-indigo-500 hover:border-t-0 border-indigo-500 hover:border-b-0 border-indigo-500 flex justify-center items-center">

                    <div className="py-2 flex-col flex justify-center items-center">
                        <Avatar src="/broken-image.jpg" sx={{ width: "100px", height: "100px", backgroundColor: "transparent" }} className="block bg-gradient-to-r from-indigo-500 mb-4" />
                        <MAinput label="User Name" type="text" className="w-100" />
                        <br />
                        <MAinput label="Email" className="w-100" type="email" />
                        <br />
                        <MAinput label="Password" className="w-100" type="password" />
                        <br />
                        <MAbutton value="Sign Up" endIcon={<PersonIcon />} Classname="bg-gradient-to-r from-indigo-500 ease-linear duration-500 hover:bg-gradient-to-l from-indigo-300 w-75 h-50 py-2 rounded-lg" />
                    </div>
                    <div className="py-5 block flex-col">
                    </div>
                    <div className="py-5 flex-col">
                    </div>

                </div>
            </div>
        </>
    )
}