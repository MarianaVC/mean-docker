#Crear la imagen para docker de la imagen oficial de Node de dockerhub

FROM node:6

#Crear el directorio donde se pondrá la app

RUN mkdir -p /usr/src/app

# Morvese al directorio para que todos los comandos se ejecuten ahí mismo

WORKDIR /usr/src/app

# Copiar las dependencias de nuestra app de express

COPY package.json /usr/src/app

# Instalarlas

RUN npm install

# Copiar el código de la app al contenedor de docker

COPY . /usr/src/app

# Especificar en qué puerto debe correr la app

EXPOSE 3000

# Correr la app

CMD ["npm", "start"]