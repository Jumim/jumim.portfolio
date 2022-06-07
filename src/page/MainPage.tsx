import { FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { Icon } from 'components';
import { MyStack } from 'etc';

export const MainPage = () => {
  return (
    <div className='MainPage'>
      <div className='MainLeft'>
        <img src='image/da014fa85da4a.jpg' />
      </div>
      <div className='MainRight'>
        <div className='MyName'>
          <h3>My Name is</h3>
          <h2 className='yellow'>Jumi</h2>
        </div>
        <div className='MainIntro'>
          <span>항상 도전하는 개발자, 이주미입니다.</span>
        </div>
        <div className='MainInfo'>
          <p className='InfoText'><FaPhoneAlt /> 010 - 5485 - 5996</p>
          <p className='InfoText'><MdEmail /> a25320@naver.com</p>
        </div>
        <div className='MainStack'>
          {
            MyStack.map((data: any, i: number) =>
              <Icon key={'MainStack_' + i}>
                <p>{data.name}</p>
              </Icon>
            )
          }
        </div>
      </div>
    </div>
  )
}
