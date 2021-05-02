FROM node:7

ADD ./nodejs-hello-world/app.js /app.js

ENTRYPOINT [ "node", "app.js" ]