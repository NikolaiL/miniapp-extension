// Reference the example args file: https://github.com/scaffold-eth/create-eth-extensions/blob/example/extension/packages/nextjs/services/web3/wagmiConfig.tsx.args.mjs
// Reference the template file that will use this file: https://github.com/scaffold-eth/create-eth/blob/main/templates/base/packages/nextjs/services/web3/wagmiConfig.tsx.template.mjs

// Default args:
export const preContent = `import { farcasterMiniApp as miniAppConnector } from "@farcaster/miniapp-wagmi-connector";`;
export const configOverrides = {
  connectors: `[miniAppConnector(), ...$$wagmiConnectors$$]`,
};
