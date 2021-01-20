import React from 'react'
import { Navbar } from 'react-bootstrap'

interface NavBarProps {
    user?: string
}

export const NavBar: React.FC<NavBarProps> = ({user}) => {
    if(!user) {
        return (
            <Navbar style={{background:"lightblue"}}>
                <Navbar.Brand href="#home">Water N Go</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    <a href="/member">Sign-Up/Login</a>
                </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>)
    } else {
        return (
            <Navbar style={{background:"lightblue"}}>
                <Navbar.Brand href="#home">Water N Go</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    Signed in as: <a href="/">{user}</a>
                </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>)
    }
}