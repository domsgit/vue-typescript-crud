FROM node:latest
ADD . /code
WORKDIR /code
EXPOSE 4000
RUN npm config set registry http://registry.npm.taobao.org/ && npm install && npm run build
ENTRYPOINT ["npm", "run"]
CMD ["production"]
