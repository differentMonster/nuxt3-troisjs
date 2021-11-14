# Dockerfile
FROM node:12.11.1

# update and install dependency
RUN apt-get update

# copy / target Main Folder
COPY . /opt/frontend

# work in folder
WORKDIR /opt/frontend

# install dependency
RUN npm install

# set app serving to permissive / assigned
# ENV HOST 0.0.0.0

# output port
EXPOSE 3000

CMD [ "npm", "run", "dev" ]
