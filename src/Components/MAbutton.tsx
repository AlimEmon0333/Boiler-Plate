import { Button } from "@mui/material";
import { type } from "os";

type MAbutton = {
    value: string,
    Onclick: any,
    Classname : string
}
export default function MAbutton(props: MAbutton) {
    return (
        <>
            <Button  className={props.Classname} variant='contained' onClick={props.Onclick}>{props.value}</Button>
        </>
    )
}
