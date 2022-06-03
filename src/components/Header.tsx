import { FaGithub, FaGithubAlt } from 'react-icons/fa';

export const Header = () => {
  return (
    <header>
      <div className='header_left'>
        로고
      </div>
      <div className='header_right'>
        <a href='https://github.com/Jumim' target='_blank'><FaGithub /></a>
        <a href='https://jumim.github.io/' target='_blank'><FaGithubAlt /></a>
      </div>
    </header>
  );
}
