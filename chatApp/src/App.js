import { useState } from 'react';
import { Route,Routes } from 'react-router-dom';
import './App.css';
import Chat from './components/Chat';
import SignIn from './components/SignIn';
//import Login from './Components/Login';
//import { useStateValue } from './Components/StateProvider';
import { auth } from './firebase.js'
import { useAuthState } from 'react-firebase-hooks/auth'

function App() {
  // const [{user},dispatch]=useStateValue();

  // return (
  //   <div className="App">
  //     {!user?(
  //       <Login/>
  //     ):(
  //       <div className='app_body'>
  //         <Routes>
          
  //         <Route path="/rooms/:roomId" element={<Chat/>}>
          
  //         </Route>
  //         </Routes>
  //        </div>
  //     )}
  //   </div>
  //   )

  function App() {
    const [user] = useAuthState(auth)
    return (
      <>
        {user ? <Chat /> : <SignIn />}
      </>
    );
  }
      
    
}

export default App;

// const firebaseConfig = {
//   apiKey: "AIzaSyDu9HuUzJ4CMiVGrgeJi7otzJwHTxuVg1U",
//   authDomain: "firechat-98288.firebaseapp.com",
//   projectId: "firechat-98288",
//   storageBucket: "firechat-98288.appspot.com",
//   messagingSenderId: "727598954685",
//   appId: "1:727598954685:web:d58641c40b4e347d4edfd4",
//   measurementId: "G-SHEG3WBREG"
// };