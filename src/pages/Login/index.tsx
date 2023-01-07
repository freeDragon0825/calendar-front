import React from 'react';
import { Box, Button, Divider } from '@mui/material';
import {
  Google as GoogleIcon,
  LinkedIn as LinkedinIcon,
  Window as MicrosoftIcon,
} from '@mui/icons-material';

import "./styles.scss";
import SignInForm from 'components/SignInForm';

const Login = () => {
  return (
    <Box className='mainBkg'>
      <Box className='contentWrap'>
        <Box className='leftWrap'>
          <Box className='imgCont'>
            <img src="/assets/imgs/spiral.png" />
          </Box>
          <Box className='textHld'>
            <div style={{ fontSize: '16px', marginBottom: '2vh' }}>WELCOME TO THE MARKETPLACE</div>
            <div style={{ fontSize: '14px', lineHeight: '1.4' }}>
              Exceptionly provides hands-on tested remote software engineers unlike any other outsourcing company. Our
              product delivers talent directly for hiring without a lifetime markup over 400%.
            </div>
          </Box>
        </Box>
        <Box className='rightWrap'>
          <Box className='topHld'>
            <Box className='actionTitle'>
              <img src='/assets/imgs/logo.svg' />
              <div className='proText'>
                Sign in your to account
              </div>
            </Box>
            <Box className='verticalCenter'>
              <Box className='signInGroup'>
                <Button
                  variant='contained'
                  color='info'
                  fullWidth
                  sx={{ marginBottom: "10px" }}
                  startIcon={<GoogleIcon />}
                >
                  Sign In With Google
                </Button>
                <Button
                  variant='contained'
                  color='primary'
                  fullWidth
                  sx={{ marginBottom: "10px" }}
                  startIcon={<LinkedinIcon />}
                >
                  Sign In With Linkedin
                </Button>
                <Button
                  variant='contained'
                  color='warning'
                  fullWidth
                  sx={{ marginBottom: "10px" }}
                  startIcon={<MicrosoftIcon />}
                >
                  Sign In With Microsoft
                </Button>
                <Divider
                  orientation='horizontal'
                  sx={{ color: 'rgb(102, 102, 102)' }}
                >
                  or use business email
                </Divider>
              </Box>
              <Box>
                <SignInForm />
              </Box>
            </Box>
          </Box>
          <Box>
            <Box className='btHld'>
              <Box className='innerNewText'>
                <span>{"Don't have an account?"}</span>
                <span>
                  <div>
                    <span>CREATE ACCOUNT</span>
                  </div>
                </span>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Login;
