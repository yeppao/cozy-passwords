import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import { Sidebar, Nav, NavItem, NavText } from 'cozy-ui/react'
import { Query } from 'cozy-client'
import { categoriesQuery } from 'doctypes'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Spinner from 'cozy-ui/react/Spinner'

import { translate } from 'cozy-ui/react/I18n'

import SidebarModal from './SidebarModal'

export class AppSidebar extends Component {
  constructor(props) {
    super(props)

    this.toggleCategoryModal = this.toggleCategoryModal.bind(this)
    this.state = {
      categoryToAdd: '',
      openCategoryModal: false
    }
  }

  toggleCategoryModal() {
    this.setState({ openCategoryModal: !this.state.openCategoryModal })
  }

  render() {
    const { openCategoryModal } = this.state
    const { t } = this.props
    return (
      <Sidebar>
        <SidebarModal
          openCategoryModal={this.state.openCategoryModal}
          toggleModal={this.toggleCategoryModal}
        />
        <Nav>
          <div className="c-nav-action">
            <NavItem>
              <div
                className="c-nav-link"
                onClick={() =>
                  this.setState({ openCategoryModal: !openCategoryModal })
                }
              >
                <FontAwesomeIcon className="c-nav-icon" icon="plus" />
                <NavText>{t('SIDEBAR.ADD_CATEGORY')}</NavText>
              </div>
            </NavItem>
          </div>
          <Query query={categoriesQuery}>
            {({ data: categories, fetchStatus }) => {
              return fetchStatus !== 'loaded' ? (
                <Spinner size="xxlarge" middle />
              ) : (
                categories.map(category => (
                  <NavItem key={category.id}>
                    <NavLink
                      to={`/category/${category.id}`}
                      className="c-nav-link"
                      activeClassName="is-active"
                    >
                      <FontAwesomeIcon
                        className="c-nav-icon"
                        icon={category.icon}
                      />
                      <NavText>{category.name}</NavText>
                    </NavLink>
                  </NavItem>
                ))
              )
            }}
          </Query>
        </Nav>
      </Sidebar>
    )
  }
}

// translate() provide t() to use translations (ex: locales/en.json)
export default translate()(AppSidebar)
