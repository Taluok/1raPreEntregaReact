import React from "react"
import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css';

const NavBar = () =>{
    const notificationCount = 5;
    return(
        <div className="navbar navbar-expand-lg bg-warning d-flex justify-content-around">
            <a className="navbar-brand" href="#">SneakerHub</a>
                <ul className="navbar-nav">
                    <li className="nav-item"><a href="#" className="nav-link">Inicio</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">Nuevos Sneakers</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">Otros Productos Jordan</a></li>
                </ul>   
            <div>
            <CartWidget notificationCount={notificationCount}/>
            </div>
        </div>
    );
};

export default NavBar;