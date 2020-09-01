export const requirePath = (assets: __WebpackModuleApi.RequireContext, name: string) => {
    const key = `./${name}`;
    return assets.keys().includes(key) ? assets(key).default : name;
};
