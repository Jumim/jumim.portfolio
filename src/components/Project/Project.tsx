import { FaGithub, FaLink } from 'react-icons/fa';
import { Icon } from 'components';
import './Project.scss';

interface ProjectType {
  projectData: {
    name: string
    img: string
    content: string
    tag: []
    githubUrl: string
    url: string
  }
}

export const Project = ({ projectData }: ProjectType) => {
  return (
    <div className='Project'>
      <div>
        <div className='ProjectName'>
          <h4>{projectData.name}</h4>
        </div>
        <div className='ProjectImg'>
          <img src={`image/${projectData.img}`} />
        </div>
        <div className='ProjectContent'>
          {projectData.content}
        </div>
        <div className='ProjectTag'>
          {
            projectData.tag.map((data: string, i: number) =>
              <Icon key={'ProjectIcon' + data + i} className='gray'>{data}</Icon>
            )
          }
        </div>
        <div className='ProjectLink'>
          <a href={projectData.githubUrl} target='_blank'><FaGithub /></a>
          <a href={projectData.url} target='_blank'><FaLink /></a>
        </div>
      </div>
    </div>
  )
}
