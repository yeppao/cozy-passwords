import React, { Component } from 'react'

import { Well, MainTitle, Text, Button } from 'cozy-ui/react'
import { NavLink } from 'react-router-dom'

import { Query } from 'cozy-client'
import { PASSWORDS_DOCTYPE } from 'doctypes'

export default class Password extends Component {
  constructor(props) {
    super(props)
    this.state = {
      passwordId: null
    }
  }

  componentDidMount() {
    this.setState(() => ({
      passwordId: this.props.match.params.id
    }))
  }

  render() {
    const query = client =>
      client.find(PASSWORDS_DOCTYPE).where({ _id: this.props.match.params.id })
    return (
      <Query query={query}>
        {({ data }) => {
          return (
            <div>
              {data.map(password => (
                <div key={password.id}>
                  <NavLink
                    to={`/category/${password.categoryId}`}
                    className="unstyled-link"
                  >
                    <Button theme="secondary" label="Back" />
                  </NavLink>
                  <MainTitle>{password.website}</MainTitle>
                  <Text>{password.description}</Text>
                  <Well>{password.value}</Well>
                </div>
              ))}
            </div>
          )
        }}
      </Query>
    )
  }
}
