import { useContext } from "react";
import UserContext from "../../context/UserContext";

const Header = () => {

    const context = useContext(UserContext);

    return (
        <>
            <h1>User: {context.user?.firstName}</h1>
            

        </>
    )
}

export default Header;