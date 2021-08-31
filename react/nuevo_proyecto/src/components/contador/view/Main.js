import { BrowserRouter as Router, Switch, Route, useRouteMatch } from "react-router-dom";
import Navegar from "./Navegar";
import Vista1 from "./Vista1";
import Vista2 from "./Vista2";

const Main = (props) => {
    let { path } = useRouteMatch();

    return (
        <div>
            
            <Router>
                <Switch>
                    <Route exact path={path}>
                        <Navegar></Navegar>
                    </Route>
                    <Route path={`${path}/vista_uno`}>
                        <Vista1></Vista1>
                    </Route>
                    <Route path={`${path}/vista_dos`}>
                        <Vista2></Vista2>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default Main;