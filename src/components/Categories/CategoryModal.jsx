import React, { Component } from 'react'

import { Button, Modal, ModalContent, Label, Input } from 'cozy-ui/react'
import { withMutations } from 'cozy-client'
import { PASSWORDS_DOCTYPE } from 'doctypes'

export class CategoryModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      categoryId: null,
      passwordDescription: '',
      passwordToAdd: '',
      passwordWebsite: '',
      isWorking: false,
      openPasswordModal: true
    }
  }

  handlePasswordChange = event => {
    this.setState({ passwordToAdd: event.target.value })
  }

  handleWebsiteChange = event => {
    this.setState({ passwordWebsite: event.target.value })
  }

  handlePasswordDescriptionChange = event => {
    this.setState({ passwordDescription: event.target.value })
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      openPasswordModal: nextProps.openPasswordModal,
      categoryId: nextProps.categoryId
    })
  }

  handleSubmit = async () => {
    const {
      passwordToAdd,
      passwordWebsite,
      passwordDescription,
      categoryId
    } = this.state

    const { createDocument } = this.props

    this.setState(() => ({
      passwordToAdd: '',
      passwordWebsite: '',
      passwordDescription: '',
      isWorking: true
    }))
    await createDocument(PASSWORDS_DOCTYPE, {
      value: passwordToAdd,
      website: passwordWebsite,
      description: passwordDescription,
      category: categoryId
    })

    // remove the spinner
    this.setState(() => ({ isWorking: false, openPasswordModal: false }))
  }

  render() {
    const {
      openPasswordModal,
      passwordWebsite,
      passwordToAdd,
      passwordDescription,
      isWorking
    } = this.state
    return (
      openPasswordModal && (
        <Modal
          into="body"
          closable
          dismissAction={() => this.setState({ openPasswordModal: false })}
        >
          <ModalContent>
            <div>
              <h2>Add a new password:</h2>
              <form onSubmit={this.handleSubmit}>
                <Label htmlFor="website-input">Website</Label>
                <Input
                  value={passwordWebsite}
                  onChange={this.handleWebsiteChange}
                  id="website-input"
                  fullwidth
                />
                <Label htmlFor="password-input">New password</Label>
                <Input
                  type="password"
                  value={passwordToAdd}
                  onChange={this.handlePasswordChange}
                  id="password-input"
                  fullwidth
                />
                <Label htmlFor="description-input">Description</Label>
                <Input
                  value={passwordDescription}
                  onChange={this.handlePasswordDescriptionChange}
                  id="description-input"
                />
                <Button
                  onClick={this.submit}
                  type="submit"
                  busy={isWorking}
                  label="add"
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

export default withMutations()(CategoryModal)
