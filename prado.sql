-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 04-05-2023 a las 00:02:03
-- Versión del servidor: 8.0.31
-- Versión de PHP: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `prado`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `novedades`
--

DROP TABLE IF EXISTS `novedades`;
CREATE TABLE IF NOT EXISTS `novedades` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(250) COLLATE utf8mb4_general_ci NOT NULL,
  `subtitulo` text COLLATE utf8mb4_general_ci NOT NULL,
  `cuerpo` text COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `novedades`
--

INSERT INTO `novedades` (`id`, `titulo`, `subtitulo`, `cuerpo`) VALUES
(1, 'Marcha atrás del Indec: finalmente, no postergará la publicación del dato de inflación de abril', 'El organismo estadístico había anunciado que la publicación se demoraría al lunes 15 para cumplir con la veda electoral de las provincias que votan el día anterior. Pero ante la polémica generada, se revirtió la decisión', 'El Indec dio marcha atrás con la decisión de posponer la publicación del Indice de Precios al Consumidor (IPC) de abril hasta después de las elecciones provinciales. Tras las numerosas críticas recibidas, la publicación se realizará en su fecha original, el viernes 12 de mayo.\r\n\r\nEn horas de la mañana, el Indec había informado que el dato inflacionario de abril no se publicaría en la fecha prevista sino tres días después, el lunes 15, debido a que la fecha original “coincidían con la veda de elecciones provinciales instaladas a posteriori de nuestro esquema de difusión anual”. El domingo 14 se vota en La Pampa, San Juan, Salta, Tucumán y Tierra del Fuego y la postergación, en teoría, apuntaba a no influir en la opinión pública con esos comicios.\r\n\r\nLos reproches no tardaron en llegar desde todos los sectores, en especial por parte de economistas y dirigentes de la oposición. A última hora de la tarde, el director del Indec, Marco Lavagna, informó que los cambios en el calendario quedaban sin efecto y que todos los informes se difundirían en su calendario original, dado a conocer un año atrás.\r\n\r\nLavagna, señaló el Indec, lamentó que “la intención de separar el trabajo estadístico del Instituto del proceso electoral fuera malinterpretada y se despertaran suspicacias sobre la integridad” del organismo estadístico que conduce.\r\n\r\n“Consideramos que es una buena práctica no dar información estadística en medio de la veda pero, dada la controversia ocasionada, las cuatro fechas se mantendrán en su esquema establecido originalmente”, señaló Lavagna. Según pudo saber Infobae, el titular del Indec consultó la decisión de retrotraer el cambio de fecha con el ministro de Economía, Sergio Massa, quien le manifestó su aprobación al respecto.'),
(2, 'Javier Mascherano dio a conocer la lista de la selección argentina para el Mundial Sub 20\r\n', 'El Jefecito difundió la nómina de futbolistas que deberán presentarse a entrenar el próximo lunes 8 de mayo con vistas al debut ante Ubzekistán. Garnacho, Paz y Buonanotte quedaron marginados\r\n', 'El Jefecito había dado a conocer inicialmente una nómina preliminar con 37 apellidos, pero ya de base recibió la negativa por dos de sus figuras: Nico Paz y Alejandro Garnacho. El mediocampista del Real Madrid había participado del Sudamericano de comienzos de año, pero ahora el Merengue optó por negarse a prestarlo. El Manchester United tomó la misma determinación con su joven promesa porque disputará la final de la FA Cup ante el City el próximo 3 de junio.\r\n\r\nLa baja de última hora fue la de Facundo Buonanotte, quien había conseguido un permiso del Brighton de Inglaterra tras dialogar con su entrenador pero finalmente dieron marcha atrás durante la mañana del miércoles.\r\n\r\nEl representativo juvenil albiceleste tendrá su debut el sábado 20 de mayo en el Estadio Único Madres de Ciudades de Santiago del Estero ante Ubzekistán en uno de los cuatro partidos que habrá ese día. El martes 23 de mayo volverá a presentarse en esa sede por el segundo encuentro del Grupo A contra Guatemala. El cierre para el anfitrión del torneo será el viernes 26 de mayo en el Bicentenario de San Juan contra Nueva Zelanda. Los tres encuentros se disputarán desde las 18.'),
(3, 'Curso Office avanzado', '123', '12');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user` varchar(250) COLLATE utf8mb4_general_ci NOT NULL,
  `password` varchar(250) COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `user`, `password`) VALUES
(1, 'nicolas', '81dc9bdb52d04dc20036dbd8313ed055');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
