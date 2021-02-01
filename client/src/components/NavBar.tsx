import { useAuth0 } from "@auth0/auth0-react";
import React from 'react';
import { Button, Navbar } from 'react-bootstrap';
import { LoginButton } from "./LoginButton";
import { LogoutButton } from "./LogoutButton";

export const NavBar: React.FC = () => {
    const { user, isAuthenticated } = useAuth0()

    const navBar = !isAuthenticated ? (
            <Navbar fixed='top' style={{background:"lightblue", width: '100%'}}>
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
                    <Navbar.Text style={{marginRight: "10px"}}>
                        Signed in as: <a href="/member">{user.name}</a>
                    </Navbar.Text>
                    <Button href="/addplant" variant="outline-success">Add Plant</Button>
                    <LogoutButton />
                </Navbar.Collapse>
            </Navbar>)

            return navBar;
    }
