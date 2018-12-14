import React, { Component } from 'react'

import { Button, Modal, ModalContent, Label, Input } from 'cozy-ui/react'
import { withMutations, withClient } from 'cozy-client'
import { PASSWORDS_DOCTYPE } from 'doctypes'
import { translate } from 'cozy-ui/react/I18n'

export class PasswordModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      categoryId: null,
      passwordDescription: '',
      passwordToAdd: '',
      passwordWebsite: '',
      isWorking: false,
      openPasswordModal: true,
      password: {
        website: '',
        description: '',
        value: '',
        categoryId: null
      }
    }
  }

  handlePasswordChange = event => {
    let password = { ...this.state.password }
    password.value = event.target.value
    this.setState({ password: password })
  }

  handleWebsiteChange = event => {
    let password = { ...this.state.password }
    password.website = event.target.value
    this.setState({ password: password })
  }

  handlePasswordDescriptionChange = event => {
    let password = { ...this.state.password }
    password.description = event.target.value
    this.setState({ password: password })
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      openPasswordModal: nextProps.openPasswordModal,
      categoryId: nextProps.categoryId
    })

    const cozyClient = this.props.client
    if (nextProps.passwordId) {
      cozyClient
        .query(cozyClient.get(PASSWORDS_DOCTYPE, nextProps.passwordId))
        .then(data => {
          let password = data.data
          password.value = ''
          this.setState({ password: password })
        })
    }
  }

  handleSubmit = async () => {
    const { password, categoryId } = this.state
    const { createDocument, togglePasswordModal } = this.props

    password.category = categoryId

    this.setState(() => ({
      password: {
        website: '',
        description: '',
        value: '',
        categoryId: null
      },
      isWorking: true
    }))
    await createDocument(PASSWORDS_DOCTYPE, password)

    // remove the spinner
    this.setState(() => ({ isWorking: false }))
    togglePasswordModal()
  }

  render() {
    const { openPasswordModal, password, isWorking } = this.state
    const { t } = this.props
    return (
      openPasswordModal && (
        <Modal
          into="body"
          closable
          dismissAction={() => this.props.togglePasswordModal()}
        >
          <ModalContent>
            <div>
              <h2>{t('CATEGORY_MODAL.ADD_PASSWORD_LABEL')}</h2>
              <form onSubmit={this.handleSubmit}>
                <Label htmlFor="website-input">
                  {t('CATEGORY_MODAL.WEBSITE_LABEL')}
                </Label>
                <Input
                  value={password.website}
                  onChange={this.handleWebsiteChange}
                  id="website-input"
                  fullwidth
                />
                <Label htmlFor="password-input">
                  {t('CATEGORY_MODAL.PASSWORD_LABEL')}
                </Label>
                <Input
                  type="password"
                  value={password.value}
                  onChange={this.handlePasswordChange}
                  id="password-input"
                  fullwidth
                />
                <Label htmlFor="description-input">
                  {t('CATEGORY_MODAL.DESCRIPTION_LABEL')}
                </Label>
                <Input
                  value={password.description}
                  onChange={this.handlePasswordDescriptionChange}
                  id="description-input"
                />
                <Button
                  onClick={this.submit}
                  type="submit"
                  busy={isWorking}
                  label={t('MODAL.ADD')}
                  size="large"
                  extension="full"
                />
              </form>
            </div>
          </ModalContent>
        </Modal>
      )
    )
  }
}

export default withClient(withMutations()(translate()(PasswordModal)))
