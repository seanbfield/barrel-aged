import React from 'react'
import Header from '../components/Header';
import { Link } from 'react-router-dom'


function Contact() {
  return (
    <>
      <div className="page landing-page">
        <Header />
        <h1>Meet the developers.</h1>
        <div className="hero landing-hero gradient-background">

          <section className="cards">
            <article className="card">
              <img src={"https://media.licdn.com/dms/image/C4E03AQGTWMzd2DzVBQ/profile-displayphoto-shrink_800_800/0?e=1569456000&v=beta&t=l5sctHUNq_Yu3DmthrYcVON8Q_B5JerdEPxol6LEd1Q"} className="profile-img-round" />
              <h3>misha</h3>
              <p>Bells old smuggler vat 69 sir edward’s white horse.  Blenders original choice old overholt american rye mac arthur’s.  Rob roy johnnie walker greenore gregson’s john dewar’s.  Michael collins burrberrys mcDowell’s no.1 isle.</p>
              <Link to="#"><img src={'https://addons-media.operacdn.com/media/extensions/25/170925/1.0.3-rev1/icons/icon_64x64_dd4e801f8a3053029c874cde7512b1e4.png'} alt="github-logo" /></Link>
            </article>

            <article className="card">
              <img src={"https://media.licdn.com/dms/image/C4D03AQF77wdJGgnlDg/profile-displayphoto-shrink_800_800/0?e=1569456000&v=beta&t=lH6RqtJsf53IeRIzGwJh93gDGjZNCBD0QhkOmNTW7VU"} className="profile-img-round" />
              <h3>naz</h3>
              <p>Bells old smuggler vat 69 sir edward’s white horse.  Blenders original choice old overholt american rye mac arthur’s.  Rob roy johnnie walker greenore gregson’s john dewar’s.  Michael collins burrberrys mcDowell’s no.1 isle.</p>
              <Link to="#"><img src={'https://addons-media.operacdn.com/media/extensions/25/170925/1.0.3-rev1/icons/icon_64x64_dd4e801f8a3053029c874cde7512b1e4.png'} alt="github-logo" /></Link>
            </article>

            <article className="card">
              <img src={"https://media.licdn.com/dms/image/C5603AQEVBB1N3JrIaw/profile-displayphoto-shrink_800_800/0?e=1569456000&v=beta&t=lEGUWia-pJWmQAMqAb4U2AQPLxFbFy7HLfbv0wD4jd8"} className="profile-img-round" />
              <h3>brian</h3>
              <p>Bells old smuggler vat 69 sir edward’s white horse.  Blenders original choice old overholt american rye mac arthur’s.  Rob roy johnnie walker greenore gregson’s john dewar’s.  Michael collins burrberrys mcDowell’s no.1 isle.</p>
              <Link to="#"><img src={'https://addons-media.operacdn.com/media/extensions/25/170925/1.0.3-rev1/icons/icon_64x64_dd4e801f8a3053029c874cde7512b1e4.png'} alt="github-logo" /></Link>
            </article>

            <article className="card">
              <img src={"https://media.licdn.com/dms/image/C5603AQFEM1rxIPjwMA/profile-displayphoto-shrink_200_200/0?e=1569456000&v=beta&t=iaD_wMqOFFFOdx3gEuqxnA0y2E39-pzTMjkfSTbE6pQ"} className="profile-img-round" />
              <h3>sean</h3>
              <p>Software developer with a love for React and Front End development. When he's not coding, he's hiking and travelling throughout Europe.</p>
              <Link to="#"><img src={'https://addons-media.operacdn.com/media/extensions/25/170925/1.0.3-rev1/icons/icon_64x64_dd4e801f8a3053029c874cde7512b1e4.png'} alt="github-logo" /></Link>
            </article>
          </section>
        </div>
        <div id="whiskey-list">
          Bells old smuggler vat 69 sir edward’s white horse.  Blenders original choice old overholt american rye mac arthur’s.  Rob roy johnnie walker greenore gregson’s john dewar’s.  Michael collins burrberrys mcDowell’s no.1 isle of jura.

  Burrberrys clontarf criadores bells feckin.  Evan william’s sandy mac laphroaig tillers william lawson’s.  Swing dalmore rob roy jameson feckin.  Teacher’s laphroaig old overholt american rye dunhill.  Laphroaig dailuaine officer’s choice ballantines gregson’s label 5.  Balvenie mac pay of ye monks dunhill.
        </div>
      </div>
    </>
  )
}

export default Contact