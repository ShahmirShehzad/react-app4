function Home(props) {
  console.log("Home ", props.cartData);
  return (
    <>
      <h1>Home component</h1>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img src="https://www.fdfproject.com/wp-content/uploads/2018/12/iphone-png.png"></img>
        </div>
        <div className="text-wrapper item">
          <span>Iphone</span>
          <span>Price : $1000.00</span>
        </div>
        <div className="btn-wrapper item">
          <button
            onClick={() =>
              props.addToCartHandler({ price: 1000, name: "Iphone 11" })
            }
          >
            Add To Cart
          </button>
          <button
            className="remove-cart-btn"
            onClick={() => props.removeToCartHandler()}
          >
            Remove from cart
          </button>
        </div>
      </div>
    </>
  );
}
export default Home;
