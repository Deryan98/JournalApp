import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const signIngWithGoogle = async () => {
    try {
        const result = await signInWithPopup(FirebaseAuth, googleProvider)
        // const credentials = GoogleAuthProvider.credentialFromResult( result );
        const {displayName, email, photoURL, uid} = result.user;
        return {
            ok: true,
            //User info
            displayName, email, photoURL, uid
        }
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        return {
            ok: false,
            errorMessage,
        }
    }
}

export const registerUserWithEmailPassword = async ({email, password, displayName}) => {
    try {
        //crea el usuario y lo autentica
        const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
        console.log(resp)
        const { uid, photoURL} = resp.user

        //TODO: Actualiza el display name en firebase
        await updateProfile(FirebaseAuth.currentUser, { displayName })

        return {
            ok: true,
            uid, photoURL, email, displayName
        }
    } catch (error) {
        return { ok: false, errorMessage: error.message}
    }
}