import { FaPhoneAlt, FaGithub } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { Icon } from 'components'
import { MySkill } from 'data'

export const MainPage = () => {
  return (
    <div className="MainPage">
      <div className="MainLeft">
        <img src={`${process.env.PUBLIC_URL}/image/da014fa85da4a.jpg`} alt="" />
      </div>
      <div className="MainRight">
        <div className="MyName">
          <h3>My Name is</h3>
          <h1>Jumi</h1>
        </div>
        <div className="MainIntro">
          <span>항상 도전하는 개발자, 이주미입니다.</span>
        </div>
        <div className="MainInfo">
          <p className="InfoText">
            <FaPhoneAlt /> <a href="tel:010 - 5485 - 5996">010 - 5485 - 5996</a>
          </p>
          <p className="InfoText">
            <MdEmail /> <a href="mailto:a25320@naver.com">a25320@naver.com</a>
          </p>
          <p className="InfoText">
            <FaGithub /> <a href="https://github.com/Jumim">https://github.com/Jumim</a>
          </p>
        </div>
        <div className="MainSkillList">
          {MySkill.map((data: any, i: number) => (
            <Icon key={'MainStack_' + i}>
              <p>{data.name}</p>
            </Icon>
          ))}
        </div>
      </div>
    </div>
  )
}
