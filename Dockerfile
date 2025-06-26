FROM node:24-alpine
WORKDIR /app
COPY package*.json ./
RUN chown -R node:node /app
USER node
RUN npm install
COPY --chown=node:node . .
EXPOSE 4000
CMD [ "node", "index.js" ]