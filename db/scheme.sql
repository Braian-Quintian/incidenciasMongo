CREATE DATABASE db_incidenciasTecnicas;

USE db_incidenciasTecnicas;

CREATE TABLE TipoArea(
    id_tipo_area INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(25) NOT NULL UNIQUE
);

CREATE TABLE AreaCampus(
    id_area INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(25) NOT NULL UNIQUE,
    tipo_area INT NOT NULL,
    FOREIGN KEY (tipo_area) REFERENCES TipoArea(id_tipo_area)
);

CREATE TABLE TipoIncidencia(
    id_tipo INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(25) NOT NULL UNIQUE
);

CREATE TABLE Categoria (
    id_categoria INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(25) NOT NULL UNIQUE
);

CREATE TABLE InventarioSalon(
    id_inventario INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    salon INT NOT NULL,
    FOREIGN KEY (salon) REFERENCES AreaCampus(id_area)
);
