const Saludo = ({ nombre }) => { //asi se crea un compoente, siempre se define con mayuscula al inicio
  return (
    <>
      <button onClick={() => console.log(nombre)}>Click</button>
    </>
  )
}

export default Saludo
