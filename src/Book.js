export default function Book({name, year, price, children}) {
  return name ? (
    <div>
      <h2>{(name) ? <span>{name}</span> : 'Default book'}</h2>
      <p>{year}</p>
      <p>{price}</p>
      <b>{children}</b>
    </div>
  ) : <h1>Ma'lumot topilmadi</h1>
}