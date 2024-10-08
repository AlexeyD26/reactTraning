import { PostItem } from "./PostItem";
import { TransitionGroup, CSSTransition } from "react-transition-group";

export const PostList = ({posts, title, remove}) => {

    if(!posts.length) {
        return (
            <h1 style={{textAlign: 'center'}}> 
                Посты не найдены!
            </h1>
        )  
    }

    return (
        <div>
            <h1 style={{textAlign: 'center'}}>{title}</h1>
            <TransitionGroup>
            {posts.map((post, index) => (
                 <CSSTransition
                 key={post.id}
                 timeout={500}
                 classNames="post"
               >
                <PostItem number={index + 1} post={post} remove={remove} />
                </CSSTransition>
            ))}
            </TransitionGroup>
           
        </div>
    )
}