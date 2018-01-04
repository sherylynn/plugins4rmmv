FROM node:8.9.3
RUN mkdir -p /home/Service
WORKDIR /home/Service
# COPY . /home/Service
RUN npm install
EXPOSE 80
CMD [ "npm", "run","dev" ]
