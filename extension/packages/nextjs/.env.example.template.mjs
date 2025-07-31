import { withDefaults } from "../../../utils.js";

const contents = ({ additionalVars }) => {
  return `# Template for NextJS environment variables.

# For local development, copy this file, rename it to .env.local, and fill in the values.
# When deploying live, you'll need to store the vars in Vercel/System config.

# If not set, we provide default values (check \`scaffold.config.ts\`) so developers can start prototyping out of the box,
# but we recommend getting your own API Keys for Production Apps.

# To access the values stored in this env file you can use: process.env.VARIABLENAME
# You'll need to prefix the variables names with NEXT_PUBLIC_ if you want to access them on the client side.
# More info: https://nextjs.org/docs/pages/building-your-application/configuring/environment-variables
NEXT_PUBLIC_ALCHEMY_API_KEY=
NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=
${additionalVars.join("\n")}
`
};

export default withDefaults(contents, {
  additionalVars: `# essential miniapp related variables
NEXT_PUBLIC_ONCHAINKIT_PROJECT_NAME=
NEXT_PUBLIC_URL=
NEXT_PUBLIC_ONCHAINKIT_API_KEY=

# essential miniapp manifest related  variables
# you can get create them at https://farcaster.xyz/~/developers/mini-apps/manifest
# required for production
FARCASTER_HEADER=
FARCASTER_PAYLOAD=
FARCASTER_SIGNATURE=

# optional miniapp related variables
NEXT_PUBLIC_APP_ICON=
NEXT_PUBLIC_APP_SUBTITLE=
NEXT_PUBLIC_APP_DESCRIPTION=
NEXT_PUBLIC_APP_SPLASH_IMAGE=
NEXT_PUBLIC_SPLASH_BACKGROUND_COLOR=
NEXT_PUBLIC_APP_PRIMARY_CATEGORY=
NEXT_PUBLIC_APP_HERO_IMAGE=
NEXT_PUBLIC_APP_TAGLINE=
NEXT_PUBLIC_APP_OG_TITLE=
NEXT_PUBLIC_APP_OG_DESCRIPTION=
NEXT_PUBLIC_APP_OG_IMAGE=
`
});