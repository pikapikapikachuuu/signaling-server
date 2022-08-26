import { MidwayConfig, MidwayAppInfo } from '@midwayjs/core';

export default (appInfo: MidwayAppInfo) => {
  return {
    socketIO: {
      port: 8096,
    },
  } as MidwayConfig;
};
