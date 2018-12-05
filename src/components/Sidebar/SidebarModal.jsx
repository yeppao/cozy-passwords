import React, { Component } from 'react'

import { Button, Modal, ModalContent, Label, Input } from 'cozy-ui/react'
import { withMutations } from 'cozy-client'
import { CATEGORIES_DOCTYPE } from 'doctypes'

import Select from 'react-select'
import { CustomCategoriesOption } from '../Select/CustomCategoriesOption'

import { icons } from '../../enums/icons'

export class SidebarModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      categoryToAdd: '',
      categoryIcon: '',
      isWorking: false,
      openCategoryModal: false
    }
  }

  // handle input value change
  handleChange = event => {
    this.setState({ categoryToAdd: event.target.value })
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ openCategoryModal: nextProps.openCategoryModal })
  }

  // create the new todo
  handleSubmit = async () => {
    const { categoryToAdd, categoryIcon } = this.state
    const { createDocument } = this.props

    // reset the input and display a spinner during the process
    this.setState(() => ({
      categoryToAdd: '',
      categoryIcon: '',
      isWorking: true
    }))
    await createDocument(CATEGORIES_DOCTYPE, {
      name: categoryToAdd,
      icon: categoryIcon
    })
    // remove the spinner
    this.setState(() => ({ isWorking: false }))
    this.props.closeModal()
  }

  render() {
    const { openCategoryModal, categoryToAdd, isWorking } = this.state
    return (
      openCategoryModal && (
        <Modal
          into="body"
          closable
          dismissAction={() => this.props.toggleModal()}
        >
          <ModalContent>
            <h2>Add a new category</h2>
            <form onSubmit={this.handleSubmit}>
              <Label htmlFor="category-add-input"> Category name: </Label>
              <Input
                value={categoryToAdd}
                onChange={this.handleChange}
                id="category-add-input"
              />
              <Select
                components={{ Option: CustomCategoriesOption }}
                closeMenuOnSelect={true}
                options={icons}
                onChange={opt => this.setState({ categoryIcon: opt.value })}
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
          </ModalContent>
        </Modal>
      )
    )
  }
}

export default withMutations()(SidebarModal)
