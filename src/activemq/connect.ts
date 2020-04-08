import { overTCP } from 'stompjs';

const {
  ACTIVEMQ_HOST = 'activemq.default',
  ACTIVEMQ_PORT = 61613,
  ACTIVEMQ_USER = 'admin',
  ACTIVEMQ_PWD = 'admin'
} = process.env;

console.log(`
HOST=${ACTIVEMQ_HOST}
PORT=${ACTIVEMQ_PORT}
USER=${ACTIVEMQ_USER}
PWD=${ACTIVEMQ_PWD}
`);

/**
 * @author Sean(sean.snow@live.com)
 * @date 2017/3/8
 */
export default (callback) => {
  const client = overTCP(ACTIVEMQ_HOST, ACTIVEMQ_PORT as any);
  client.connect(ACTIVEMQ_USER, ACTIVEMQ_PWD, () => callback && callback(client), e => {
    console.error(e);
  });
}
