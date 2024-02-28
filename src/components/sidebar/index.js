import Github from '../../assets/icons/github.svg';
import Linkedin from '../../assets/icons/linkedin.svg';

import './style.css'

const SideBar = () => {
  const icons = [
    { icon: Github, link: 'https://github.com/gustavocarlim' },
    { icon: Linkedin, link: 'https://www.linkedin.com/in/gustavocarlim/' },
  ];

  const iconsTitle = ["Github", "Linkedin"];

  return (
    <>
      <aside className="sidebar__container">
        {
          icons.map((item, index) => (
            <div key={index}>
              <a href={item.link} target='_blank' rel="noreferrer">
                <img src={item.icon} alt={`${iconsTitle[index]} logo`} />
              </a>
            </div>
          ))
        }
        <div className="linha__vertical" />
      </aside>
    </>
  )
}

export default SideBar