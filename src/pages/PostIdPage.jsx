import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFetching } from '../hooks/useFetching';
import { postService } from '../API/PostService';
import { Loader } from '../components/ui/Loader/Loader';

const PostIdPage = () => {
    const params = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([])
    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await postService.getById(id) 
        setPost(response.data)
    })
    const [fetchComments, isComLoading, ComError] = useFetching(async (id) => {
        const response = await postService.getCommentsByPostId(id) 
        setComments(response.data)
    })

  
    useEffect(() => {
        fetchPostById(params.id)
        fetchComments(params.id)
    }, [])
  return (
    <div>
      <h1>Вы открыли страницу поста с id = {params.id}</h1>
      {isLoading
      ? 
      <Loader/>
      : 
      <div>{post.id}. {post.title}</div>
      }
      <h1>
        Комментарии
      </h1>
      {isComLoading
      ?
      <Loader/>
      :
        <div>
            {comments.map(comm => (
                <div style={{marginTop: 15}} key={comm.id}>
                    <h5>{comm.email}</h5>
                    <div>{comm.body}</div>
                </div>
           ))}
        </div>
      }
    </div>
  );
};

export default PostIdPage;