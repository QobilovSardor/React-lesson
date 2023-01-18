import PostList from "./PostList";

export default function Posts(props) {
  const {removePost} = props
  return (
    <div>
      {props.kluch.map(post => (
        <PostList key={post.id} id={post.id} name={post.name} removePost={removePost} />
      ))}
    </div>
  )
}