import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import CallToAction from '../components/CallToAction'
import Footer from '../components/Footer';

function Contact() {
  return (
    <div className="page">
      <Header />
      <div className="contact-hero gradient-background">
        <h1>Meet the developers.</h1>
      </div>
      <div className="body">
        <section className="cards">
          <article className="card">
            <img src={"https://media.licdn.com/dms/image/C4E03AQGTWMzd2DzVBQ/profile-displayphoto-shrink_800_800/0?e=1569456000&v=beta&t=l5sctHUNq_Yu3DmthrYcVON8Q_B5JerdEPxol6LEd1Q"} className="profile-img-round" />
            <h3>Misha</h3>
            <p>Misha is a dedicated and agile web developer, product manager, social entrepreneur, and advocate with over seven years experience finding creative solutions to pressing issues in the mental and behavioral health space.</p>
            <p>https://github.com/mishakessler</p>
            <Link to="#"><img src={'https://addons-media.operacdn.com/media/extensions/25/170925/1.0.3-rev1/icons/icon_64x64_dd4e801f8a3053029c874cde7512b1e4.png'} alt="github-logo" /></Link>
          </article>

          <article className="card">
            <img src={"https://media.licdn.com/dms/image/C4D03AQF77wdJGgnlDg/profile-displayphoto-shrink_800_800/0?e=1569456000&v=beta&t=lH6RqtJsf53IeRIzGwJh93gDGjZNCBD0QhkOmNTW7VU"} className="profile-img-round" />
            <h3>Naz</h3>
            <p>Software Engineer and lifelong learner who loves helping companies expand their digital presence and develop efficient solutions to the problems they face. I strive to combine my outgoing personality with clean code in order to exceed both internal and client expectations in every challenge I face.</p>
            <p>https://github.com/n95babu</p>
            <Link to="#"><img src={'https://addons-media.operacdn.com/media/extensions/25/170925/1.0.3-rev1/icons/icon_64x64_dd4e801f8a3053029c874cde7512b1e4.png'} alt="github-logo" /></Link>
          </article>

          <article className="card">
            <img src={"https://media.licdn.com/dms/image/C5603AQEVBB1N3JrIaw/profile-displayphoto-shrink_800_800/0?e=1569456000&v=beta&t=lEGUWia-pJWmQAMqAb4U2AQPLxFbFy7HLfbv0wD4jd8"} className="profile-img-round" />
            <h3>Brian</h3>
            <p>Brian is a software engineer based in New York. He uses his background in acting, fight choreography, and stage combat education to combine enthusiasm, improvisation, and storytelling with his expertise in full-stack web development to create compelling, immersive applications.</p>
            <p>https://github.com/GuildensternDies</p>
            <Link to="#"><img src={'https://addons-media.operacdn.com/media/extensions/25/170925/1.0.3-rev1/icons/icon_64x64_dd4e801f8a3053029c874cde7512b1e4.png'} alt="github-logo" /></Link>
          </article>

          <article className="card">
            <img src={"https://media.licdn.com/dms/image/C5603AQFEM1rxIPjwMA/profile-displayphoto-shrink_200_200/0?e=1569456000&v=beta&t=iaD_wMqOFFFOdx3gEuqxnA0y2E39-pzTMjkfSTbE6pQ"} className="profile-img-round" />
            <h3>Sean</h3>
            <p>Software developer with a love for React and Front End development. When he's not coding, he's hiking and travelling throughout Europe.</p>
            <p>https://github.com/seanbfield</p>
            <Link to="#"><img src={'https://addons-media.operacdn.com/media/extensions/25/170925/1.0.3-rev1/icons/icon_64x64_dd4e801f8a3053029c874cde7512b1e4.png'} alt="github-logo" /></Link>
          </article>
        </section>
      </div>
      <CallToAction />
      <Footer />
    </div>
  )
}

export default Contact