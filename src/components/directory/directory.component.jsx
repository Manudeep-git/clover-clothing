/* eslint-disable no-unused-vars */
import React, {useState} from 'react'
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss'
//This component will hold all the state - i.e all sections for the menu-bar
const Directory = (props) =>  {

    const [sections, setSections] = useState([
      {
        title: 'Hats',
        imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
        id: 1,
        linkUrl: '/hats'
      },
      {
        title: 'Jackets',
        imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
        id: 2,
        linkUrl: '/jackets'
      },
      {
        title: 'Sneakers',
        imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
        id: 3,
        linkUrl: '/sneakers'
      },
      {
        title: 'Womens',
        imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
        size: 'large',
        id: 4,
        linkUrl: '/womens'
      },
      {
        title: 'Mens',
        imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
        size: 'large',
        id: 5,
        linkUrl: 'shop/mens'
      }
    ])

    return (
        <div className="directory-menu">
            {sections.map(section  => (
                <MenuItem key= {section.id} item = {section}/> 
            ))}
        </div>
    )
}

export default Directory;