import React, { useState } from 'react';
// import ScrollTrigger from 'react-scroll-trigger';
// import { Line } from 'rc-progress';

export default function Percentage(props) {
  const { label = '', percent = 0 } = props
  const [state, setState] = useState({
    count: 0,
    inFocus: false
  })
  const { count } = state

  function increase() {
    const countPlusOne = count + 1;
    if (countPlusOne > percent) {
      clearTimeout(this.tm);
      return;
    }
    setState(prevState => ({ ...prevState, count: countPlusOne }))

    // Need to see what this is doing
    // this.tm = setTimeout(this.increase, 10);
  }

  function restart() {
    // What is this.tm and what is it doing?
    // clearTimeout(this.tm);

    setState((prevState) => ({ ...prevState, count: 0 }))
  }

  return (
    <div className="w-100 flex items-center justify-between ph3">
      <span className="w-25 w-10-l tl">
        {label}
      </span>
      <div className="w-50 w-60-l">
        {/* <Line percent={count} strokeWidth="7" trailWidth="0" strokeColor="#d0e3dc" /> */}
      </div>
      <span>
        {count}%
      </span>
    </div>
  )
}