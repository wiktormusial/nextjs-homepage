FROM node:16-alpine AS deps
WORKDIR /app 
COPY package.json package-lock.json ./
RUN npm ci

FROM node:16-alpine AS BUILD_IMAGE
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build
RUN rm -rf node_modules
RUN npm ci

FROM node:16-alpine
ENV NODE_ENV production
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001
COPY --from=BUILD_IMAGE --chown=nextjs:nodejs /app/package.json /app/package-lock.json ./
COPY --from=BUILD_IMAGE --chown=nextjs:nodejs /app/node_modules ./node_modules
COPY --from=BUILD_IMAGE --chown=nextjs:nodejs /app/.next ./.next
COPY --from=BUILD_IMAGE --chown=nextjs:nodejs /app/next.config.js  ./
USER nextjs
CMD ["npm", "start"]
