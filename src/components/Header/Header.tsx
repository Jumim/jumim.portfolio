import { FaGithub, FaGithubAlt } from 'react-icons/fa';
import './Header.scss';

export const Header = () => {
  return (
    <header>
      <div className='HeaderLeft'>
        <img src='image/jumim_logo.jpg' />
      </div>
      <div className='HeaderRight'>
        <a href='https://github.com/Jumim' target='_blank'><FaGithub /></a>
        <a href='https://jumim.github.io/' target='_blank'><FaGithubAlt /></a>
      </div>
    </header>
  );
}
