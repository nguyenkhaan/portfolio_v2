FROM node:24-alpine
WORKDIR /usr/app/dev

COPY . .
RUN npm install 
EXPOSE 5173 
CMD ["npm", "run", "dev", "--", "--host"]