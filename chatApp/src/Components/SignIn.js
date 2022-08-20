import React from 'react'
import firebase from 'firebase'
import { auth } from '../firebase.js'
import { Button } from '@material-ui/core'

function SignIn() {
    function signInWithGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider)
    }
    return (
        <div style={{ display: 'flex', justifyContent: 'center', height: '100vh', alignItems: 'center', backgroundColor:'aqua', border:'5px solid green' }}>
            <Button style={{ padding: '30px', fontSize: '20px', borderRadius: '0', fontWeight: '600', border:'3px solid red', height: '55vh', width: '80vh'}} onClick={signInWithGoogle}>Sign In With Google</Button>
        </div>
    )
}

export default SignIn

