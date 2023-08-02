import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
        <h1>Welcome</h1>
        <Link to={"/auth/register"}>Sign up</Link>
        <Link to={"/auth/login"}>Sign in</Link>
        </>
    )
}

export default Home;
