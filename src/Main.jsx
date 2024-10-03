import { PostList } from "./components/Post/PostList";
import { useState } from "react";
import { PostForm } from "./components/Post/Postform";
import { MySelect } from "./components/ui/select/MySelect";

export const Main = (props) => {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Javascript 1', body: 'Description'},
        {id: 2, title: 'Javascript 2', body: 'Description'},
        {id: 3, title: 'Javascript 3', body: 'Description'},
    ]);

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id ))
    }


    return (
        <div>
            <PostForm create={createPost}/>
            <hr style={{margin: '15px 0'}}/>
            <div>
                <MySelect defaultValue={'Сортировка по'}/>
            </div>
            {posts.length !== 0 
            ? 
            <PostList posts={posts} title={'Посты про Javascript'} remove={removePost} /> 
            : 
            <h1 style={{fontSize: '40px'}}>Посты не найдены!</h1>}
        </div>
    )
}