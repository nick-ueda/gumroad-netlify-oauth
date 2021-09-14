import simpleOauth from 'simple-oauth2'

const gumroadApi = 'https://api.gumroad.com'
const gumroadAuth = 'https://gumroad.com'
/* process.env.URL from netlify BUILD environment variables */
const siteUrl = process.env.URL || 'http://localhost:3000'

export const config = {
  /* values set in terminal session or in netlify environment variables */
  appId: process.env.GUMROAD_APP_ID,
  clientId: process.env.GUMROAD_CLIENT_ID,
  clientSecret: process.env.GUMROAD_CLIENT_SECRET,
  /* Gumroad oauth API endpoints */
  tokenHost: gumroadApi,
  authorizePath: `${gumroadAuth}/oauth/authorize`,
  tokenPath: `${gumroadApi}/oauth/token`,
  profilePath: `https://api.gumroad.com/v2/products`,
  /* redirect_uri is the callback url after successful signin */
  redirect_uri: `${siteUrl}/.netlify/functions/auth-callback`,
}

function authInstance(credentials) {
  if (!credentials.client.id) {
    throw new Error('MISSING REQUIRED ENV VARS. Please set GUMROAD_CLIENT_ID')
  }
  if (!credentials.client.secret) {
    throw new Error('MISSING REQUIRED ENV VARS. Please set GUMROAD_CLIENT_SECRET')
  }
  // return oauth instance
  return simpleOauth.create(credentials)
}

/* Create oauth2 instance to use in our two functions */
export default authInstance({
  client: {
    id: config.clientId,
    secret: config.clientSecret
  },
  auth: {
    tokenHost: config.tokenHost,
    tokenPath: config.tokenPath,
    authorizePath: config.authorizePath
  }
})
