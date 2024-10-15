import { MyButton } from '../ui/button/MyButton';
import style from './post.module.css';
import { useNavigate } from 'react-router-dom';

export const PostItem = (props) => {

    const navigate = useNavigate();

    return (
        <div className={style.post}>
            <div className={style.postContent}>
                <strong>
                    {props.post.id}. {props.post.title}
                </strong>
                <p>{props.post.body}</p>
            </div>
            <div className={style.postBtn}>
                <MyButton className={style.btn} onClick={() => navigate(`/posts/${props.post.id}`)}>Открыть</MyButton>
                <MyButton className={style.btn} onClick={() => props.remove(props.post)}>Удалить</MyButton>
            </div>
        </div>
    )
}
