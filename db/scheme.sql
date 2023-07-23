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