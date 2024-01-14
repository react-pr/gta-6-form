FROM node:16-alpine

WORKDIR /app

COPY . .

RUN npm i

RUN pnpm i

EXPOSE 3000

CMD ["pnpm", "run", "dev"]