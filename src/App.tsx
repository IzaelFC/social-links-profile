import avatar from './assets/images/avatar-jessica.jpeg'

import './index.css'

export function App() {
  return(
    <main>
      <section className="infos">
        <img src={ avatar } alt="" />
        <h1>Jessica Randall</h1>
        <span>London, United Kingdom</span>
        <p>"Front-end developer and avid reader."</p>
      </section>
    
      <section className='social'>
        <a target='_blank' href="https://github.com/">GitHub</a>
        <a target='_blank' href="https://www.frontendmentor.io/">Frontend Mentor</a>
        <a target='_blank' href="https://www.linkedin.com/">LinkedIn</a>
        <a target='_blank' href="https://twitter.com/">Twitter</a>
        <a target='_blank' href="https://www.instagram.com/">Instagram</a>
      </section>
    </main>
  )
}