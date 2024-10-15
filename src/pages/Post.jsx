import { useState, useEffect } from "react";
import { PostList } from "../components/Post/PostList";
import { PostForm } from "../components/Post/Postform";
import {PostFilter} from "../components/Post/PostFilter";
import { MyModal } from "../components/ui/MyModal/MyModal"
import { MyButton } from "../components/ui/button/MyButton";
import { usePosts } from "../hooks/usePosts";
import { postService } from "../API/PostService";
import { Loader } from "../components/ui/Loader/Loader";
import { useFetching } from "../hooks/useFetching";
import { getPageCount } from "../Utils/pages";
import { Pagination } from "../components/ui/pagination/Pagination";

export const Posts = (props) => {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Javascript 1', body: 'Description'},
        {id: 2, title: 'Javascript 2', body: 'Description'},
        {id: 3, title: 'Javascript 3', body: 'Description'},
    ]);
    

    const [filter, setFilter] = useState({sort: '', query: ''});
    const [modal, setModal] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);



    const [fetchPosts, isPostLoading, postError] = useFetching(async (limit, page) => {
        const response = await postService.getAll(limit, page);
        setPosts(response.data);
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, limit))
    })


    useEffect(() => {
        fetchPosts(limit, page)
    },[]);


    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    };

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id ))
    };

    const changePage = (page) => {
        setPage(page)
        fetchPosts(limit, page)
    }

 
    return (
        <div>
            <MyButton onClick={fetchPosts} style={{marginRight: '10px'}} >Загрузить посты</MyButton>
            <MyButton onClick={() => setModal(true)} style={{marginTop: '30px'}} >Создать пост</MyButton>
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
            <Pagination 
            page={page}
            changePage={changePage}
            totalPages={totalPages}
            />  
        </div>
    )
}