FROM node:20

WORKDIR /resume

COPY package*.json ./

RUN pnpm install

COPY . .

CMD ["pnpm", "dev"]