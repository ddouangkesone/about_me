import React from 'react';
import ScrollTrigger from 'react-scroll-trigger';
import { Line } from 'rc-progress';

class Percentage extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      inFocus: false
    };
    this.increase = this.increase.bind(this);
    this.restart = this.restart.bind(this);
  }



  increase() {
    const { percent } = this.props
    const count = this.state.count + 1;
    if (count > percent) {
      clearTimeout(this.tm);
      return;
    }
    this.setState({ count });
    this.tm = setTimeout(this.increase, 10);
  }

  restart() {
    clearTimeout(this.tm);
    this.setState({ count: 0 }, () => {
      this.increase();
    });
  }

  render() {
    const { label = 'HTML' } = this.props
    const { count } = this.state

    return (
      <ScrollTrigger className="mt2" onEnter={() => { this.increase() }}>
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
      </ScrollTrigger>
    )
  }
}

export default Percentage