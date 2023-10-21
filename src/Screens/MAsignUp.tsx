import { Box, Paper, TextField, Typography, Button, Avatar, Backdrop, CircularProgress } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import { useEffect, useState } from "react";
import { FBsignUp } from "../config/firebaseMethods";
import { useNavigate } from "react-router-dom";

export default function MASignUp() {
    const [user, setUser] = useState<any>({})
    const [openBackdrop, setOpenBackdrop] = useState(false);
    const navigate = useNavigate()
    const fillUser = (key: any, val: any) => {
        user[key] = val;
        setUser({ ...user })
    }
    const SignUpUser = () => {
        setOpenBackdrop(true)
        FBsignUp(user , "users")
            .then((res: any) => {
                alert(res + "This user signedUp successfully")
                setOpenBackdrop(false)
            }).catch((err: any) => {
                alert(err)
                setOpenBackdrop(false)
            })
    }
    return (
        <>
            {/* Login */}
            <div className="flex justify-center items-center bg-gradient-to-r from-indigo-500 h-screen w-screen">
                <div className="w-[400px] ease-in duration-300 bg-white p-5 rounded-lg border-t-4 border-indigo-500 border-b-4 border-indigo-500 hover:border-r-4 border-indigo-500 hover:border-l-4 border-indigo-500 hover:border-t-0 border-indigo-500 hover:border-b-0 border-indigo-500 flex justify-center items-center">
                    <div className="py-2 flex-col flex justify-center items-center">
                        {/* <Simple loader /> */}
                        <Backdrop
                            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                            open={openBackdrop}
                        >
                            <CircularProgress color="inherit" />
                        </Backdrop>
                        {/* <Simple loader /> */}
                        <Avatar src="/broken-image.jpg" sx={{ width: "100px", height: "100px", backgroundColor: "transparent" }} className="block bg-gradient-to-r from-indigo-500 mb-4" />
                        <TextField variant="filled" label="User Name" type="text" onChange={(e: any) => fillUser("User Name", e.target.value)} />
                        <br />
                        <TextField variant="filled" label="Email" type="email" onChange={(e: any) => fillUser("Email", e.target.value)} />
                        <br />
                        <TextField variant="filled" label="Password" type="password" onChange={(e: any) => fillUser("Password", e.target.value)} />
                        <br />
                        <Button variant="contained" onClick={SignUpUser} endIcon={<PersonIcon />} className="bg-gradient-to-r from-indigo-500 ease-linear duration-500 hover:bg-gradient-to-l from-indigo-300 w-75 h-50 py-2 rounded-lg" >Sign up</Button>
                    </div>
                </div>
            </div>
        </>
    )
}