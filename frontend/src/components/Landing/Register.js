import React from 'react'
import { Grid,Paper, Avatar, TextField, Button } from '@material-ui/core'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';

export const Register = () => {
    const [errors, setErrors] = React.useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        var newErrors = {
            ["Username"]: true,
            ["Password"]: true
        }
        setErrors({...errors, ...newErrors});    
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
                <TextField error={errors.Username} label='Username' placeholder='Enter username' fullWidth required/>
                <TextField error={errors.Password} label='Password' placeholder='Enter password' type='password' fullWidth required/>
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Register</Button>            
            </form>
        </Paper>
    )
}