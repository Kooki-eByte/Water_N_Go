import { useAuth0 } from "@auth0/auth0-react";
import React from 'react';

export const Profile: React.FC = () => {
    const { user, isAuthenticated } = useAuth0()
    
    console.log(user);
    

    const profile = isAuthenticated ? (
        <div>
            <img className="profile-image" src={user.picture} alt={user.given_name}/>
            <h2>Water "N" Go expert: {user.name}</h2>
            <p>{user.email}</p>
        </div>
    ) : (
        <div>
            <p>User is not logged in</p>
        </div>
    )

    return profile
}