import "./style.css"
import { message } from "antd";
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function Login({ setVisible }: any) {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");


    const onSubmit = () => {
      const data = {
        username: username,
        password: password,
      };
      console.log(data)
    };
      return (
        <>
          <div className="loginContainer">
            <div >

              <div style={{ position: "absolute", top: "-120px", right: "-50px", backgroundColor: "red", color: "white", cursor: "pointer", fontSize: "20px", padding: "10px", border: "red"  }} onClick={() => setVisible(false)}>X</div>
              <div className="login_title">Login</div>
            </div>
            <Box
              component="form"
              sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
              }}
              noValidate
              autoComplete="off"
            >
              <div className="input">

                <TextField onChange={(e) => setUsername(e.target.value)} id="filled-basic" label="Name" style={{ backgroundColor: "white", opacity: "0.5", color: "white" }} variant="filled" />
                <TextField type="password" onChange={(e) => setPassword(e.target.value)} id="standard-basic" label="Password" style={{ backgroundColor: "white", opacity: "0.5", color: "white" }} color="secondary" margin="normal" variant="standard" />
              </div>
            </Box>
            <div className="Login_button">
              <button className="prev" >Prev</button>
              <button className="next" onClick={onSubmit} >Next</button>
            </div>
          </div>
        </>
      )
    }

    export default Login;