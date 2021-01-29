import { useAuth0 } from "@auth0/auth0-react";
import React from 'react';

export const Profile: React.FC = () => {
    const { user, isAuthenticated } = useAuth0()
    
    const profile = isAuthenticated ? (
        <div>
            <img src={user.picture} alt={user.given_name}/>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
        </div>
    ) : (
        <div>
            <p>User is not logged in</p>
        </div>
    )

    return profile
}