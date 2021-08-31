import {useRouteMatch, useHistory } from "react-router-dom";

const Navegar = (props) => {
    let { url } = useRouteMatch();

    const history = useHistory();

    const irAVistaX = (e, vista) => {
        history.push(`/vistas/vista_${vista}`)
    }

    return (
        <div>
            <button type="button" onClick={e => irAVistaX(e, 'uno')}>Vista 1</button>
            <button type="button" onClick={e => irAVistaX(e, 'dos')}>Vista 2</button>
        </div>
    )
}

export default Navegar;