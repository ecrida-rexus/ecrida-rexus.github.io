import React from 'react'

import './index.scss'

export default class Experiment extends React.Component {
  isURL = (str: string) => {
    var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    return pattern.test(str);
  }

  get content() {
    const a = [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras euismod id lectus non blandit. Vestibulum rutrum aliquam felis a rutrum. In augue leo, faucibus in odio non, pulvinar accumsan lectus. Integer pretium sit amet justo sit amet vulputate. Sed et sem ante. Praesent placerat lorem vitae lorem blandit tincidunt. Fusce suscipit, neque a volutpat lobortis, risus libero suscipit justo, ac malesuada dolor dui eu quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras euismod id lectus non blandit. Vestibulum rutrum aliquam felis a rutrum. In augue leo, faucibus in odio non, pulvinar accumsan lectus. Integer pretium sit amet justo sit amet vulputate. Sed et sem ante. Praesent placerat lorem vitae lorem blandit tincidunt. Fusce suscipit, neque a volutpat lobortis, risus libero suscipit justo, ac malesuada dolor dui eu quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      ['https://i.picsum.photos/id/818/700/500.jpg', 'https://i.picsum.photos/id/819/700/500.jpg'],
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit.',
    ]
    return a.map(item => {
      if (typeof item == 'string') {
        return <p>{item}</p>
      } else {
        return (
          <div className='Row'>
            {item.map(url => <img src={url} alt='' />)}
          </div>
        )
      }


      // return this.isURL(item) ? <div className='Row'><img src={item} alt=''></img></div> : <p>{item}</p>
    })
  }

  public render() {

    return (
      <div className='Experiment'>
        {this.content}
      </div >
    )
  }
}
