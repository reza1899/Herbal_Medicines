import {useLocation} from "react-router-dom";
const ShowNavbar = (Component) => {
    return function ShowNavbar(props) {
    const location = useLocation();
    const iseContactPage = location.pathname ==="/login" || location.pathname ==="/register" || location.pathname ==="/*";

    if (iseContactPage) {
        return null
    }
    return <Component {...props} />
    }
}
export default ShowNavbar;