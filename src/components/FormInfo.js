import React, {useState} from 'react';
import {useForm} from 'react-hook-form';

const FormInfo = () => {
    const [question, setQuestion] = useState('');
    const [name, setName] = useState('');
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
            Оставьте свои данные
        </h1>
        <div className="size ml-10">
            <div className=" d-flex">
                <div>
                    <div>Как к вам обращаться</div>
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

                <div className="ml-45">
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

            </div>
            <div>Что беспокоит</div>
                <input
                    className="forms height50 "
                    type="question"
                    value={question}
                    placeholder="Вопрос, который Вас интересует"
                    {...register('question',
                    {
                        required: "Нужно заполнить форму",
                        minLength: {
                            value: 2,
                            message: "Минимум 2 значения"
                        },
                        pattern: ( /^[A-Za-z1-9-{/ .,-}]+$/i),
                    })}
                    onChange={(e) => setQuestion(e.target.value)}
                />
                <div style={{height: 40}}>
                    {errors?.question && <p>{errors?.question?.message || 'Упс, кажется ошибка'}</p>}
                </div>

            <div className=" d-flex">
                <div className="mt-30">
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
        <input //onClick={() => handleClick(email, password)} 
        type="submit" value="Оставить вопрос" />
        </>
    );
};

export default FormInfo;