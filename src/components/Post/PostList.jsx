import { PostItem } from "./PostItem";

export const PostList = ({posts, title}) => {
    return (
        <div>
            <h1>{title}</h1>
            {posts.map((post) => (
                <PostItem post={post} key={post.id}/>
            ))}
        </div>
    )
}