import React, { useEffect, useState } from "react";
import axios from "axios";
import { Grid,Paper, Avatar, TextField, Button } from '@material-ui/core'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';

export const Register = () => {
    const [UserName, setUserName] = useState("");
    const [Password, setPassword] = useState("");
    const [errors, setErrors] = React.useState({});

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }
    const handleUserNameChange = (e) => {
        setUserName(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            axios.post("http://localhost:8000/user/", {UserName, Password})
              .then((response) => {
                  localStorage.setItem(
                      "user",
                      JSON.stringify({UserName, Password})
                  );
              });            
        } catch (error) {
            var newErrors = {
                ["Username"]: true,
                ["Password"]: true
            }
            setErrors({...errors, ...newErrors});                
        }
    }

    const paperStyle={padding :20,width:280, margin:"0px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'25px 0'}
    return(
        <Paper elevation={10} style={paperStyle}>
            <Grid align='center'>
                    <Avatar style={avatarStyle}><AddCircleOutlineOutlinedIcon /></Avatar>
                <h2>Register</h2>
            </Grid>
            <form onSubmit={handleSubmit}>
                <TextField error={errors.Username} name="Username" value={UserName} onChange={handleUserNameChange} label='Username' placeholder='Enter username' fullWidth required/>
                <TextField error={errors.Password} name="Password" value={Password} onChange={handlePasswordChange} label='Password' placeholder='Enter password' type='password' fullWidth required/>
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Register</Button>            
            </form>
        </Paper>
    )
}