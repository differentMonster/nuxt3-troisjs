FROM node:12.11.1

# update server
RUN apt-get update

# Copy / Target Main Folder
COPY . /opt/frontend

WORKDIR /opt/frontend

# install dependency
RUN npm install

# set app serving to permissive / assigned
# ENV HOST 0.0.0.0

# output port
EXPOSE 3000

CMD [ "npm", "run", "dev" ]
