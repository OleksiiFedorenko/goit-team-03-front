import { Link } from 'react-router-dom';
import css from './Home.module.css';
import { TiFlash } from 'react-icons/ti';
import user from 'images/start-img.png';

const Home = () => {
  return (
    <div className={css.container}>
      <div className={css.inner}>
        <img className={css.image} src={user} alt="User greeting avatar" />
        <div className={css.heading}>
          <div className={css['app-icon']}>
            <TiFlash color="#fff" size={25} />
          </div>
          <h1 className={css.title}>Task Pro</h1>
        </div>
        <p className={css.descr}>
          Supercharge your productivity and take control of your tasks with Task
          Pro - Don't wait, start achieving your goals now!
        </p>

        <ul className={css['home-nav']}>
          <li className={css.link}>
            <Link to="/auth/register">Registration</Link>
          </li>
          <li className={css.link}>
            <Link to="/auth/login">Log in</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
