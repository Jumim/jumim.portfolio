import './StatusBar.scss'

interface StatusBarType {
  className: string
  text: string
}

export const StatusBar = ({ className, text }: StatusBarType) => {
  return (
    <div className={['StatusBar', 'Status' + className].join(' ')}>
      <span>{text}</span>
      <ul>
        <li>
          <p>초급</p>
        </li>
        <li>
          <p>중급</p>
        </li>
        <li>
          <p>상급</p>
        </li>
      </ul>
    </div>
  )
}
