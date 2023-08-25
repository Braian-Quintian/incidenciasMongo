# Incidencias Técnicas - Sistema de Gestión

<!-- ![Logo](./assets/img/logo.png) -->

Este proyecto es un sistema de gestión de incidencias técnicas, diseñado para registrar y controlar las incidencias relacionadas con el equipo de campus. Permite a los usuarios crear y administrar incidencias, así como realizar un seguimiento de su estado y resolución.

## Características principales

- Registro de entrenadores.
- Gestión de equipos y su inventario.
- Creación y seguimiento de incidencias técnicas.
- Asignación de entrenadores a incidencias para su seguimiento.
- Información sobre el estado y la categoría de las incidencias.
- Generación de tokens de permiso para acceder a los endpoints protegidos.

## Tecnologías utilizadas

- Node.js como plataforma de ejecución.
- Express.js para la creación del servidor web.
- Mongodb para la base de datos.
- > TypeScript para un desarrollo más estructurado.  (Ya no se utiliza)
- > class-transformer y class-validator para la validación y transformación de datos. (Ya no se utiliza)
- dotenv para la gestión de variables de entorno.
- nodemon para reiniciar automáticamente el servidor en desarrollo.

## Diagrama de la base de datos

![Diagrama_ER](./assets/img/diagrama.png)

## Dependencias que se usaron
Se usó la `v18.16.1` de NojeJS para este proyecto

## Instalación
1. Clona este repositorio en tu máquina local.
2. Asegúrate de tener instalado Node.js
3. Crea un archivo .env
4. Copia las variables de entorno del archivo `.env.example` y pegalas en el archivo `.env` que creaste.

  `Nota`: porfavor llena los campos vacios con la informacion correspondiente.

  `Recuerda que la informacion solitada la debes ingresar entre las "" correspondientes`

  ![.env](/assets/img/configuracion-env.png)

5. Abre una terminal

  ![terminal](/assets/img/terminal.png)

  presiona en neva terminal:

  ![nueva-terminal](/assets/img/nueva-terminal.png)

6. Ejecuta el comando `npm run install` para instalar las dependencias del proyecto

  una vez que haya finalizado la instalacion de las dependencias ejecuta el comando `npm run install-dev` para instalar la dependencia de desarrollo.

  ![npm-run-install](/assets/img/npm-run-install.png)

7. Ejecuta el comando `npm run dev` para iniciar el servidor

​	 ![npm-install](/assets/img/npm-run-dev.png)

1. ¡Felicitaciones!, ya has iniciado el servidor y la base de datos y puedes proceder a  utilizar los endpoints

2. `NOTA`: Para utilizar los endpoints recuerda que debes tener un token que se genera con el endpoint `/autorizacion` (en la siguienta parte se te muestra como puedes pedir el token y utilizarlo)

### Observacion: Para hacer los endpoints y generar los token debes tener ThunderClient instalado en visual studio code

- **Autorización**

  `NOTA`: Antes de utilizar cualquier endpoint debes pedir primero un token de autorizacion, se recomienda que lo guardes en un archivo de texto.

  *Obeservacion* el token solamente dura `30m`  después de este tiempo tendrás que pedir otro

  Este es el ejemplo para solicitar un token:
  ![token](/assets/img/pedirToken.png)

  - El `:id` es el id del usuario (por el momento puede ser cualquiera)
  - El `nombre_de_la_collection` es el nombre de la collection en la base de datos

  `NOTA`: No olvides reemplazar el `localhost` por la ip de tu servidor y el `5050` por el puerto que hayas definido en las variables de entorno, u/o que se estes utilizando.

```shell
  http://localhost:5050/autorizacion/:id/:nombre?tabla=nombre_de_la_tabla
```

`SPOILER`: se tiene pensado en el futuro reemplazar `:id` por el id de google al momento de generar el token, pero por el momento se queda así.

- Implementación del Token
    ![generar-token](assets/img/generar-token.png)
- Copia el token, ejemplo:
    - `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqc29uIjp7ImlkIjoiMTIzIiwibm9tYnJlIjoidXNlciIsImVuZHBvaW50Ijp7InRhYmxhIjoicm9sZXMifX0sImlhdCI6MTY5MDQ4MzExNywiZXhwIjoxNjkwNDg2NzE3fQ.2Mk17IBYsAmZi-e19E26E1oyObY43OBjBXK52ME8jvM`

- Luego debe colocar en la pestaña Headers de la siguiente manera:
  
- donde dice `header` escribe `Authorization` y pulsa en el recuadro para que se active el envió del token de autorización, así:

    ![implementacion-token](/assets/img/implementacion-token.png)

- y pega el token que habias copiado previamente:

    ![token-implementado](/assets/img/token-implementado.png)

- Una vez que hayas implementado el token puedes proceder a utilizar los endpoints.

**TENER EN CUENTA:**
  `NOTA`: recuerda que el token solamente dura `30m`  después de este tiempo tendrás que pedir otro
  `NOTA`: El token solo servira para la collection que lo solicitaste, si quieres acceder a otra collection deberas solicitar otro token y repetir el mismo proceso para implementarlo.
  `NOTA`: Si presentas algun error al momento de solicitar el token, revisa que hayas ingresado correctamente los datos, si el error persiste, revisa que la collection que estas solicitando exista en la base de datos.

- **LIMITES DE PETICION DE ENPOINTS**
  
  `NOTA`: Los endpoints tienen un limite de peticiones por minuto, si se excede el limite de peticiones por minuto, el servidor respondera con un error 429, si esto sucede, espera un minuto y vuelve a intentarlo.

# Endpoints de Incidencias Técnicas

A continuación, puede utilizar los siguientes endpoints para interactuar con el sistema:

### Trainers

- `GET /trainers/`: Obtener todos los entrenadores registrados.
- `POST /trainers/`: Crear un nuevo entrenador.

### Incidencias

- `GET /incidencias/`: Obtener todas las incidencias técnicas.
- `GET /incidencias/:id`: Obtener una incidencia por su ID.
- `POST /incidencias/`: Crear una nueva incidencia técnica.

### Equipos

- `GET /equipos/`: Obtener todos los equipos registrados.
- `POST /equipos/`: Crear un nuevo equipo.

### Ejemplos de JSON para crear
*Crear un entrenador:*
```json
{
  "nombre": "John Doe",
  "email_personal": "john.doe@example.com",
  "email_corporativo": "john.doe@company.com",
  "telefono_movil": "1234567890",
  "telefono_residencia": "9876543210",
  "telefono_empresa": "5555555555",
  "telefono_movil_empresa": "5555555555"
}
```
*Crear un equipo*
```json
{
  "nombre": "Laptop",
  "marca": "HP",
  "modelo": "EliteBook",
  "numero_serie": "ABC123"
}
```
Crear una incidencia tecnica
```json
{
  "fecha": "2023-07-22",
  "descripcion": "Se ha producido un fallo en el sistema.",
  "equipo_id": 1,
  "estado_id": 2,
  "tipo_incidencia": 3,
  "trainer_id": 1,
  "categoria_id": 1
}
```