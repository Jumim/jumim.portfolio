import { FaGithub } from 'react-icons/fa';
import { Icon } from 'components';
import './Project.scss';

interface ProjectType {
  projectData: {
    title: string
    img: string
    tag: []
    url: string
  }
}

export const Project = ({ projectData }: ProjectType) => {
  return (
    <div className='Project'>
      <div>
        <div className='ProjectTitle'>
          <h4>{projectData.title}</h4>
        </div>
        <div className='ProjectImg'>
          <img src={`image/${projectData.img}`} />
        </div>
        <div className='ProjectTag'>
          {
            projectData.tag.map((data: string, i: number) =>
              <Icon key={'ProjectIcon' + data + i} className='gray'>{data}</Icon>
            )
          }
        </div>
        <div className='ProjectLink'>
          <a href={projectData.url} target='_blank'><FaGithub /></a>
        </div>
      </div>
    </div>
  )
}
