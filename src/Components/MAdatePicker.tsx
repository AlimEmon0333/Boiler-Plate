import { Box, Paper } from "@mui/material";
import { type } from "os";
type MAdatePicker = {
    Onchange: any,
}
export default function MAdatePicker(props:MAdatePicker) {
    return (
        <>
            <input type="date" style={{ width: '300px', height: "50px", borderRadius: "10px", border: "1px solid black" }} onChange={props.Onchange}></input>
        </>
    )
}