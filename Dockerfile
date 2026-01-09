# based off of: https://www.docker.com/blog/how-to-dockerize-react-app/

FROM node:25-alpine

# Install packages
WORKDIR /app
COPY package*.json ./
RUN npm install

# Prepare application files
COPY . .
EXPOSE 3000

# Start container
CMD ["npm", "start"]
