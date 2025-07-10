# Seminaire_GraphQL# E-commerce API - NestJS + GraphQL + Apollo + Sequelize

## Description
API e-commerce complète construite avec NestJS, GraphQL, Apollo Server et Sequelize pour PostgreSQL. Conçue pour les moyennes entreprises nouvelles sur le marché de l'e-commerce.

## Fonctionnalités

### 🔐 Authentification & Autorisation
- JWT Authentication
- Register/Login avec bcrypt
- Guards pour protéger les routes

### 📦 Gestion des Produits
- CRUD complet des produits
- Gestion du stock
- Images et descriptions
- Catalogue produits avec pagination

### 🛒 Panier d'Achat
- Ajout/suppression d'articles
- Gestion des quantités
- Persistance par utilisateur
- Calcul automatique des totaux

### 📋 Gestion des Commandes
- Création de commandes depuis le panier
- Suivi des statuts (PENDING, PROCESSING, SHIPPED, DELIVERED, CANCELLED)
- Historique des commandes
- Adresses de livraison

### 💳 Paiement
- Intégration Stripe
- Payment Intents sécurisés
- Webhooks pour confirmation
- Gestion des échecs de paiement

### 🚚 Livraison
- Adresses de livraison
- Suivi des statuts
- Notifications automatiques

## Installation

```bash
# Cloner le repository
git clone <repository-url>
cd ecommerce-api

# Installer les dépendances
npm install

# Configurer la base de données
docker-compose up -d postgres redis

# Configurer les variables d'environnement
cp .env.example .env
# Éditer .env avec vos valeurs

# Démarrer l'application
npm run start:dev
```

## Configuration

### Variables d'environnement
- `DATABASE_URL`: URL de connexion PostgreSQL
- `JWT_SECRET`: Clé secrète pour JWT
- `STRIPE_SECRET_KEY`: Clé secrète Stripe
- `STRIPE_WEBHOOK_SECRET`: Secret webhook Stripe

### Base de données
L'application utilise Sequelize avec PostgreSQL. Les modèles sont automatiquement synchronisés au démarrage.

## Structure du projet

```
src/
├── auth/           # Authentification JWT
├── users/          # Gestion des utilisateurs
├── products/       # Catalogue produits
├── cart/           # Panier d'achat
├── orders/         # Gestion des commandes
├── payment/        # Intégration Stripe
├── models/         # Modèles Sequelize
└── main.ts         # Point d'entrée
```

## API GraphQL

L'API GraphQL est disponible à `http://localhost:3000/graphql`

### Endpoints principaux

#### Authentification
- `register(name, email, password)`: Inscription
- `login(email, password)`: Connexion

#### Produits
- `products`: Liste des produits
- `product(id)`: Détails d'un produit
- `createProduct(input)`: Créer un produit
- `updateProduct(id, input)`: Modifier un produit

#### Panier
- `cart`: Panier utilisateur
- `addToCart(productId, quantity)`: Ajouter au panier
- `removeFromCart(productId)`: Retirer du panier

#### Commandes
- `orders`: Commandes utilisateur
- `createOrder(shippingAddress)`: Créer une commande
- `updateOrderStatus(id, status)`: Mettre à jour le statut

#### Paiement
- `createPaymentIntent(orderId)`: Créer un payment intent Stripe

## Déploiement

### Docker
```bash
# Construire l'image
docker build -t ecommerce-api .

# Démarrer avec docker-compose
docker-compose up -d
```

### Production
1. Configurer les variables d'environnement de production
2. Utiliser une base de données PostgreSQL dédiée
3. Configurer Stripe en mode production
4. Activer HTTPS
5. Configurer la surveillance et les logs

## Sécurité

- JWT tokens avec expiration
- Validation des entrées avec class-validator
- Hachage des mots de passe avec bcrypt
- Protection CORS
- Validation des webhooks Stripe

## Tests

```bash
# Tests unitaires
npm run test

# Tests d'intégration
npm run test:e2e

# Couverture de code
npm run test:cov
```

## Contribution

1. Fork le projet
2. Créer une branche feature (`git checkout -b feature/nouvelle-fonctionnalite`)
3. Commit les changements (`git commit -am 'Ajout nouvelle fonctionnalité'`)
4. Push sur la branche (`git push origin feature/nouvelle-fonctionnalite`)
5. Créer une Pull Request

## License

MIT License - voir le fichier LICENSE pour plus de détails.