import React, { useContext } from 'react'
import { Navbar } from 'react-bootstrap'
import { AuthContext } from '../context/auth'



export const NavBar: React.FC = () => {
    const {user, logout} = useContext(AuthContext)

    if(!user) {
        return (
            <Navbar style={{background:"lightblue"}}>
                <Navbar.Brand href="/">Water N Go</Navbar.Brand>
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
                <Navbar.Brand href="/">Water N Go</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Signed in as: <a href="/">{user}</a>
                    </Navbar.Text>
                    <button onClick={() => console.log("Add plant clicked")}>
                        Add Plant
                    </button>
                    <button onClick={logout}>
                        Logout
                    </button>
                </Navbar.Collapse>
            </Navbar>)
    }
}