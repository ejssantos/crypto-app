import "./Menu.css";
import React from "react";
import { Link } from "react-router-dom";

const Menu = props => (
    <aside className="Menu">
        <nav>
            <ul>
                <li>
                    <Link to="/">Início</Link>
                </li>
                 <li>
                    <Link to="/crypto01">#Exemplo 01</Link>
                </li>
                <li>
                    <Link to="/crypto02">#Exemplo 02</Link>
                </li>
 {/*               <li>
                    <Link to="/param">Criptografia #Exemplo02</Link>
                </li>
                <li>
                    <Link to="/NotFound">Não Existe</Link>
                </li> */}
            </ul>
        </nav>
    </aside>
);

export default Menu;