import React from 'react'
import { auth, provider } from './firebaseconfig'
import "./Login.css"
import Button from '@material-ui/core/Button'
import { useStateValue } from './StateProvider'
import { actionTypes } from './Reducer'
const Login = () => {
    const [{user},dispatch]=useStateValue();

    const signIn=()=>{
        auth.signInWithPopup(provider).then(result=>
            dispatch({
                type:actionTypes.SET_USER,
                user:result.user,
            })
            ).catch(error=>(error.message))
    }
  return (
    <div className='login'>
        <div className="login_container">
        
        <div className="login_text">
            <h1>Sign In To App</h1> <hr />
        </div>
        <Button onClick={signIn}>Sign In With Google</Button>
        </div>
    </div>
  )
}

export default Login