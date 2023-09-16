import { TextField } from "@mui/material";
import { type } from "os";
type MAinput = {
    onchange: any,
    label : string,
}
export default function MAinput(props: MAinput) {
    return (
        <>
            <TextField id="filled-basic" label={props.label} variant="standard" onChange={props.onchange} sx={{width:"50%"}}/>
        </>
    )
}