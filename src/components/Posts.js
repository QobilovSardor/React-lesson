import PostList from "./PostList"
export default function Post(props) {
  return (
    <div>
      {props.kluch.map((post, idx) => (
        <PostList key={idx} name={post.name} />
      ))}
    </div>
  )
}