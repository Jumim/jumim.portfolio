import { StatusBar } from 'components';
import { MyStack } from 'etc';

export const IntroPage = () => {
  return (
    <div className='IntroPage'>
      <div className='IntroMain'>
        <p>항상 도전하는 개발자</p>
        <h1>이주미</h1>
        <h3 className='KCC-eunyoung'>"First thought, Best thought"</h3>
      </div>
      <div className='IntroStack'>
        {
          MyStack.map((data: any, i: number) =>
            <StatusBar key={'IntroStack_' + i} className={data.status} text={data.name} />
          )
        }
      </div>
    </div>
  )
}
