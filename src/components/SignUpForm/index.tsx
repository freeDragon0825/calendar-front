import React, { useCallback } from 'react';
import { Box, Button } from '@mui/material';
import { FormContainer, TextFieldElement, PasswordElement } from 'react-hook-form-mui';

import './styles.scss';

interface IFormData {
  fName: string;
  lName: string;
  email: string;
  pwd: string;
}

export const SingUpForm = () => {
  const onSubmit = useCallback((data: IFormData) => {
    console.log(data);
  }, []);

  return (
    <Box className="signUpForm">
      <FormContainer onSuccess={onSubmit}>
        <div>
          <TextFieldElement
            required
            fullWidth
            className="inputField"
            label="First name"
            type="text"
            name="fName"
            variant="standard"
            margin="normal"
            InputLabelProps={{ shrink: true }}
          />
          <TextFieldElement
            required
            fullWidth
            className="inputField"
            label="Last name"
            type="text"
            name="lName"
            variant="standard"
            margin="normal"
            InputLabelProps={{ shrink: true }}
          />
          <TextFieldElement
            required
            fullWidth
            className="inputField"
            label="Email"
            type="email"
            name="email"
            variant="standard"
            margin="normal"
            InputLabelProps={{ shrink: true }}
          />
          <PasswordElement
            required
            fullWidth
            className="inputField"
            label="Password"
            type="password"
            name="pwd"
            variant="standard"
            margin="normal"
            validation={{ required: 'No password provided.' }}
            InputLabelProps={{ shrink: true }}
          />
        </div>
        <div className="signUpBtnGroup">
          <Button variant="contained" type="submit">
            Sign Up
          </Button>
        </div>
      </FormContainer>
    </Box>
  );
};
