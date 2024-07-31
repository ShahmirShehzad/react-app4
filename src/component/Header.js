function Header(props) {
  console.log("Header ", props.cartData);
  return (
    <>
      <div>
        <div className="add-to-cart">
          <span className="cartCount">{props.cartData.length}</span>
          <img src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg"></img>
        </div>
      </div>
    </>
  );
}
export default Header;
