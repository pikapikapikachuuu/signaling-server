import { join } from 'path';
import { Configuration } from '@midwayjs/decorator';
import * as socketio from '@midwayjs/socketio';

@Configuration({
  imports: [socketio],
  importConfigs: [join(__dirname, './config')],
})
export class MainConfiguration {
  async onReady() {}
}
