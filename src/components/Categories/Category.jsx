import React, { Component } from 'react'

import { Query } from 'cozy-client'
import { PASSWORDS_DOCTYPE } from 'doctypes'

import { Button, Caption } from 'cozy-ui/react'
import { NavLink } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import CategoryModal from './CategoryModal'

export default class Category extends Component {
  constructor(props) {
    super(props)

    this.togglePasswordModal = this.togglePasswordModal.bind(this)
    this.state = {
      categoryId: null,
      passwords: [],
      isWorking: false,
      openPasswordModal: false
    }
  }

  togglePasswordModal() {
    this.setState({ openPasswordModal: !this.state.openPasswordModal })
  }

  componentDidMount() {
    this.setState(() => ({
      categoryId: this.props.match.params.id
    }))
  }

  render() {
    const { openPasswordModal, categoryId } = this.state
    const query = client =>
      client.find(PASSWORDS_DOCTYPE).where({ category: categoryId })
    return (
      <div>
        <CategoryModal
          openPasswordModal={openPasswordModal}
          categoryId={categoryId}
        />
        <Button
          label="Add a password"
          icon={<FontAwesomeIcon icon="plus" />}
          onClick={() =>
            this.setState({ openPasswordModal: !openPasswordModal })
          }
        />
        <Query query={query}>
          {({ data: passwords }) => {
            return (
              <div>
                {passwords.map(password => (
                  <NavLink
                    key={password.id}
                    to={`/password/${password.id}`}
                    className="unstyled-link"
                  >
                    <div className="password">
                      <div>
                        <div>{password.website}</div>
                        <Caption>{password.description}</Caption>
                      </div>
                      <div>&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;</div>
                    </div>
                  </NavLink>
                ))}
              </div>
            )
          }}
        </Query>
      </div>
    )
  }
}
