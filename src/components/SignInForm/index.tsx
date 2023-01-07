import React, { useCallback, useState } from 'react';
import { Box, Button, TextField } from '@mui/material';

import './styles.scss';

export default function SignInForm() {
  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<boolean>(false);
  const [emailHelper, setEmailHelper] = useState<string>("");
  const [pwd, setPassword] = useState<string>("");
  const [pwdError, setPwdError] = useState<boolean>(false);
  const [pwdHelper, setPwdHelper] = useState<string>("");

  const handleSubmit = useCallback((event: React.ChangeEvent<HTMLInputElement>,) => {
    event.preventDefault();
    if (email === "") {
      setEmailError(true);
      setEmailHelper("This field is required");
    }
    if (pwd === "") {
      setPwdError(true);
      setPwdHelper("No password provided.")
    }
  }, [])

  return (
    <Box component="form" className="signInForm" onSubmit={handleSubmit}>
      <div>
        <TextField
          className="inputField"
          label="Email"
          type="email"
          variant="standard"
          margin="normal"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            console.log(event.target.value);
          }}
          error={emailError}
          helperText={emailHelper}
          onInvalid={(event) => { event.preventDefault(); setEmailError(true); setEmailHelper("Please insert a valid email"); }}
          fullWidth
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          className="inputField"
          label="Password"
          type="pwd"
          variant="standard"
          margin="normal"
          value={pwd}
          onChange={(event) => setPassword(event.target.value)}
          error={pwdError}
          helperText={pwdHelper}
          fullWidth
          InputLabelProps={{ shrink: true }}
        />
      </div>
      <div className="signinBtnGroup">
        <Button variant="contained" type="submit">
          Sign In
        </Button>
        <div className='forgotPassword'>
          Forgot password?
        </div>
      </div>
    </Box>
  );
}
