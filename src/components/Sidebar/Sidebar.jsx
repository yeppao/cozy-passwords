import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import { Button } from 'cozy-ui/react'
import { Query } from 'cozy-client'
import { categoriesQuery } from 'doctypes'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Spinner from 'cozy-ui/react/Spinner'

import { translate } from 'cozy-ui/react/I18n'

import SidebarModal from './SidebarModal'

export default class Sidebar extends Component {
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
    return (
      <aside className="o-sidebar">
        <div>
          <SidebarModal
            openCategoryModal={this.state.openCategoryModal}
            toggleModal={this.toggleCategoryModal}
          />
          <nav>
            <Button
              className="c-add-category"
              type="submit"
              label="New category"
              size="large"
              icon={<FontAwesomeIcon icon="plus" />}
              extension="narrow"
              onClick={() =>
                this.setState({ openCategoryModal: !openCategoryModal })
              }
            />
            <Query query={categoriesQuery}>
              {({ data: categories, fetchStatus }) => {
                return fetchStatus !== 'loaded' ? (
                  <Spinner size="xxlarge" middle />
                ) : (
                  <ul className="c-nav">
                    {categories.map(category => (
                      <li key={category.id} className="c-nav-item">
                        <NavLink
                          to={`/category/${category.id}`}
                          className="c-nav-link"
                          activeClassName="is-active"
                        >
                          <FontAwesomeIcon
                            className="c-nav-icon"
                            icon={category.icon}
                          />
                          {category.name}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )
              }}
            </Query>
          </nav>
        </div>
      </aside>
    )
  }
}

// translate() provide t() to use translations (ex: locales/en.json)
export default translate()(Sidebar)
