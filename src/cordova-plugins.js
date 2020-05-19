export const isMobile = () => window.cordova && ['Android', 'iOS'].some((s) => window.device.platform === s);
export const lineLogin = () => window.lineLogin;
