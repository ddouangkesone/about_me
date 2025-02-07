import React, { useEffect, useState } from 'react';
import { Line } from 'rc-progress';

export default function Percentage(props) {
  const { label = '', percent = 0 } = props
  const [state, setState] = useState({
    count: 0,
    inFocus: false
  })
  const { count } = state

  useEffect(() => {
    setTimeout(() => {
      setState((prevState) => ({ ...prevState, count: percent }))
    }, 1000)
  })

  return (
    <div className="w-100 flex items-center justify-between ph3">
      <span className="w-25 w-10-l tl">
        {label}
      </span>
      <div className="w-50 w-60-l">
        <Line percent={count} strokeWidth="7" trailWidth="0" strokeColor="#d0e3dc" />
      </div>
      <span>
        {count}%
      </span>
    </div>
  )
}