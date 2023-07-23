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

CREATE TABLE Equipo(
    id_equipo INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(25) NOT NULL UNIQUE,
    inventario INT NOT NULL,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    fecha_modificacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (inventario) REFERENCES InventarioSalon(id_inventario)
);

CREATE TABLE ModeloEquipo (
    id_modelo INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    marca VARCHAR(25),
    modelo VARCHAR(25),
    numero_serie VARCHAR(25),
    equipo_id INT NOT NULL,
    FOREIGN KEY (equipo_id) REFERENCES Equipo(id_equipo)
);

CREATE TABLE EstadoIncidencia (
    id_estado INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(25) NOT NULL UNIQUE
);

CREATE TABLE TipoCategoria (
    id_tipo_categoria INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    tipo_id INT NOT NULL,
    categoria_id INT NOT NULL,
    FOREIGN KEY (tipo_id) REFERENCES TipoIncidencia(id_tipo),
    FOREIGN KEY (categoria_id) REFERENCES Categoria(id_categoria)
);

