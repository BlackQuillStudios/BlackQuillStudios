import { auth } from './firebase-init.js';
import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-auth.js";

document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    
    const googleSignInButton = document.getElementById('google-sign-in');
    console.log('Google sign-in button:', googleSignInButton);

    if (googleSignInButton) {
        googleSignInButton.addEventListener('click', () => {
            console.log('Google sign-in button clicked');
            const provider = new GoogleAuthProvider();
            signInWithPopup(auth, provider)
                .then((result) => {
                    console.log(`User signed in: ${result.user.email}`);
                    toggleAuthUI(true);
                })
                .catch((error) => {
                    console.error(`Error signing in: ${error.message}`);
                });
        });
    } else {
        console.error('Google sign-in button not found');
    }

    onAuthStateChanged(auth, (user) => {
        if (user) {
            console.log(`User is signed in: ${user.email}`);
            toggleAuthUI(true);
        } else {
            console.log('No user is signed in');
            toggleAuthUI(false);
        }
    });

    function toggleAuthUI(isSignedIn) {
        document.getElementById('google-sign-in').style.display = isSignedIn ? 'none' : 'block';
        document.getElementById('sign-out').style.display = isSignedIn ? 'block' : 'none';
    }
});
