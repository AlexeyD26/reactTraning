import style from './mymodal.module.css'

export const MyModal = ({children, visible, setVisible}) => {

    const rootClasses = [style.myModal]
    if(visible) {
        rootClasses.push(style.active)
    }


    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={style.myModalContent} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}