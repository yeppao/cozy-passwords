import { TODOS_DOCTYPE } from './todos'
import { CATEGORIES_DOCTYPE } from './categories'
import { PASSWORDS_DOCTYPE } from './passwords'

// the documents schema, necessary for CozyClient
export default {
  todos: {
    doctype: TODOS_DOCTYPE,
    attributes: {},
    relationships: {}
  },
  categories: {
    doctype: CATEGORIES_DOCTYPE,
    attributes: {},
    relationships: {}
  },
  passwords: {
    doctype: PASSWORDS_DOCTYPE,
    attributes: {},
    relationships: {}
  }
}

// export all doctypes for the application
export * from './todos'
export * from './categories'
export * from './passwords'
