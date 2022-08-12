import React from 'react';
import {useForm} from 'react-hook-form';
import AppContext from '../context';
import axios from 'axios';

const FormInfo = () => {

    const { name, setName, telephone, setTelephone, 
        email, setEmail, question, setQuestion
    } = React.useContext(AppContext);

    const onClickOrder = async () => {
        try {
            await axios.post('/api/issues' , {
                issues: question,
                customer: name,
                phone: telephone, 
                email: email
            });            
            setQuestion(""); setName(""); setTelephone(""); setEmail(undefined);
        } catch (error) {
            alert("Не получилось отправить вопрос, попробуйте еще раз");
        }
    }

    const { register, formState: {errors, isValid }} = useForm({mode: "onBlur"});

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
        <div className="ml-10 fontSize100proc mt-50">
            <b>Оставьте свои данные</b>
        </div>
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
                                message: "Минимум 11 цифр"
                            },
                            pattern: ( /^[\d\-{+ - }}]+$/i),
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
                        pattern: ( /^[А-Яа-яA-Za-z1-9-{/ .,-}]+$/i),
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
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
            </div>
        </div> 
        
        <button className="yellowButton mb-50 ml-10" disabled={!isValid} onClick={onClickOrder}>
            Оставить вопрос
        </button>
        </>
    );
};

export default FormInfo;