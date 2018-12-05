export const CATEGORIES_DOCTYPE = 'io.cozy.passwords.categories'

export const categoriesQuery = client => client.find(CATEGORIES_DOCTYPE)
