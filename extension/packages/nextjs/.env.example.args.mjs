export const additionalVars = `#
# essential miniapp related variables
NEXT_PUBLIC_APP_NAME="Scaffold-ETH 2 MiniApp"
NEXT_PUBLIC_URL=https://mtt.ngrok.dev/

# essential miniapp manifest related  variables
# you can get create them at https://farcaster.xyz/~/developers/mini-apps/manifest
# required for production
FARCASTER_HEADER=eyJmaWQiOjM2NjcxMywidHlwZSI6ImF1dGgiLCJrZXkiOiIweDhENjIzMDQyN2EzNzk4NkQyNUZlNEQ1QjNkMGFhRUYxYjkyNGZFZDYifQ
FARCASTER_PAYLOAD=eyJkb21haW4iOiJtdHQubmdyb2suZGV2In0
FARCASTER_SIGNATURE=yyyVPpX63FAOjqUENJN2L5LmNWHLjet/2f9ap6q7/kwkM3io/oi+CTpl8iq/sS4+mSaTQSEw2c3sGG8Roa8bNhw=


# optional miniapp related variables
NEXT_PUBLIC_APP_ICON=${NEXT_PUBLIC_URL}/favicon.png
NEXT_PUBLIC_APP_SUBTITLE="Built with Scaffold ETH2"
NEXT_PUBLIC_APP_DESCRIPTION="Built with 🏗 Scaffold-ETH 2 and MiniApp Extension"
NEXT_PUBLIC_APP_SPLASH_IMAGE=${NEXT_PUBLIC_URL}/favicon.png
NEXT_PUBLIC_SPLASH_BACKGROUND_COLOR="#212638"
NEXT_PUBLIC_APP_PRIMARY_CATEGORY=developer-tools
NEXT_PUBLIC_APP_HERO_IMAGE=${NEXT_PUBLIC_URL}/thumbnail.jpg
NEXT_PUBLIC_APP_TAGLINE="Built with Scaffold ETH 2"
NEXT_PUBLIC_APP_OG_TITLE="Scaffold-ETH 2 MiniApp"
NEXT_PUBLIC_APP_OG_DESCRIPTION="Built with 🏗 Scaffold-ETH 2 and MiniApp Extension"
NEXT_PUBLIC_APP_OG_IMAGE=${NEXT_PUBLIC_URL}/thumbnail.jpg
NEXT_PUBLIC_APP_TAGS="Scaffold-ETH, MiniApp, Farcaster, Base, Ponder"
`;