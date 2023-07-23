Se inicia el proyecto con el comando:
```shell
npm init -y
```
Se instala nodemon para que se reinicie el servidor cada vez que se haga un cambio en el código, con el comando:
*Se instala nodemon en las dependecias de desarrollo*
```shell
npm i -E -D nodemon
```
Se instala express para crear el servidor, con el comando:
```shell
npm i -E express
```
Se instala dotenv para cargar las variables de entorno, con el comando:
```shell
npm i -E dotenv
```
Se instala mysql2 para la conexión con la base de datos, con el comando:
```shell
npm i -E mysql2
```
Se instala class-transformer para transformar los datos que se envían al servidor, con el comando:
```shell
npm i -E class-transformer
```
Se instala class-validator para validar los datos que se envían al servidor, con el comando:
```shell
npm i -E class-validator
```

Ejemplo para añadir un trainer:
```json
{
  "nombre":"Miguel",
  "email_personal":"miguel@gmail.com",
  "email_corporativo":"miguel@gmail.com",
  "telefono_movil":"1234567891",
  "telefono_residencia":"1234567891",
  "telefono_empresa":"1234567891",
  "telefono_movil_empresa":"1234567891"
}
```