import { type } from "os"
import IconButton from "@mui/material/IconButton"
type MAiconButton = {
    Onclick: any,
    value: any,
}
export default function MAiconButton(props: MAiconButton) {
    return (
        <>
            <IconButton aria-label="delete" onClick={props.Onclick}>
                {props.value}
            </IconButton>
       
        </>
    )
}