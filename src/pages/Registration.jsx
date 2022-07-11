
import React, {useState} from 'react'
import {useNavigate, Link} from 'react-router-dom';
import Forms from '../components/Forms'
import {useDispatch} from 'react-redux';
import {useForm} from 'react-hook-form';
import {Button} from '@mui/material';
import {Grid} from '@mui/material'

//import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
//import {setUser} from '../store/slices/userSlice';

export default function Registration(handleRegister/*тут пусто должно быть*/) {
    /*
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const alert = useContext(AlertContext)
    const handleRegister = (email, password) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                console.log(user);
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                }))
                navigate('/', {replace: true});
            })
            .catch(alert.show("This email already exists"))
    }*/
    return (
            
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
                style={{ minHeight: '100vh' }}>
            <h1>Создание личного кабинета</h1>
            <Grid item xs={3}>
            <Forms
                title="Продолжить"
                handleClick={handleRegister} 
            />
            </Grid>  
            <p>
                Есть аккаунт? &nbsp; 
                <Button variant="outlined" 
                href="/login"
                //color="error"
                >Перейти на вход</Button>
            </p>
            </Grid>
    )
}

