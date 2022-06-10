import { StatusBar } from 'components';
import { MySkill } from 'etc';

export const SkillPage = () => {
  return (
    <div className='SkillPage'>
      <div className='SkillTitle'>
        <p>항상 도전하는 개발자</p>
        <h1>이주미</h1>
        <p></p>
      </div>
      <div className='SkillList'>
        {
          MySkill.map((data: any, i: number) =>
            <StatusBar key={'IntroStack_' + i} className={data.status} text={data.name} />
          )
        }
      </div>
    </div>
  )
}
