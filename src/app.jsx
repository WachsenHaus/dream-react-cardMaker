import "./App.css";
import React from "react";
import Login from "./components/login/login";

function App({ authService }) {
  return (
    <>
      <Login authService={authService}></Login>
    </>
    //createPortal은 모달으 사용할때 사용한다
  );
}

export default App;

//body하단에붙이것
// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="/__/firebase/8.2.1/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="/__/firebase/8.2.1/firebase-analytics.js"></script>

// <!-- Initialize Firebase -->
// <script src="/__/firebase/init.js"></script>
