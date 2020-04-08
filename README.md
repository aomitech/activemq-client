# ActiveMq-client
基于NodeJS使用stompjs开发的ActiveMQ客户端.

启动后立即向ActiveMQ发送一条消息.消息信息通过环境变量配置

## Getting Start

```
docker run -e HOST=192.168.1.1 -e PORT=61613 -e USER=admin -e PWD=admin -e DESTINATION=/queue/test aomitech/activemq-client sendMessage
```

## 环境变量

- HOST
    ActiveMQ 主机地址.默认:activemq.default
    
- PORT ActiveMQ 端口.默认: 61613
- USER 登录ActiveMQ用户名.默认admin
- PWD 登录ActiveMQ密码.默认admin
- DESTINATION 消息目标队列. 例如: /queue/test
- HEADER 消息头信息JSON格式
- BODY 发送的消息内容
