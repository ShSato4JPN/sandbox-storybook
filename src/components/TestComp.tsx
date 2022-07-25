import React from 'react'

type Props = {
  label: string
}

const TestComp: React.FC<Props> = (props) => {
  return (
    <div className="button">
      <a href="/">{props.label}</a>
    </div>
  )
}

export default TestComp
