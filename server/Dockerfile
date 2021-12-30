FROM node:14

# Make directory and change to it
WORKDIR /usr/server

# Copy `package.json` and `package-lock.json` into current directory
COPY package*.json ./

# Install production deps
RUN npm ci

# Copy all files
COPY . .

# Expose PORT 8000
EXPOSE 8000

# Run `npm start` when container runs
CMD ["npm", "start"]
