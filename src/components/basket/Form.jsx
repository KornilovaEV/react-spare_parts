import React, {useState} from 'react';
import {useForm} from 'react-hook-form';

const Form = () => {
    const [addres, setAddres] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [telephone, setTelephone] = useState('');
    const [email, setEmail] = useState(''); 

    const {
        register,
        formState: {errors, }} = useForm({
        mode: "onBlur"});

        const condition_length = {
            required: "Нужно заполнить форму",
            minLength: {
                value: 2,
                message: "Минимум 2 значения"
            }, 
            maxLength:{
                value: 20,
                message: "Максимум 20 значений!"
            }
        }

    return (
        <>
        <h1 className="ml-10">
            Ваши данные
        </h1>

        <div className="size ml-10">
            <div className=" d-flex">
                <div>
                    <div>Имя</div>
                    <input
                        className="forms"
                        type="name"
                        value={name}
                        {...register('name',
                        condition_length,
                        {
                            pattern: ( /^[A-Za-z}]+$/i),
                        })}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <div style={{height: 40}}>
                        {errors?.name && <p>{errors?.name?.message || 'Упс, кажется ошибка'}</p>}
                    </div>
                </div>

                <div className="ml-45 ">
                    <div>Фамилия</div>
                    <input
                        className="forms"
                        type="surname"
                        value={surname}
                        {...register('surname',
                        condition_length,
                        {
                            pattern: ( /^[A-Za-z}]+$/i),
                        })}
                        onChange={(e) => setSurname(e.target.value)}
                    />
                    <div style={{height: 40}}>
                        {errors?.surname && <p>{errors?.surname?.message || 'Упс, кажется ошибка'}</p>}
                    </div>
                </div>
            </div>

            <div>Адрес</div>
                <input
                    className="forms"
                    type="addres"
                    value={addres}
                    placeholder="г.Москва ул.Московская д.1 кв.1"
                    {...register('addres',
                    {
                        required: "Нужно заполнить форму",
                        minLength: {
                            value: 2,
                            message: "Минимум 2 значения"
                        },
                        pattern: ( /^[A-Za-z1-9-{/ .,-}]+$/i),
                    })}
                    onChange={(e) => setAddres(e.target.value)}
                />
                <div style={{height: 40}}>
                    {errors?.addres && <p>{errors?.addres?.message || 'Упс, кажется ошибка'}</p>}
                </div>

            <div className=" d-flex">
                <div>
                <div>Контактный телефон</div>
                <input
                    className="forms"
                    type="telephone"
                    value={telephone}
                    placeholder="+7-..."
                    {...register('telephone',
                        {
                            required: "Нужно заполнить форму",
                            minLength: {
                                value: 11,
                                message: "Минимум 11 значения"
                            },
                            pattern: ( /^[1-9-{+ - }}]+$/i),
                        })}
                    onChange={(e) => setTelephone(e.target.value)}
                />
                <div style={{height: 40}}>
                    {errors?.telephone && <p>{errors?.telephone?.message || 'Что-то тут не так'}</p>}
                </div>
                </div>

                <div className="mt-30 ml-45">
                    <input
                        className="forms"
                        type="email"
                        value={email}
                        placeholder="Email - необязательно"
                        {...register("email",
                        {required: true, pattern: /^\S+@\S+$/i}
                        )}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <div style={{height: 40}}>
                        {errors?.email && <p>{errors?.email?.message}</p>}
                    </div> 
                </div>
            </div>
        </div> 
        </>
    );
};

export default Form;