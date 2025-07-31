export const preContent = `
    import { MiniappProvider } from "./MiniappProvider";
`;

export const extraProviders = {
    'Miniapp.Provider': {
        value: "MiniappProvider",
    }
};