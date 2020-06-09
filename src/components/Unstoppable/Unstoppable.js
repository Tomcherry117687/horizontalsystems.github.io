import React from 'react'

import Container from '../Container/Container'
import Icon from '../Icon/Icon'
import Edge from '../Edge/Edge'
import EdgeStart from '../Edge/EdgeStart'
import EdgeEnd from '../Edge/EdgeEnd'
import Banner from '../Banner/Banner'
import events from '../../core/EventEmitter'

import './Unstoppable.scss'

function Unstoppable() {
  return (
    <Container className="Unstoppable" fluid>
      <div className="Screen-right-half paths-white" />

      <Edge className="Edge-header">
        <EdgeStart colorName="dark-steal" />
        <Container>
          <div className="Edge-content">
            <div className="Edge-content-start">
              <div className="Icon-wrap">
                <Icon name="unstoppable" fill="none" viewBox="0 0 62 62" size="62" />
                <div className="Icon-label color-lights">
                  Unstoppable <br />
                  Wallet
                </div>
              </div>
            </div>
            <div className="Edge-content-end Edge-content-end-text color-dark">
              Independence, knowledge and privacy are the main principles behind the products we build.
            </div>
          </div>
        </Container>
      </Edge>

      <Container clipped={false}>
        <Banner text="Privacy, independence and reliability"
                cover="uw"
                action={<button className="btn">Get the App</button>} />
      </Container>

      <Edge className="Edge-bottom">
        <Container>
          <div className="Edge-content">
            <div />
            <div className="Edge-content-end">
              <div className="Edge-pagination color-white-50">03 / 07</div>
              <div className="Edge-pagination-icon sm-svg-green" onClick={() => events.navigate(4)}>
                <Icon name="arrow-down" viewBox="0 0 28 28" fill="none" />
              </div>
            </div>
          </div>
        </Container>

        <EdgeEnd colorName="green" />
      </Edge>
    </Container>
  )
}

export default Unstoppable