import style from './cart.module.css';


function Cart() {
  return (
  <div className={style.content}>

    <div className={style.cartContent}>
      <div className={style.carts}>
        <h2>Your cart</h2>
      </div>
      <div className={style.product}>
       <h3>Total products</h3>
       <button>Buy</button>
      </div>
    </div>
  </div>
  )
}

export default Cart