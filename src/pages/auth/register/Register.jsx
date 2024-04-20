import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link, useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Alert, FormLabel } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Copyright from '../../../components/copyright'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Register = () => {
    
    const validateYupSchema = Yup.object({
        firstName: Yup.string()
            .required("Обов'язкове поле")
            .max(15, "Ім'я повинне містити до 16 символів"),
        lastName: Yup.string()
            .required("Обов'язкове поле")
            .max(15, "Прізвище повинне містити до 16 символів"),
        email: Yup.string()
            .email("Некоректний емайл")
            .required("Обов'язкове поле"),
        password: Yup.string()
            .min(8, "Повинно бути 8 і більше символів")
            .required("Обов'язкове поле")
    });

    const navigate = useNavigate();
    const { isAuth } = useSelector((state) => state.user);

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        },
        validationSchema: validateYupSchema,
        onSubmit: values => {
            console.log(values);
        }
    });

    useEffect(() => {
        if (isAuth) {
            navigate('/');
        }
    }, []);

    return (
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
                    Sign up
                </Typography>
                <Box component="form" noValidate onSubmit={formik.handleSubmit} sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="given-name"
                                name="firstName"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                autoFocus
                                onChange={formik.handleChange}
                                value={formik.values.firstName}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.firstName && formik.errors.firstName ?
                                <Box sx={{ px: 1 }}>
                                    <FormLabel fontSize="inherit" sx={{ fontSize: "12px", color: "red" }}>
                                        {formik.errors.firstName}
                                    </FormLabel>
                                </Box>
                                : null}
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                autoComplete="family-name"
                                onChange={formik.handleChange}
                                value={formik.values.lastName}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.lastName && formik.errors.lastName ?
                                <Box sx={{ px: 1 }}>
                                    <FormLabel fontSize="inherit" sx={{ fontSize: "12px", color: "red" }}>
                                        {formik.errors.lastName}
                                    </FormLabel>
                                </Box>
                                : null}
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                onChange={formik.handleChange}
                                value={formik.values.email}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.email && formik.errors.email ?
                                <Box sx={{ px: 1 }}>
                                    <FormLabel fontSize="inherit" sx={{ fontSize: "12px", color: "red" }}>
                                        {formik.errors.email}
                                    </FormLabel>
                                </Box>
                                : null}
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="new-password"
                                onChange={formik.handleChange}
                                value={formik.values.password}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.password && formik.errors.password ?
                                <Box sx={{ px: 1 }}>
                                    <FormLabel fontSize="inherit" sx={{ fontSize: "12px", color: "red"}}>
                                        {formik.errors.password}
                                    </FormLabel>
                                </Box>
                                : null}
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox value="allowExtraEmails" color="primary" />}
                                label="I want to receive inspiration, marketing promotions and updates via email."
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign Up
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link to="/login">
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <Copyright sx={{ mt: 5 }} />
        </Container>
    );
}

export default Register;