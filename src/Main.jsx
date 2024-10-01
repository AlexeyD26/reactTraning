import { MyButton } from "./components/ui/button/MyButton";
import { MyInput } from "./components/ui/input/MyInput";
import { PostList } from "./components/Post/PostList";
import { useState, useRef } from "react";

export const Main = (props) => {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Javascript 1', body: 'Description'},
        {id: 2, title: 'Javascript 2', body: 'Description'},
        {id: 3, title: 'Javascript 3', body: 'Description'},
    ]);

    const [title, setTitle] = useState('');
    const inputRef = useRef(); 
    const addNewPost = (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <form>
            <MyInput
            type='text'
            placeholder='Название поста'
            value={title}
            onChange={(e) => (setTitle(e.target.value))}
            />
            <MyInput
            type='text'
            placeholder='Описание поста'
            ref={inputRef}
            />
            <MyButton>Создать пост</MyButton>
            </form>
            <PostList posts={posts} title={'Посты про Javascript'}/>
        </div>
    )
}