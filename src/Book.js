const Book = ({ name, year, price, children }) => {
  return (
    <div>
      <h2>{(name) ? <span>{name}</span> : 'Default book'}</h2>
      <p>{year}</p>
      <p>{price}</p>
      <b>{children}</b>
    </div>
  )
}
export {Book}