import React, { useEffect, useState } from "react";
import axios from "axios";
import { Grid,Paper, Avatar, TextField, Button } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

export const Login = () => {
    const [UserName, setUserName] = useState("");
    const [Password, setPassword] = useState("");
    const [errors, setErrors] = React.useState({});

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }
    const handleUserNameChange = (e) => {
        setUserName(e.target.value);
    }

    const paperStyle={padding:20, width:280, margin:"0px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'25px 0'}

    const handleSubmit = (e) => {
        var newErrors = {
            Username: true,
            Password: true
        }
        try {
            axios.get(`http://localhost:8000/user/?username=${UserName}&password=${Password}`)
            .then((response) => {
                if (response.data === null) {
                    localStorage.setItem(
                        "user",
                        JSON.stringify({UserName, Password})
                    );
                }
                else{
                    setErrors({...errors, ...newErrors});    
                }
            })            
        } catch (error) {
            setErrors({...errors, ...newErrors});    
            
        }
    }

    return(
        <Paper elevation={10} style={paperStyle}>
            <Grid align='center'>
                    <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                <h2>Sign In</h2>
            </Grid>
            <form onSubmit={handleSubmit}>
                <TextField error={errors.Username} name="Username" value={UserName} onChange={handleUserNameChange}  label='Username' placeholder='Enter username' fullWidth required/>
                <TextField error={errors.Password} name="Password" value={Password} onChange={handlePasswordChange} label='Password' placeholder='Enter password' type='password' fullWidth required/>
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>            
            </form>
        </Paper>
    )
}