-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.11.16-MariaDB - MariaDB Server
-- Server OS:                    Win64
-- HeidiSQL Version:             12.15.0.7171
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for todo
CREATE DATABASE IF NOT EXISTS `todo` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_thai_520_w2 */;
USE `todo`;

-- Dumping structure for table todo.activity
CREATE TABLE IF NOT EXISTS `activity` (
  `Id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `UserId` int(10) unsigned NOT NULL,
  `Name` varchar(100) NOT NULL,
  `When` date NOT NULL,
  PRIMARY KEY (`Id`) USING BTREE,
  KEY `UserId` (`UserId`),
  CONSTRAINT `fj` FOREIGN KEY (`UserId`) REFERENCES `user` (`Id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_thai_520_w2;

-- Dumping data for table todo.activity: ~2 rows (approximately)
INSERT INTO `activity` (`Id`, `UserId`, `Name`, `When`) VALUES
	(1, 663440, 'ทำการบ้าน', '2026-04-10'),
	(3, 663440, 'ทำการบ้านadd1', '2026-04-10');

-- Dumping structure for table todo.user
CREATE TABLE IF NOT EXISTS `user` (
  `Id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `NationalId` char(13) NOT NULL,
  `Salt` char(24) NOT NULL,
  `HashedPassword` char(44) NOT NULL,
  `Title` varchar(100) NOT NULL,
  `FirstName` varchar(100) NOT NULL,
  `LastName` varchar(100) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=663441 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_thai_520_w2;

-- Dumping data for table todo.user: ~1 rows (approximately)
INSERT INTO `user` (`Id`, `NationalId`, `Salt`, `HashedPassword`, `Title`, `FirstName`, `LastName`) VALUES
	(663440, '1459901046003', 'test', 'test', 'Mr', 'Gorragod', 'Autokyotha');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
