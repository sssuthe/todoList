FROM node:carbon

#create the app directory that will hold the application inside the image
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
COPY . .

#This app runs on port 3000 so let's expose that
EXPOSE 3000

#And this will kick things off
CMD [ "npm", "start" ]

