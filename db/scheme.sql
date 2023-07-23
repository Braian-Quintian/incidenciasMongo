CREATE DATABASE db_incidenciasTecnicas;

USE db_incidenciasTecnicas;

CREATE TABLE TipoArea(
    id_tipo_area INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(25) NOT NULL UNIQUE
);

INSERT INTO TipoArea(nombre) VALUES
('Area Training'),
('Area Review');

CREATE TABLE AreaCampus(
    id_area INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(25) NOT NULL UNIQUE,
    tipo_area INT NOT NULL,
    FOREIGN KEY (tipo_area) REFERENCES TipoArea(id_tipo_area)
);

INSERT INTO AreaCampus (nombre, tipo_area) VALUES
('Apolo', 1),
('Artemis',1),
('Sputnik',1),
('Skylab',1),
('Corvus', 2),
('Endor',2);