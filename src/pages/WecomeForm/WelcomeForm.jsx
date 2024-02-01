import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function WelcomeForm(){
    return(
        <div>
            <Box sx={{
                m:4,
                textAlign:'center',
            }}>
                <Typography component="h1" sx={{fontSize:30}} >
                Welcome to Student Management System.
                </Typography>
                <img src="../../assets/react.svg"/>


            </Box>
        </div>
    )
}