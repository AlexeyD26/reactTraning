import React from 'react';
import { MyInput } from '../components/ui/input/MyInput';
import { MyButton } from '../components/ui/button/MyButton';

const Login = () => {
  return (
    <div>
      <h1>Страница для логина</h1>
      <form>
        <MyInput type="text" placeholder='Введите логин'/>
        <MyInput type="password" placeholder='Введите пароль'/>
        <MyButton>Войти</MyButton>
      </form>
    </div>
  );
};

export default Login;