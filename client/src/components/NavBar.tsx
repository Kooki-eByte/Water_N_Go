import { useAuth0 } from "@auth0/auth0-react";
import React from 'react';
import { Navbar } from 'react-bootstrap';
import { LoginButton } from "./LoginButton";
import { LogoutButton } from "./LogoutButton";

export const NavBar: React.FC = () => {
    const { user, isAuthenticated } = useAuth0()

    const navBar = !isAuthenticated ? (
            <Navbar style={{background:"lightblue"}}>
                <Navbar.Brand href="/">Water N Go</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    <LoginButton />
                </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>) : (
            <Navbar style={{background:"lightblue"}}>
                <Navbar.Brand href="/">Water N Go</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Signed in as: <a href="/member">{user.name}</a>
                    </Navbar.Text>
                    <button onClick={() => console.log("Add plant clicked")}>
                        Add Plant
                    </button>
                    <LogoutButton />
                </Navbar.Collapse>
            </Navbar>)

            return navBar;
    }
