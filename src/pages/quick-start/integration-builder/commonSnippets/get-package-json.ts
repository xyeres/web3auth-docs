export const getPackageJson = (chain: "eth" | "sol" | "starkex" | "starknet" | "tezos", isWhiteLabled: boolean, isCustomAuth: boolean) => {
  let code = `
    "@web3auth/base": "^1.1.0",
    "@web3auth/web3auth": "^1.1.0",`;

  if (isWhiteLabled || isCustomAuth || chain === "starkex" || chain === "starknet" || chain === "tezos") {
    code += `
    "@web3auth/openlogin-adapter": "^1.1.0",`;
  }
  switch (chain) {
    case "sol":
      code += `
    "@web3auth/solana-provider": "^1.0.0",
    "@solana/web3.js": "^1.36.0",`;
      break;

    case "starkex":
      code += `
    "@starkware-industries/starkex-js": "0.0.6",
    "@starkware-industries/starkware-crypto-utils": "^0.0.2",
    "elliptic": "^6.5.4",`;
      break;

    case "starknet":
      code += `
    "@starkware-industries/starkware-crypto-utils": "^0.0.2",
    "elliptic": "^6.5.4",
    "starknet": "^3.11.0",
    "web3": "^1.7.0",`;
      break;

    case "tezos":
      code += `
    "@taquito/signer": "^13.0.0",
    "@taquito/taquito": "^13.0.0",
    "@taquito/utils": "^13.0.0",
    "@tezos-core-tools/crypto-utils": "^0.0.7",`;
      break;

    default:
      code += `
    "@web3auth/ethereum-provider": "^1.0.0",
    "web3": "^1.7.0",`;
  }

  return code;
};
