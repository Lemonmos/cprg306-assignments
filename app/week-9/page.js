"use client";

import Link from "next/link";
// Import the useUserAuth hook
import { useUserAuth } from "./shopping-list/_utils/auth-context";

export default function Page() {
  // Use the useUserAuth hook to get the user object and the login and logout functions
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  // Sign in to Firebase with GitHub authentication
  const login = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error(error);
    }
  };

  // Sign out of Firebase
  const logout = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error(error);
    }
  };

  // Display some of the user's information
  return (
    <div>
      <h1>Week 9</h1>
      <div>
        {user ? (
          <div>
            <p>Welcome, {user.email}</p>
            <p>
              <button onClick={logout}>Sign Out</button>
            </p>

            <Link href="/week-9/shopping-list">
              Continue to your Shopping List
            </Link>
          </div>
        ) : (
          <button onClick={login}>Sign In</button>
        )}
      </div>
    </div>
  );
}
