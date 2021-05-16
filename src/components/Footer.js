import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <p> Roshy's Task Manager using React</p>
            <Link to='/about'>About</Link>
        </footer>
    )
}

export default Footer
