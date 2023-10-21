import { useState } from "react"
import { FBadd, FBget } from "../config/firebaseMethods";
import { useEffect } from "react";
import { Box, Button, Paper, TextField, } from "@mui/material"; 
import AddIcon from '@mui/icons-material/Add';

export default function MAtask() {
    let [task, setTask] = useState<any>({});
    let [taskList, setTaskList] = useState<any>([]);

    let fillTask = (key: any, val: any) => {
        task[key] = val
        setTask({ ...task })
    }
    const getTasklist = () => {
        FBget('tasks')
            .then((res) => {
                setTaskList([...res])
            }).catch((err) => {
                console.log(err)
            })
        }
        const  addTasks = () => {
            FBadd("tasks", task)
                .then((res) => {
                    getTasklist()
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
                    <TextField label="Task" onChange={(e: any) => { fillTask("Task", e.target.value) }} type="text"/>
                    <TextField label="Assinee" onChange={(e: any) => { fillTask("Assignee", e.target.value) }} type="text" />
                    <TextField label="Discription" onChange={(e: any) => { fillTask("Description", e.target.value) }} type="text" />
                    <Button className="bg-white text-dark mt-4" value="Add to list" endIcon={<AddIcon />} onClick={addTasks} />
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
