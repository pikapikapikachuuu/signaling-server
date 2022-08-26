import { MidwayConfig, MidwayAppInfo } from '@midwayjs/core';

export default (appInfo: MidwayAppInfo) => {
  return {
  midwayLogger: {
    clients: {
      appLogger: {
        level: 'warn',
        consoleLevel: 'debug',
      }
    }
},
  } as MidwayConfig;
};
