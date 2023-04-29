FROM node:latest

# COPY all files
COPY . ./app

# create destination directory
WORKDIR /app

# delete node_modules
RUN rm -rf node_modules

# delete yarn-lock.json
RUN rm -rf yarn.lock


# Install dependencies
RUN yarn install

# build
RUN yarn build

# Expose port 8081
EXPOSE 8081

# Start the app
CMD ["yarn", "dev"]
