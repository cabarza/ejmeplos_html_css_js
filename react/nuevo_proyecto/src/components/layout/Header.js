import { useContext } from "react"
import { Link } from "react-router-dom";
import UserContext from "../../context/context"

const Header = (props) => {
    const context = useContext(UserContext);

    return (
        <div style={{textAlign: 'center'}}>
            <h1>{context.usuario?.nombre} {context.usuario?.apellido} {context.usuario?.email} {context.data?.fail}</h1>
            <Link to="/">Timer</Link>&nbsp;&nbsp; 
            <Link to="/swapi">Swapi</Link>&nbsp;&nbsp; 
            <Link to="/vistas/">Vistas</Link>&nbsp;&nbsp;
            <Link to="/formulario">Formulario</Link>&nbsp;&nbsp;
            <Link to="/formulario2/cesar">Formulario César</Link>
        </div>
    )
}

export default Header;