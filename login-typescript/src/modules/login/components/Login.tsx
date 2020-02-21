import React, { FC, ReactElement } from "react";
import { 
    Backdrop,
    Button,
    Card,
    CardContent,
    CardMedia, CircularProgress,
    FormControl,
    Grid,
    InputAdornment,
    Typography,
    TextField
 } from "@material-ui/core";
 import { AccountCircle, Lock } from "@material-ui/icons";
 import { FormikProps } from "formik";
 import FullWidth from "../../../layouts/pages/Fullwidth";
 import LoginFormValidator from "../models/LoginFormValidation";
 import { login } from "../services/LoginService";
 import { LoginResponse, LoginFormDto } from "../models";
 import "../styles/login.css";

 const onSubmit = async (values, { setSubmitting }) => {
     setTimeout(() => {
         alert(JSON.stringify('Welcome user',values, 2));
         setSubmitting(false);
    //      history.push('/home');
     }, 1000);
     

     const response: LoginResponse = await login(values as LoginFormDto);
     if (response.data.accountId) {
         setSubmitting(false);
         alert(`Welcome user ${response.data.accountId}, your account is ${response.data.accountStatus}`);
     }
 };

     const Login: FC = (): ReactElement => {
     const {values, errors, isValid, dirty, touched, isSubmitting, handleBlur, handleChange, handleSubmit }: FormikProps<LoginFormDto> = LoginFormValidator(onSubmit);

     const isError = (field: string): boolean => {
         return (errors[field] && touched[field]);  
     };

     const getError = (field: string): string => {
         return (errors[field] && touched[field]) && errors[field];
     };

     return (
         <FullWidth className="gradient-background">
             <Grid container justify="center"  alignItems="center" className="grid">
                 <Card raised={true} elevation={3} className="card">
                     <Backdrop open={isSubmitting} timeout={0} className="backdrop contextual">
                         <CircularProgress color="secondary"/>
                     </Backdrop>
                     <CardMedia className="media" component="img" image={`${process.env.PUBLIC_URL}/enigmacamp.jpeg`} />
                     <CardContent>
                         <Typography variant="h6" component="h1" align="center" className="form-title">Trainee Portal</Typography>
                         <form onSubmit={handleSubmit}>
                             <FormControl className="form-control" fullWidth>
                                 <TextField id="username" name="username" placeholder="Username" variant="outlined" size="small"
                                 value={values.username}
                                 onBlur={handleBlur}
                                 onChange={handleChange}
                                 error={isError('username')}
                                 helperText={getError('username')}
                                 InputProps={{
                                     startAdornment: (
                                         <InputAdornment position="start">
                                             <AccountCircle />
                                         </InputAdornment>
                                     )
                                 }}/>
                             </FormControl>
                             <FormControl className="form-control" fullWidth>
                                 <TextField id="password" name="password" placeholder="Password" variant="outlined" size="small"
                                 value={values.password}
                                 onBlur={handleBlur}
                                 onChange={handleChange}
                                 error={isError('password')}
                                 helperText={getError('password')}
                                 InputProps={{
                                    type: 'password',
                                     startAdornment: (
                                         <InputAdornment position="start">
                                             <Lock />
                                         </InputAdornment>
                                     )
                                 }}/>
                             </FormControl>
                             <FormControl fullWidth>
                                <Button variant="contained" color="primary" type="submit" size="large" disabled={!dirty || !isValid || isSubmitting} fullWidth>
                                    <Typography variant="subtitle2" component="strong">Login</Typography>
                                </Button>
                            </FormControl>
                         </form>
                     </CardContent>
                 </Card>
             </Grid>
         </FullWidth>
     );
 };

 export default Login;