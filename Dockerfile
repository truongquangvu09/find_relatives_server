FROM node:18

#App directory
WORKDIR /find_relative

#Copy the pakage.json and yarn.lock files to the container
COPY package*.json yarn.lock ./

#Install dependencies
RUN npm install

#Copy the source code to the working directory
COPY . .

#Expose port 8080
EXPOSE 8080

#Run the application
CMD ["npm","run","start"]


