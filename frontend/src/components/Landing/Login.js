import React from 'react'
import { Grid,Paper, Avatar, TextField, Button } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

export const Login = () => {
    const [errors, setErrors] = React.useState({});

    const paperStyle={padding:20, width:280, margin:"0px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'25px 0'}

    const handleSubmit = (e) => {
        e.preventDefault();
        var newErrors = {
            ["Username"]: true,
            ["Password"]: true
        }
        setErrors({...errors, ...newErrors});    
    }

    return(
        <Paper elevation={10} style={paperStyle}>
            <Grid align='center'>
                    <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                <h2>Sign In</h2>
            </Grid>
            <form onSubmit={handleSubmit}>
                <TextField error={errors.Username} label='Username' placeholder='Enter username' fullWidth required/>
                <TextField error={errors.Password} label='Password' placeholder='Enter password' type='password' fullWidth required/>
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>            
            </form>
        </Paper>
    )
}