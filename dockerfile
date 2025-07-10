FROM node:18-alpine

# Ajout des dépendances système nécessaires
RUN apk add --no-cache python3 make g++

WORKDIR /app

# Copie des fichiers package.json
COPY package*.json ./

# Installation des dépendances
RUN npm ci --only=production

# Copie du code source
COPY . .

# Build de l'application
RUN npm run build

# Exposition du port
EXPOSE 3000

# Démarrage de l'application
CMD ["npm", "run", "start:prod"]