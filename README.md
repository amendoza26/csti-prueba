# CSTI - Culqi
## Información general

Proyecto para proceso de tokenización de los datos de tarjetas y obtener los datos de la tarjeta (sin ccv) al incluir el token en peticion. Desarrollado con nodejs, typescript y jest.

## Requisitos

Asegúrate de tener instalado en tu máquina:

- Node.js
- npm (Administrador de paquetes de Node.js)

## Configuración

1. Clona este repositorio:
   En la terminal, dirigete a la ubicacion donde desees clonar el repositorio y ejecutar el siguiente comando:
   git clone https://github.com/amendoza26/csti-prueba

2. Ahora accede al proyecto usando el comando: cd csti-prueba
3. Ahora instala las dependencias del proyecto usando el comando: npm install
4. Ejecutar comando para iniciar redis en ambiente local:

- docker run -d --name redis-init -p 6379:6379 -p 8001:8001 redis/redis-stack:latest
  (Asegurarse que los puertos no estan siendo usados)

5. Configura las variables de entorno:

- Crea un archivo `.env` en la raíz del proyecto.
- Define variables de entorno como: JWT_KEY=misecreto

## Ejecución

1. Ejecutar `npm start` para ejecutar el proyecto localmente.

2. Para probar el servicio de creacion de token puede ser asi:
   localhost:4000/token
   body: {
   "email": "amendoza807@gmail.com",
   "card_number": 4111111111111111,
   "cvv": 123,
   "expiration_month": "12",
   "expiration_year": "2027"
   }

- Guardar el token de respuesta para el servicio de obtener datos de tarjeta.

3. Para probar el servicio de los datos de tarjeta puede ser asi:
   localhost:4000/card
   Header token: {{Ingresar token del servicio anterior}}

- Asi obtendra como respuesta los datos ingresados en la peticion anterior.
