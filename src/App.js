import React from "react";

import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component.jsx";
import Header from "./components/header/header.component.jsx";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx";
import CheckoutPage from "./pages/checkout/checkout.component";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";

class App extends React.Component {
  // constructor(){
  //   super();
  //   this.state={
  //     currentUser:null,
  //   }vv
  // }

  unsubscribeFromAuth = null;

  componentDidMount() {
    console.log("Component Did Mount Called...");

    

    // this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
    //  this.setState({currentUser:user});
    //  createUserProfileDocument(user);
    //   if (userAuth) {
    //     const userRef = await createUserProfileDocument(userAuth);
    //     userRef.onSnapshot((snapshot) => {
    //       setCurrentUser(
    //         {
    //           id: snapshot.id,
    //           ...snapshot.data(),
    //         },
    //         () => {
    //           console.log(this.state);
    //         }
    //       );
    //       console.log(this.state);
    //     });
    //   }
    //   setCurrentUser(userAuth);

    // });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});



export default connect(mapStateToProps)(App);
