import style from './mymodal.module.css'

export const MyModal = ({children}) => {
    return (
        <div className={[style.myModal, style.active].join(' ')}>
            <div className={style.myModalContent}>
                {children}
            </div>
        </div>
    )
}