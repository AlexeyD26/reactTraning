import { useState, useEffect } from "react";
import { PostList } from "./components/Post/PostList";
import { PostForm } from "./components/Post/Postform";
import {PostFilter} from "./components/Post/PostFilter";
import { MyModal } from "./components/ui/MyModal/MyModal"
import { MyButton } from "./components/ui/button/MyButton";
import { usePosts } from "./hooks/usePosts";
import { postService } from "./API/PostService";
import { Loader } from "./components/ui/Loader/Loader";
import { useFetching } from "./hooks/useFetching";

export const Main = (props) => {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Javascript 1', body: 'Description'},
        {id: 2, title: 'Javascript 2', body: 'Description'},
        {id: 3, title: 'Javascript 3', body: 'Description'},
    ]);
    

    const [filter, setFilter] = useState({sort: '', query: ''});
    const [modal, setModal] = useState(false);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);


    const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
        const posts = await postService.getAll();
        setPosts(posts);
    })


    useEffect(() => {
        fetchPosts()
    },[]);


    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    };

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id ))
    };

 
    return (
        <div>
            <button onClick={fetchPosts}>GET POSTS</button>
            <MyButton onClick={() => setModal(true)} style={{marginTop: '30px'}} >Создать пользователя</MyButton>
            <MyModal visible={modal} setVisible={setModal}>
            <PostForm create={createPost}/>
            </MyModal>
            <hr style={{margin: '15px 0'}}/>
            <PostFilter
            filter={filter}
            setFilter={setFilter}
            />
            {postError && 
                <h1>Произошла ошибка</h1>
            }
            {isPostLoading
            ? <div style={{display: "flex", justifyContent: 'center', marginTop: '50px'}}><Loader/></div>
            : <PostList posts={sortedAndSearchedPosts} title={'Посты про Javascript'} remove={removePost} />
            }
        </div>
    )
}