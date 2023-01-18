export default function PostList(props) {
  const { name, id, removePost } = props
  return (
    <div className="todo">
      <h3>{name}</h3>
      <button className="btn" onClick={() => removePost(id)}>Delete</button>
    </div>
  )
}