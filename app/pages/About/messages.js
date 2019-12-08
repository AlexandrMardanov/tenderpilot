/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage container.
 */
import { defineMessages } from 'react-intl'

export const scope = 'app.pages.About'

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the AboutPage container!',
  },
})
