import React from 'react';
import {useMatchMedia} from '../../hook/use-match-media';
import AppContext from '../../context';

const Form = ({register, errors,}) => {

    
    const { addres, setAddres, name, setName, telephone, setTelephone, 
        email, setEmail, 
    } = React.useContext(AppContext)

    const {isMobile} = useMatchMedia();
    

        const condition_length = {
            required: "Заполните форму",
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
            <div className="d-flex">
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
                    <div style={{height: 50}}>
                        {errors?.name && <p>{errors?.name?.message || 'Упс, кажется ошибка'}</p>}
                    </div>
                </div>

                <div className="ml-45 ">
                <div>Контактный телефон</div>
                <input
                    className="forms"
                    type="telephone"
                    value={telephone}
                    placeholder="+7-..."
                    {...register('telephone',
                        {
                            required: "Заполните форму",
                            minLength: {
                                value: 11,
                                message: "Минимум 11 значения"
                            },
                            pattern: ( /^[1-9-{+ - }}]+$/i),
                        })}
                    onChange={(e) => setTelephone(e.target.value)}
                />
                <div style={{height: 50}}>
                    {errors?.telephone && <p>{errors?.telephone?.message || 'Что-то тут не так'}</p>}
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
                        required: "Заполните форму",
                        minLength: {
                            value: 2,
                            message: "Минимум 2 значения"
                        },
                        pattern: ( /^[A-Za-z1-9-{/ .,-}]+$/i),
                    })}
                    onChange={(e) => setAddres(e.target.value)}
                />
                <div style={{height: 50}}>
                    {errors?.addres && <p>{errors?.addres?.message || 'Упс, кажется ошибка'}</p>}
                </div>

                <div className={isMobile? "mt-50": "mt-25"}>
                    <input
                        className="forms"
                        type="email"
                        value={email}
                        placeholder="Email - необязательно"
                        onChange={(e) => setEmail(e.target.value)}
                    /> 
                </div>
        </div> 
        </>
    );
    
};

export default Form;