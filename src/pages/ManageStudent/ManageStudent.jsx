import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import './ManageStudent.css'
import DeleteIcon from '@mui/icons-material/Delete';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";



export default function ManageStudent(){
    return(
        <div>

            <Box sx={{
                mt:5,
                justifyContent:'center',
                textAlign:'center',

            }}>
           <Typography component="h1" variant="h5">Student Management</Typography>



            <TextField sx={{m:5}} id="outlined-basic" label="Name" variant="outlined"/>
            <TextField sx={{m:5}} id="outlined-basic" label="Age" variant="outlined" />
            <TextField sx={{m:5}} id="outlined-basic" label="Address" variant="outlined" />
            <TextField sx={{m:5}} id="outlined-basic" label="Contact" variant="outlined" />

            <br/>

            <Button sx={{ margin:2}} variant="contained">Add</Button>
            <Button sx={{ margin:2}} variant="contained">Upadate</Button>
            <Button sx={{ margin:2}} variant="outlined" startIcon={<DeleteIcon />}>
                Delete
            </Button>
            <Button sx={{ margin:2}} variant="contained">Get All</Button>
            <Button sx={{ margin:2}} variant="contained">Search</Button>

            </Box>





        </div>
    )
}