import React from 'react'
import Header from '../components/Header';
import { Link } from 'react-router-dom'
import Linkedin from '../assets/images/linked-in.png'
import Github from '../assets/images/github-logo.png'



function Contact() {
  return (
    <>
      <div className="page home-page gradient-background">
        <Header />

        <h1>Meet the developers.</h1>
        <section className="cards">
          <article className="card">
            <img src={"https://media.licdn.com/dms/image/C4E03AQGTWMzd2DzVBQ/profile-displayphoto-shrink_800_800/0?e=1569456000&v=beta&t=l5sctHUNq_Yu3DmthrYcVON8Q_B5JerdEPxol6LEd1Q"} className="profile-img-round" />
            <h3>misha</h3>
            <p className="card-font">Bells old smuggler vat 69 sir edward’s white horse.  Blenders original choice old overholt american rye mac arthur’s.  Rob roy johnnie walker greenore gregson’s john dewar’s.  Michael collins burrberrys mcDowell’s no.1 isle.</p>
            <Link to="#"><img src={Github} alt="github-logo" /></Link>
            <Link to="#"><img src={Linkedin} alt="linkedin-logo" /></Link>
          </article>

          <article className="card">
            <img src={"https://media.licdn.com/dms/image/C4D03AQF77wdJGgnlDg/profile-displayphoto-shrink_800_800/0?e=1569456000&v=beta&t=lH6RqtJsf53IeRIzGwJh93gDGjZNCBD0QhkOmNTW7VU"} className="profile-img-round" />
            <h3>naz</h3>
            <p className="card-font">Bells old smuggler vat 69 sir edward’s white horse.  Blenders original choice old overholt american rye mac arthur’s.  Rob roy johnnie walker greenore gregson’s john dewar’s.  Michael collins burrberrys mcDowell’s no.1 isle.</p>
            <Link to="#"><img src={Github} alt="github-logo" /></Link>
            <Link to="#"><img src={Linkedin} alt="linkedin-logo" /></Link>
          </article>

          <article className="card">
            <img src={"https://media.licdn.com/dms/image/C5603AQEVBB1N3JrIaw/profile-displayphoto-shrink_800_800/0?e=1569456000&v=beta&t=lEGUWia-pJWmQAMqAb4U2AQPLxFbFy7HLfbv0wD4jd8"} className="profile-img-round" />
            <h3>brian</h3>
            <p className="card-font">Bells old smuggler vat 69 sir edward’s white horse.  Blenders original choice old overholt american rye mac arthur’s.  Rob roy johnnie walker greenore gregson’s john dewar’s.  Michael collins burrberrys mcDowell’s no.1 isle.</p>
            <Link to="#"><img src={Github} alt="github-logo" /></Link>
            <Link to="#"><img src={Linkedin} alt="linkedin-logo" /></Link>
          </article>

          <article className="card">
            <img src={"https://media.licdn.com/dms/image/C5603AQFEM1rxIPjwMA/profile-displayphoto-shrink_200_200/0?e=1569456000&v=beta&t=iaD_wMqOFFFOdx3gEuqxnA0y2E39-pzTMjkfSTbE6pQ"} className="profile-img-round" />
            <h3>sean</h3>
            <p className="card-font">Bells old smuggler vat 69 sir edward’s white horse. Blenders original choice old overholt american rye mac arthur’s. Rob roy johnnie walker greenore gregson’s john dewar’s. Michael collins burrberrys mcDowell’s no.1 isle.</p>
            <Link to="#"><img src={Github} alt="github-logo" /></Link>
            <Link to="#"><img src={Linkedin} alt="linkedin-logo" /></Link>
          </article>
        </section>
      </div>

    </>
  )
}

export default Contact