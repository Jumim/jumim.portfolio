import { StatusBar } from 'components'
import { MySkill } from 'data'

export const SkillPage = () => {
  return (
    <div className="SkillPage">
      <div className="SkillTitle">
        <h3>보유 기술</h3>
      </div>
      <div className="SkillList">
        {MySkill.map((data: any, i: number) => (
          <StatusBar key={'IntroStack_' + i} className={data.status} text={data.name} />
        ))}
      </div>
    </div>
  )
}
