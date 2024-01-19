import './ScrollDown.scss'

interface ScrollDownType {
  className: string
}

export const ScrollDown = ({ className }: ScrollDownType) => {
  return (
    <div className={['ScrollDown', className].join(' ')}>
      <p>ScrollDown</p>
      <span></span>
    </div>
  )
}
