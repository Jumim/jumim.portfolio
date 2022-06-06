import { FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { Icon } from 'components';

export const MainPage = () => {
  return (
    <div className='MainPage'>
      <div className='Main_Left'>
        <img src='image/da014fa85da4a.jpg' />
      </div>
      <div className='Main_Right'>
        <div className='MyName'>
          <h3>My Name is</h3>
          <h2 className='yellow'>Jumi</h2>
        </div>
        <div className='MyIntro'>
          <span>항상 도전하는 개발자, 이주미입니다.</span>
        </div>
        <div className='MyInfo'>
          <p className='Info_Text'><FaPhoneAlt /> 010 - 5485 - 5996</p>
          <p className='Info_Text'><MdEmail /> a25320@naver.com</p>
        </div>
        <div className='MyStack'>
          {
            MyStack.map((data: string, i: number) =>
              <Icon key={'MyStack_' + i}>
                <p>{data}</p>
              </Icon>
            )
          }
        </div>
      </div>
    </div>
  )
}

const MyStack = ['React', 'JavaScript', 'Jquery', 'HTML', 'CSS', 'SASS/SCSS', 'Java', 'Spring', 'PHP'];
