-- CREATE DATABASE db_incidenciasTecnicas;

-- USE db_incidenciasTecnicas;

-- CREATE TABLE TipoArea(
--     id_tipo_area INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     nombre VARCHAR(25) NOT NULL UNIQUE
-- );
-- INSERT INTO TipoArea(nombre) VALUES
-- ('Area Training'),
-- ('Area Review');


-- CREATE TABLE AreaCampus(
--     id_area INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     nombre VARCHAR(25) NOT NULL UNIQUE,
--     tipo_area INT NOT NULL,
--     FOREIGN KEY (tipo_area) REFERENCES TipoArea(id_tipo_area)
-- );

-- INSERT INTO AreaCampus (nombre, tipo_area) VALUES
-- ('Apolo', 1),
-- ('Artemis',1),
-- ('Sputnik',1),
-- ('Skylab',1),
-- ('Corvus', 2),
-- ('Endor',2);


-- CREATE TABLE TipoIncidencia(
--     id_tipo INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     nombre VARCHAR(25) NOT NULL UNIQUE
-- );

-- INSERT INTO TipoIncidencia (nombre) VALUES
-- ('Leve'),
-- ('Moderada'),
-- ('Crítica');


-- CREATE TABLE Categoria (
--     id_categoria INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     nombre VARCHAR(25) NOT NULL UNIQUE
-- );
-- INSERT INTO Categoria(nombre) VALUES
-- ('Hardware'),
-- ('Software');

-- CREATE TABLE Equipo(
--     id_equipo INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     nombre VARCHAR(25) NOT NULL,
--     marca VARCHAR(25),
--     modelo VARCHAR(25),
--     numero_serie VARCHAR(25) UNIQUE,
--     salon INT NOT NULL,
--     fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--     fecha_modificacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
--     FOREIGN KEY (salon) REFERENCES AreaCampus(id_area)
-- );

-- CREATE TABLE EstadoIncidencia (
--     id_estado INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     nombre VARCHAR(25) NOT NULL UNIQUE
-- );
-- INSERT INTO EstadoIncidencia (nombre) VALUES
-- ('Abierta'),
-- ('En proceso'),
-- ('Cerrada'),
-- ('Pendiente de aprobación'),
-- ('Rechazada');

-- CREATE TABLE Trainer (
--     id_trainer INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     nombre VARCHAR(25) NOT NULL,
--     email_Personal VARCHAR(25) NOT NULL UNIQUE,
--     email_Corporativo VARCHAR(25) NOT NULL UNIQUE,
--     telefono_Movil VARCHAR(25) NOT NULL UNIQUE,
--     telefono_Residencia VARCHAR(25) NOT NULL UNIQUE,
--     telefono_Empresa VARCHAR(25) NOT NULL UNIQUE,
--     telefono_Movil_Empresarial VARCHAR(25) NOT NULL UNIQUE
-- );

-- CREATE TABLE Incidencia (
--     id_incidencia INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     fecha DATE NOT NULL,
--     descripcion VARCHAR(255) NOT NULL,
--     equipo_id INT NOT NULL,
--     estado_id INT NOT NULL,
--     tipo_incidencia INT NOT NULL,
--     trainer_id INT NOT NULL,
--     categoria_id INT NOT NULL,
--     fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--     fecha_modificacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
--     FOREIGN KEY (equipo_id) REFERENCES Equipo(id_equipo),
--     FOREIGN KEY (estado_id) REFERENCES EstadoIncidencia(id_estado),
--     FOREIGN KEY (tipo_incidencia) REFERENCES TipoIncidencia(id_tipo),
--     FOREIGN KEY (trainer_id) REFERENCES Trainer(id_trainer),
--     FOREIGN KEY (categoria_id) REFERENCES Categoria(id_categoria)
-- );
