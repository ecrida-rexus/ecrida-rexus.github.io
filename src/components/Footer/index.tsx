import React from 'react'

import './index.scss'

export default class Footer extends React.Component {
  public render() {
    return (
      <div className='Global-Footer'>
        <p>© 2020 Project ECRIDA. All rights reserved.</p>
        <div className='Group'>
          <p>Website developed by </p>
          <a href='https://www.linkedin.com/in/mihai-predoiu-828489141/' target="_blank" rel="noopener noreferrer">
            Mihai Predoiu
          </a>
        </div>
      </div >
    )
  }
}
