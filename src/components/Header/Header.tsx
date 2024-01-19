import { FaGithub, FaGithubAlt } from 'react-icons/fa'
import './Header.scss'

export const Header = () => {
  return (
    <header>
      <div className="HeaderLeft">
        <img src={`${process.env.PUBLIC_URL}/image/logo.png`} alt="" />
      </div>
      <div className="HeaderRight">
        <a href="https://github.com/Jumim" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="https://jumim.github.io/" target="_blank" rel="noreferrer">
          <FaGithubAlt />
        </a>
      </div>
    </header>
  )
}
