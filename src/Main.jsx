import { useState, useMemo } from "react";
import { PostList } from "./components/Post/PostList";
import { PostForm } from "./components/Post/Postform";
import {PostFilter} from "./components/Post/PostFilter";
import { MyModal } from "./components/ui/MyModal/MyModal"
import { MyButton } from "./components/ui/button/MyButton";

export const Main = (props) => {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Javascript 1', body: 'Description'},
        {id: 2, title: 'Javascript 2', body: 'Description'},
        {id: 3, title: 'Javascript 3', body: 'Description'},
    ]);
    

    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false)


    const sortedPosts = useMemo(() => {
        if(filter.sort) {
            return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
        }

        return posts;
    },[filter.sort, posts])

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query))
    },[filter.query, sortedPosts])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id ))
    }

 
    return (
        <div>
            <MyButton onClick={() => setModal(true)} style={{marginTop: '30px'}} >Создать пользователя</MyButton>
            <MyModal visible={modal} setVisible={setModal}>
            <PostForm create={createPost}/>
            </MyModal>
            <hr style={{margin: '15px 0'}}/>
            <PostFilter
            filter={filter}
            setFilter={setFilter}
            />
            <PostList posts={sortedAndSearchedPosts} title={'Посты про Javascript'} remove={removePost} /> 
        </div>
    )
}