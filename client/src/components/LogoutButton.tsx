import { useAuth0 } from "@auth0/auth0-react";
import React from 'react';

interface LogoutButtonProps {

}

export const LogoutButton: React.FC<LogoutButtonProps> = () => {
    const { logout } = useAuth0()

    return (
        <button className="logoutBtn" onClick={() => logout()}>
            Logout
        </button>

    );
}