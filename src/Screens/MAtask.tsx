import { useState } from "react"
import MAinput from "../Components/MAinput";
import MAbutton from "../Components/MAbutton";
import { Add, Get } from "../config/firebaseMethods";
import { useEffect } from "react";
import { Box, Paper, } from "@mui/material"; import AddIcon from '@mui/icons-material/Add';




export default function MAtask() {
    let [model, setModel] = useState<any>({});
    let [taskList, setTaskList] = useState<any>([]);
    let fillMOdel = (key: any, val: any) => {
        model[key] = val
        setModel({ ...model })
    }
    const getTasklist = () => {
        Get('tasks')
            .then((res) => {
                setTaskList([...res])
                console.log(res)
            }).catch((err) => {
                console.log(err)
            })
    }
    const  addTask = () => {
        Add("tasks", model)
            .then((res) => {
                setModel({...model})
                getTasklist()
                Get('tasks')
            }).catch((err) => {
                console.log(err)
            })
    }

    useEffect(()=>{getTasklist()},[])
    return (
        <>
            <Box>
                <Paper className="p-10
                 m-1 drop-shadow bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 items-center flex justify-center ">
                    <h1 className="text-3xl">TASK</h1>
                </Paper>
            </Box>
            <Box className="grid grid-cols-4 ">
                <Paper className="p-10 m-5 text-center drop-shadow bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                    <h3>Add To list</h3>
                    <MAinput label="Task" onchange={(e: any) => { fillMOdel("Task", e.target.value) }} type="text"/>
                    <MAinput label="Assinee" onchange={(e: any) => { fillMOdel("Assignee", e.target.value) }} type="text" />
                    <MAinput label="Discription" onchange={(e: any) => { fillMOdel("Description", e.target.value) }} type="text" />
                    <MAbutton Classname="bg-white text-dark mt-4" value="Add to list" endIcon={<AddIcon />} Onclick={addTask} />
                </Paper>
                <Paper className="p-10 m-5 col-span-3 drop-shadow bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ">
                    <>
                    {taskList.map((x:any)=>{
                       return(
                        <>
                               <div className="bg-gradient-to-r from-indigo-500 m-2 drop-shadow-xl flex">
                                <div>
                                   <h3 className="text-white">{x.Task}</h3>
                                   <h5 className="text-white">{x.Assignee}</h5>
                                   <p className="text-white">{x.Description}</p>
                                   {/* <p className="text-white">{x.id}</p> */}
                                   </div>
                               </div> 
                        </>
                       )
                    })}
                    </>
                </Paper>
            </Box>

        </>
    )
}
