FROM node:18
WORKDIR /home/node/app
COPY package*.json ./
RUN npm install
COPY . .

# docker build -t backend-db .    
#  docker run -dp 8000:8000 --network db backend-db sh -c "npx prisma db pull && npx prisma generate && npm run dev"