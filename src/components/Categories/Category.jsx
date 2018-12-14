import React, { Component } from 'react'

import { Query } from 'cozy-client'
import { PASSWORDS_DOCTYPE } from 'doctypes'

import { Button, Caption } from 'cozy-ui/react'
import { NavLink } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import PasswordModal from './PasswordModal'

export default class Category extends Component {
  constructor(props) {
    super(props)

    this.togglePasswordModal = this.togglePasswordModal.bind(this)
    this.state = {
      categoryId: null,
      passwords: [],
      isWorking: false,
      openPasswordModal: false,
      passwordId: null
    }
  }

  togglePasswordModal() {
    this.setState({ openPasswordModal: !this.state.openPasswordModal })
  }

  componentDidMount() {
    this.setState({ categoryId: this.props.match.params.id })
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ categoryId: nextProps.match.params.id })
  }

  editPassword(passwordId) {
    this.setState({ passwordId: passwordId, openPasswordModal: true })
  }

  render() {
    const { openPasswordModal, passwordId, categoryId } = this.state

    const query = client =>
      client
        .find(PASSWORDS_DOCTYPE)
        .where({ category: this.props.match.params.id })
    return (
      <div>
        <PasswordModal
          openPasswordModal={openPasswordModal}
          categoryId={categoryId}
          passwordId={passwordId}
          togglePasswordModal={this.togglePasswordModal}
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
                  <div className="password" key={password.id}>
                    <div>
                      <NavLink
                        key={password.id}
                        to={`/password/${password.id}`}
                        className="unstyled-link"
                      >
                        <div>{password.website}</div>
                        <Caption>{password.description}</Caption>
                      </NavLink>
                    </div>
                    <div>
                      <NavLink
                        key={password.id}
                        to={`/password/${password.id}`}
                        className="unstyled-link"
                      >
                        &#9679;&#9679;&#9679;&#9679;&#9679;&#9679;
                      </NavLink>
                    </div>
                    <div>
                      <FontAwesomeIcon
                        icon="edit"
                        onClick={() => this.editPassword(password.id)}
                      />
                    </div>
                  </div>
                ))}
              </div>
            )
          }}
        </Query>
      </div>
    )
  }
}
