export const PASSWORDS_DOCTYPE = 'io.cozy.passwords.values'

export const passwordsQuery = client => client.find(PASSWORDS_DOCTYPE)
