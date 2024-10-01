import { Children } from 'react';
import style from './MyButton.module.css';

export const MyButton = ({children, ...props}) => {
    return (
        <button className={style.myBtn} {...props}>
            {children}
        </button>
    )
}