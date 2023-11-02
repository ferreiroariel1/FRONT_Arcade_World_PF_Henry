

function Summary({videogames}) {
  return (
    <div>
      <h2>Successful Purchase</h2>
      <p>¡Thank you for your purchase!</p>
      
      <h3>Summary of purchase:</h3>
      <ul>
        {videogames.map((producto, index) => (
          <li key={index}>{producto.nombre} - ${producto.precio}</li>
        ))}
      </ul>
      
      <p>Total: ${videogames.reduce((total, producto) => total + producto.precio, 0)}</p>
    </div>
  )
}

export default Summary