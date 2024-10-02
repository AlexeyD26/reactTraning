import { MyButton } from "./components/ui/button/MyButton";
import { MyInput } from "./components/ui/input/MyInput";
import { PostList } from "./components/Post/PostList";
import { useState } from "react";

export const Main = (props) => {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Javascript 1', body: 'Description'},
        {id: 2, title: 'Javascript 2', body: 'Description'},
        {id: 3, title: 'Javascript 3', body: 'Description'},
    ]);

    const [post, setPost] = useState({title: '', body: ''});


    const addNewPost = (e) => {
        e.preventDefault();
        setPosts([...posts, {...post, id: Date.now()}])
        setPost({title: '', body: ''})
    }

    return (
        <div>
            <form>
            <MyInput
            type='text'
            placeholder='Название поста'
            value={post.title}
            onChange={(e) => (setPost({...post, title: e.target.value}))}
            />
            <MyInput
            type='text'
            placeholder='Описание поста'
            value={post.body}
            onChange={(e) => (setPost({...post, body: e.target.value}))}
            />
            <MyButton onClick={addNewPost} >Создать пост</MyButton>
            </form>
            <PostList posts={posts} title={'Посты про Javascript'}/>
        </div>
    )
}