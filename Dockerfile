FROM node:18

# Set working directory
WORKDIR /usr/src/app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install --production

# Copy application files
COPY . .

# Expose the default Strapi port
EXPOSE 1337

# Run the application
CMD ["npm", "start"]
