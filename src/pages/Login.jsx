
import React, {useState} from 'react'
import {useNavigate, Link} from 'react-router-dom';
import Forms from '../components/FormsAuth'
import {useDispatch} from 'react-redux';
import {useForm} from 'react-hook-form';
import {Button} from '@mui/material';
import {Grid} from '@mui/material'
import {Container} from '@mui/material'

//import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
//import {setUser} from '../store/slices/userSlice';

export default function Login(handleLogin/*тут пусто должно быть*/) {
    /*
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogin = (email, password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                console.log(user);
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                }));
                navigate('/', {replace: true})
            })  
    }*/
    return (
        <>
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
                style={{ minHeight: '100vh' }}
                >
            <h1>Вход в личный кабинет</h1>
            <Grid item xs={3}>
            <Forms
                title="Войти"
                handleClick={handleLogin} 
            />
            </Grid>  
            <p>
                Нет аккаунта? &nbsp; 
                <Button variant="outlined" 
                href="/registration"
                >Зарегестрируетесь</Button>
            </p>
            </Grid>
        </>
    )
}
