
import React, {useState} from 'react'
import {useForm} from 'react-hook-form'

export default function Forms({title, handleClick}) {
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState('');
    const {
        register,
        formState: {errors, }} = useForm({
        mode: "onBlur"});

    const condition_length = {
        required: "Вам необходимо заполнить все формы!",
            minLength: {
                value: 8,
                message: "Минимум 8 значений!"
            }, 
            maxLength:{
                value: 20,
                message: "Максимум 20 значений!"
            }
    }
    return (
        <div>
        <input
                type="email"
                value={email}
                placeholder="Введите ваш email"
                {...register("email",
                {required: true, pattern: /^\S+@\S+$/i}
                )}
                onChange={(e) => setEmail(e.target.value)}
            />
        
        <div style={{height: 40}}>
            {errors?.email && <p>{errors?.email?.message || 'Упс, кажется ошибка =('}</p>}
        </div>

        <input 
        type="password"
        value={password}
        placeholder="Пароль"
            {...register('password',
            condition_length,
            {
                pattern: ( /^[A-Za-z1-9-{+-/.,*^}]+$/i),
            })}
        onChange={(e) => setPassword(e.target.value)} 
        />
        <div style={{height: 40}}>
            {errors?.password && <p>{errors?.password?.message || 'Вы можете использовать буквы, цифры и символы {+ - / * , ^ . }'}</p>}
        </div>

        <input onClick={() => handleClick(email, password)} type="submit" value= {title} />
        </div>
    );
}

