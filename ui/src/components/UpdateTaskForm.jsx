/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Button, Dialog, TextField } from "@mui/material";
import { useState } from "react";
import CheckIcon from '@mui/icons-material/Check';
import axios from "axios";
import { API_URL } from "../utils";

const UpdateTaskForm = ({fetchTasks ,isDialogOpen, setIsDialogeOpen, task}) => {
  const { id, completed } = task;
  const [taskName, setTaskName] = useState("");

  const handleUpdateTaskComplete = async () => {
    try {
      await axios.put(API_URL, {
        id, 
        name: taskName, 
        completed
      })
      await fetchTasks();

      setTaskName("");
    } catch (err) {
    console.log('err :', err);
    }
  }
  return (
    <Dialog open={isDialogOpen}>
      <div className="dialog">
        <TextField 
          size="small" 
          label="Task" 
          variant="outlined"
          value={taskName} 
          onChange={(e) => setTaskName(e.target.value)} />
        <Button 
          variant="contained"
          onClick={async () => {
            await handleUpdateTaskComplete();
            setIsDialogeOpen(false);
            }}
        >
            <CheckIcon />
        </Button>
      </div>
    </Dialog>
  )
}

export default UpdateTaskForm
