SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

CREATE TABLE `categorias` (
  `id` bigint(10) NOT NULL,
  `nombre` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `categorias` (`id`, `nombre`) VALUES
(1, 'Auto'),
(2, 'Moto'),
(4, 'Camioneta');

CREATE TABLE `vehiculos` (
  `id` bigint(10) NOT NULL,
  `nombre` varchar(30) NOT NULL,
  `descripcion` text NOT NULL,
  `precio` int(10) NOT NULL,
  `imagen` varchar(100) NOT NULL,
  `categoria_id` bigint(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `vehiculos` (`id`, `nombre`, `descripcion`, `precio`, `imagen`, `categoria_id`) VALUES
(12, 'Toyota Hilux SRX 2.8 at6 4×4', 'La Toyota Hilux SRX suma un marco cromado más generoso, se modificaron las ópticas (por dentro), los antiniebla, los faros traseros y también las llantas, en esta versión tope de gama. A la hora de hablar del equipamiento de esta Toyota Hilux SRX que, recordemos, es el pináculo de gama de la familia Hilux, la lista es larga y contempla muchas novedades que vamos a repasar. Una bienvenida incorporación son los sensores delanteros de estacionamiento que se complementan con los traseros y con la cámara de retroceso, con lo cual ya no tenés excusa para encajar los 5,3 metros de la Hilux.', 9350000, 'image-1657587283302.png', 4);


ALTER TABLE `categorias`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `vehiculos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_categoria_vehiculoid` (`categoria_id`);


ALTER TABLE `categorias`
  MODIFY `id` bigint(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

ALTER TABLE `vehiculos`
  MODIFY `id` bigint(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;


ALTER TABLE `vehiculos`
  ADD CONSTRAINT `fk_categoria_vehiculoid` FOREIGN KEY (`categoria_id`) REFERENCES `categorias` (`id`) ON DELETE CASCADE;
COMMIT;
