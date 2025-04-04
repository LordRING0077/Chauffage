#!/bin/bash
# Script de déploiement pour Cloudflare Workers

# Construire le projet Next.js (si nécessaire)
# npm run build

# Déployer le Worker
npx wrangler deploy src/index.js

