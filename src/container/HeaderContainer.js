import { connect } from "react-redux";
import Header from "./../component/Header";

const mapStateToProps = (state) => ({
  //mapStateToProps is used to retrieve data from redux datastore for use by/in component
  cartData: state.cartItems,
});

const mapDispatchToProps = (dispatch) => ({
  //mapDispatchToProps is used for storing data into redux datastore from component
  //disptch is a function of redux store. Only way to update the state by passing action object(data)
  //Dispatch is used to dispatch an action
  //addToCartHandler is a function that will be called from component on any event
  //Data will be sent to action
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
//functions can be named in any manner but order must match

// export default Home;

//Containers are used to send data from action to reducer
//Also used to connected redux with react
//mapStateToProps, mapDispatchToProps used for sending and getting data in redux
//Third parameter (Home) is the component
