FROM node:12-alpine as base

WORKDIR /srv

#copy package.json
COPY package*.json /srv/
COPY .npmrc /srv/

# Copy source files
COPY . /srv/

RUN npm install && chown -R node:node /srv ;
RUN npm install --save node-sass

# Use a specific user.  TODO: Create a new one with specific rights??
USER node

EXPOSE 3000

# DEPLOY FOR DEVELOPMENT
FROM base AS develop
# start the app
CMD npm run dev


# DEPLOY TO STAGING
FROM base AS staging

ENV BACKEND_BASE_URL https://cs-staging-backend.thomaur.dev
RUN npm run build
# start the app
CMD npm start

# DEPLOY TO PRODUCTION
FROM base AS production

ENV BACKEND_BASE_URL https://backend.codesnippet.tech
RUN npm run build
# start the app
CMD npm start
