import { WSController, OnWSConnection, Inject, OnWSMessage, WSEmit } from '@midwayjs/decorator';
import { Context } from '@midwayjs/socketio';
// eslint-disable-next-line node/no-extraneous-import
import { ILogger } from '@midwayjs/logger';

@WSController('/')
export class SocketController {
  @Inject()
  ctx: Context;

  @Inject()
  logger: ILogger;

  @OnWSConnection()
  // XXX
  @WSEmit('server-authenticated')
  async onConnectionMethod() {
    this.logger.info('client connect', this.ctx.id);
    const query = this.ctx.handshake.query;
    this.logger.info('query', JSON.stringify(query));
    this.ctx.join('p2p');
    return 'ok';
  }

  @OnWSMessage('owt-message')
  async gotMessage(msg) {
    this.logger.debug('message', JSON.stringify(msg));
    this.ctx.to('p2p').emit('owt-message', {
      from: msg.id,
      data: msg.data
    })
  }
}
