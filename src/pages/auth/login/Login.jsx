import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link, useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Copyright from '../../../components/copyright'
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { authUser } from "../../../store/reducers/userReducer/actions";
import { connect, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useState,useCallback } from 'react';
import { useGoogleReCaptcha, GoogleReCaptcha } from 'react-google-recaptcha-v3';


const Login = ({ authUser }) => {
    const { executeRecaptcha } = useGoogleReCaptcha();
    const [token, setToken] = useState();
    
    //1071227799664-848r4gmtminclfnnoiikek893m974t90.apps.googleusercontent.com
    const clientId = "506973554183-v3obhau14cenfpua7jlfj8h9lk71hthf.apps.googleusercontent.com";
    const navigate = useNavigate();
    const { isAuth } = useSelector((state) => state.user);

    const handleReCaptchaVerify = useCallback(async () => {
        if (!executeRecaptcha) {
          console.log('Execute recaptcha not yet available');
          return;
        }
    
        const token = await executeRecaptcha('yourAction');
      }, [executeRecaptcha]);

    useEffect(() => {
        handleReCaptchaVerify();
        if (isAuth) {
            navigate('/');
        }
    }, [handleReCaptchaVerify]);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!executeRecaptcha) {
            console.log('Execute recaptcha not yet available');
            return;
          }

        const token = executeRecaptcha();
    };

    const auth = (credentialResponse) => {
        const token = credentialResponse.credential;

        authUser(token);
        navigate('/');
    };

    return (
        <>
            <Container component="main" maxWidth="xs">
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link to="/register">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                        <GoogleReCaptcha
                            onVerify={token => {
                            setToken(token);
                            }}
                        />
                    </Box>
                </Box>
                <GoogleOAuthProvider clientId={clientId}>
                    <GoogleLogin
                        onSuccess={(credentialResponse) => {
                            auth(credentialResponse);
                        }}
                        onError={() => {
                            console.log('Login Failed');
                        }}
                    />
                </GoogleOAuthProvider>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </>
    );
}

const mapDispatchToProps = {
    authUser
};

export default connect(null, mapDispatchToProps)(Login);