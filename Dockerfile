##
# ActiveMQ Client
##

FROM node:13-alpine

# Author
MAINTAINER Sean<sean.snow@live.com>

ENV WORKDIR=/application

RUN mkdir ${WORKDIR}
ADD lib ${WORKDIR}/lib
ADD package.json ${WORKDIR}
RUN cd ${WORKDIR} && npm install -g . && npm install --production

WORKDIR ${WORKDIR}
