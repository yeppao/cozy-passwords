import React, { Component } from 'react'
import { translate } from 'cozy-ui/react/I18n'
import {
  Title,
  Subtitle,
  Section,
  Sections,
  Paragraph,
  Hero
} from 'cozy-ui/react/Hero'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKey, faLock } from '@fortawesome/free-solid-svg-icons'

const PURPLE = '#a75bcb'
const BLUE = '#2d8af2'

export class Home extends Component {
  render() {
    const { t } = this.props
    return (
      <Hero>
        <Title>{t('HOMEPAGE.TITLE')}</Title>
        <Sections>
          <Section>
            <FontAwesomeIcon
              icon={faKey}
              color={PURPLE}
              className="home-icon"
            />
            <Subtitle>{t('HOMEPAGE.PASSWORD.TITLE')}</Subtitle>
            <Paragraph>{t('HOMEPAGE.PASSWORD.DESCRIPTION')}</Paragraph>
          </Section>
          <Section>
            <FontAwesomeIcon icon={faLock} color={BLUE} className="home-icon" />
            <Subtitle>{t('HOMEPAGE.SECURE.TITLE')}</Subtitle>
            <Paragraph>{t('HOMEPAGE.SECURE.DESCRIPTION')}</Paragraph>
          </Section>
        </Sections>
      </Hero>
    )
  }
}

export default translate()(Home)
