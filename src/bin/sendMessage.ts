#!/usr/bin/env node

import connect from '../activemq/connect';

/**
 * @author Sean(sean.snow@live.com) create at 2018/11/9
 */
const {DESTINATION, HEADER, BODY} = process.env;

console.log(`destination=${DESTINATION}`);
console.log(`header=${HEADER}`);
console.log(`body=${BODY}`);

if (!DESTINATION) {
  console.error('消息队列目标不能为空`DESTINATION`');
  process.exit(1);
}

let header = {};

if (HEADER) {
  try {
    header = JSON.parse(HEADER);
  } catch (e) {
    console.error(`解析header失败: ${e.message}`);
    throw e;
  }
}

connect(client => {
  client.send(DESTINATION, header, BODY);
  client.disconnect(() => console.log('发送消息成功'));
});

