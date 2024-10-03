import style from './post.module.css';

export const PostItem = (props) => {
    return (
        <div className={style.post}>
            <div className={style.postContent}>
                <strong>
                    {props.number}. {props.post.title}
                </strong>
                <p>{props.post.body}</p>
            </div>
            <button className={style.btn} onClick={() => props.remove(props.post)}>Удалить</button>
        </div>
    )
}