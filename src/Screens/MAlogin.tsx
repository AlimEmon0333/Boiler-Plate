import { Box, Paper, TextField, Typography, Button } from "@mui/material";

export default function MALogin() {
    return (
        <>
        {/* Login main box */}
            <Box sx={{ backgroundColor: "lightcyan", height: "100vh"}}>
                <div className="d-flex justify-content-center align-items-center text-center">
                    <Box sx={{ width: "300px", height: "200px" }}>
                        {/* Login heading */}
                        <Paper sx={{ height: "50px", marginTop: "100px", backgroundColor: 'lightgray' }} className="mb-3 d-flex justify-content-center align-items-center">
                            <Typography className="fs-4 " variant="h1" sx={{ color: "black", width: "200px", padding: "3px 3px", fontFamily: 'initial' }}>Login User</Typography>
                        </Paper>
                        {/* Login Inputs */}
                        <Paper sx={{ backgroundColor: 'lightgray' }}>
                            <TextField id="standard-basic" sx={{ backgroundColor: "lightgray" }} type="text" label="Enter User Name Or Email" className="mt-3 mx-5" variant="standard"></TextField>
                            <TextField id="standard-basic" sx={{ backgroundColor: "lightgray" }} type="password" label="Enter Password" className="mt-3 mb-5 mx-5" variant="standard"></TextField>
                        </Paper>
                        {/* Login Button */}
                        <Paper className="mt-3" sx={{ backgroundColor: 'lightgray' }}>
                            <button className="btn btn-login" style={{ backgroundColor: 'lightcyan', color: "black", fontFamily: "initial", padding: "6px 40px", margin: "10px 10px" }}>Login</button>
                        </Paper>
                    </Box>
                </div>
            </Box>
        </>
    )
}