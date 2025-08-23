# Farcaster MiniApp Extension for SE-2

This extension provides basic functionality to start a Farcaster MiniApp development with [Scaffold-ETH 2](https://scaffoldeth.io)


## Installation

1. Create a new project with MiniApp extension:

```typescript
npx create-eth@latest -e NikolaiL/miniapp-extension
```


2. After doing 

```typescript
yarn chain
yarn deploy
yarn start
```

start ngrok (or other) externally available tunnel

```typescript
ngrok http http://localhost:3000 --url https://yoursubdomian.ngrok.dev
```

3. Go to https://farcaster.xyz/~/developers/mini-apps/preview , enter your app domain and click "Open URL as Mini App"


Your miniapp should load and show your Farcaster Wallet.

![MiniApp Screenshot](images/MiniAppScreenshot.png)

TODO:
- add manifest generation
- add ponder option

