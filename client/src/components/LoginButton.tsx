import { useAuth0 } from "@auth0/auth0-react";
import React from 'react';

interface LoginButtonProps {

}

export const LoginButton: React.FC<LoginButtonProps> = () => {
    const {loginWithRedirect} = useAuth0()

        return (
            <button className="loginBtn" onClick={() => {loginWithRedirect()}}>
                Log In
            </button>
        );
}