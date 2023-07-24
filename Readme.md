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
Ejemplo para añadir un equipo:
```json
{
  "nombre": "Laptop",
  "marca": "hp",
  "modelo": "ELITEBOOK",
  "numero_serie": "7KWY"
}
```
Ejemplo para añadir una incidencia:
```json
{
  "fecha": "2023-07-22",
  "descripcion": "Se ha producido un fallo en el sistema",
  "equipo_id":1,
  "estado_id":2,
  "tipo_incidencia":3,
  "trainer_id":1,
  "categoria_id":1 
}
```

Para usar los endpoints necesitas obtener un token de permison en:
/autorizacion/:id/:nombre

Endpoint para traer todas las incidencias
METHOD GET:
http://127.127.127.127:5050/incidencias/
Para traer la incidencia con el id del equipo afectado:
http://127.127.127.127:5050/incidencias/id
donde id es el identificador del equipo afectado

