FROM node:15.1.0-alpine3.10 as builder
WORKDIR /Front-end
COPY . .
RUN npm i
RUN npm build --prod

FROM nginx:1.19.4
COPY --from=builder /Front-end/dist/Front-end /usr/share/nginx/html
EXPOSE 80
CMD ["nginx","-g","daemon off;"]