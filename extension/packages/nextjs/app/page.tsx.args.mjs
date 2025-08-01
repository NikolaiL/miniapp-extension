// Reference the example args file: https://github.com/scaffold-eth/create-eth-extensions/blob/example/extension/packages/nextjs/app/page.tsx.args.mjs
// Reference the template file that will use this file: https://github.com/scaffold-eth/create-eth/blob/main/templates/base/packages/nextjs/app/page.tsx.template.mjs

// Default args:
export const preContent = `import { MiniappUserInfo } from "~~/components/MiniappUserInfo";`;
export const description = `
{/* MiniApp User Info */}
<MiniappUserInfo />
<p className="text-center text-lg">
  Get started by editing{" "}
  <code className="italic bg-base-300 text-base font-bold max-w-full break-words break-all inline-block">
    packages/nextjs/app/page.tsx
  </code>
</p>
<p className="text-center text-lg">
  Edit your smart contract{" "}
  <code className="italic bg-base-300 text-base font-bold max-w-full break-words break-all inline-block">
    YourContract.sol
  </code>{" "}
  in{" "}
  <code className="italic bg-base-300 text-base font-bold max-w-full break-words break-all inline-block">
    packages/hardhat/contracts
  </code>
</p>
`;
export const externalExtensionName = "miniapp";
export const fullContentOverride = "";
