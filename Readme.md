# Incidencias Técnicas - Sistema de Gestión

![Logo](./assets/img/diagrama.png)

Este proyecto es un sistema de gestión de incidencias técnicas, diseñado para registrar y controlar las incidencias relacionadas con el equipo y el personal de una organización. Permite a los usuarios crear y administrar incidencias, así como realizar un seguimiento de su estado y resolución.

## Características principales

- Registro de usuarios y entrenadores.
- Gestión de equipos y su inventario.
- Creación y seguimiento de incidencias técnicas.
- Asignación de entrenadores a incidencias para su seguimiento.
- Información detallada sobre el estado y la categoría de las incidencias.
- Generación de tokens de permiso para acceder a los endpoints protegidos.

## Tecnologías utilizadas

- Node.js como plataforma de ejecución.
- Express.js para la creación del servidor web.
- MySQL como base de datos relacional.
- TypeScript para un desarrollo más estructurado.
- class-transformer y class-validator para la validación y transformación de datos.
- dotenv para la gestión de variables de entorno.
- nodemon para reiniciar automáticamente el servidor en desarrollo.

## Diagrama de la base de datos

![Diagrama_ER](./assets/img/diagrama.png)

## Instalación y configuración

1. Clone este repositorio en su máquina local.
2. Ejecute `npm install` para instalar las dependencias del proyecto.
3. Cree una base de datos MySQL y actualice las credenciales de conexión en el archivo `config.ts`.
4. Ejecute el comando `npm run build` para compilar el código TypeScript a JavaScript.
5. Inicie el servidor con `npm start`.

## Uso

Para utilizar el sistema de gestión de incidencias técnicas, primero debe obtener un token de permiso para acceder a los endpoints protegidos. Puede obtenerlo haciendo una solicitud a la siguiente URL:

```http
GET http://localhost:5050/autorizacion/:id/:nombre
```
Reemplace `id` y `:nombre` con los datos del usuario que va a utilizar los endpoints.

Una vez que tenga el token, inclúyalo en el encabezado de sus solicitudes a los endpoints protegidos utilizando la siguiente clave-valor:
```http
Authorization: Bearer tu_token_aqui
```
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