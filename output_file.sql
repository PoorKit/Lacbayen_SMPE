-- MySQL dump 10.13  Distrib 8.1.0, for Win64 (x86_64)
--
-- Host: localhost    Database: smpe
-- ------------------------------------------------------
-- Server version	8.1.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `customers`
--

DROP TABLE IF EXISTS `customers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customers` (
  `id` varchar(255) NOT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `contact_number` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customers`
--

LOCK TABLES `customers` WRITE;
/*!40000 ALTER TABLE `customers` DISABLE KEYS */;
INSERT INTO `customers` VALUES ('CST0AAB95','Ezekiel','Lacbayen','09661904893'),('CST8E10B3','Zephkiel','Lacbayen','09661904893'),('CSTFB31CF','Marian','Levianth','09568028439');
/*!40000 ALTER TABLE `customers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `packages`
--

DROP TABLE IF EXISTS `packages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `packages` (
  `id` varchar(255) NOT NULL,
  `warehouse_id` varchar(255) DEFAULT NULL,
  `package_type_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `customer_id` varchar(255) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `retrievedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `packages`
--

LOCK TABLES `packages` WRITE;
/*!40000 ALTER TABLE `packages` DISABLE KEYS */;
INSERT INTO `packages` VALUES ('PKG11AA5D','WH2B1A5C','PTCA598F','CST0AAB95','2023-08-15 12:41:34','2023-08-15 14:17:15'),('PKGC8D86B','WH2B1A5C','PTCA598F','CSTFB31CF','2023-08-15 13:43:58',NULL),('PKGEC2D7F','WH340C5D','PT16ED7A','CST8E10B3','2023-08-15 13:23:28',NULL);
/*!40000 ALTER TABLE `packages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `type`
--

DROP TABLE IF EXISTS `type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `type` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `type`
--

LOCK TABLES `type` WRITE;
/*!40000 ALTER TABLE `type` DISABLE KEYS */;
INSERT INTO `type` VALUES ('PT16ED7A','Medium'),('PT53FD62','Large'),('PT61E577','Extra large'),('PTCA598F','Small');
/*!40000 ALTER TABLE `type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `warehouse_type_capacity`
--

DROP TABLE IF EXISTS `warehouse_type_capacity`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `warehouse_type_capacity` (
  `warehouse_id` varchar(255) NOT NULL,
  `package_type_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `total_capacity` int DEFAULT NULL,
  `available_capacity` int NOT NULL,
  PRIMARY KEY (`warehouse_id`,`package_type_id`),
  KEY `type_id` (`package_type_id`),
  CONSTRAINT `warehouse_type_capacity_ibfk_1` FOREIGN KEY (`warehouse_id`) REFERENCES `warehouses` (`id`),
  CONSTRAINT `warehouse_type_capacity_ibfk_2` FOREIGN KEY (`package_type_id`) REFERENCES `type` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `warehouse_type_capacity`
--

LOCK TABLES `warehouse_type_capacity` WRITE;
/*!40000 ALTER TABLE `warehouse_type_capacity` DISABLE KEYS */;
INSERT INTO `warehouse_type_capacity` VALUES ('WH2B1A5C','PTCA598F',20,20),('WH340C5D','PT16ED7A',20,19),('WH340C5D','PTCA598F',40,40),('WHA563C9','PTCA598F',500,500);
/*!40000 ALTER TABLE `warehouse_type_capacity` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `warehouses`
--

DROP TABLE IF EXISTS `warehouses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `warehouses` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `warehouses`
--

LOCK TABLES `warehouses` WRITE;
/*!40000 ALTER TABLE `warehouses` DISABLE KEYS */;
INSERT INTO `warehouses` VALUES ('WH2B1A5C','Freyja aerospace'),('WH340C5D','Icarus international'),('WHA563C9','Continental warehouse solutions');
/*!40000 ALTER TABLE `warehouses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'smpe'
--
/*!50003 DROP FUNCTION IF EXISTS `DecrementAvailability` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_unicode_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'IGNORE_SPACE,ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` FUNCTION `DecrementAvailability`(input_warehouse_id VARCHAR(255), input_package_type_id VARCHAR(255)) RETURNS int
    DETERMINISTIC
BEGIN
    DECLARE current_capacity INT;
    
    -- Get the current available_capacity
    SELECT available_capacity INTO current_capacity
    FROM warehouse_type_capacity
    WHERE warehouse_id = input_warehouse_id AND package_type_id = input_package_type_id;
    
    -- Decrement the available_capacity by 1 if greater than 0
    IF current_capacity > 0 THEN
        UPDATE warehouse_type_capacity
        SET available_capacity = current_capacity - 1
        WHERE warehouse_id = input_warehouse_id AND package_type_id = input_package_type_id;
        RETURN 1; -- Success
    ELSE
        RETURN 0; -- Insufficient capacity
    END IF;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP FUNCTION IF EXISTS `GenerateUniqueID` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_unicode_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'IGNORE_SPACE,ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` FUNCTION `GenerateUniqueID`(prefix VARCHAR(3)) RETURNS varchar(255) CHARSET utf8mb4
    NO SQL
    DETERMINISTIC
BEGIN
  DECLARE new_id VARCHAR(255);
  SET new_id = CONCAT(prefix, UPPER(SUBSTRING(UUID(), 1, 6)));
  RETURN new_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP FUNCTION IF EXISTS `IncrementAvailability` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_unicode_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'IGNORE_SPACE,ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` FUNCTION `IncrementAvailability`(
    input_warehouse_id VARCHAR(255),
    input_package_type_id VARCHAR(255)
) RETURNS int
    DETERMINISTIC
BEGIN
    DECLARE current_capacity INT;
    DECLARE current_total_capacity INT;
    
    -- Get the current available_capacity
    SELECT available_capacity, total_capacity INTO current_capacity, current_total_capacity
    FROM warehouse_type_capacity
    WHERE warehouse_id = input_warehouse_id AND package_type_id = input_package_type_id;
    
    -- Decrement the available_capacity by 1 if greater than 0
    IF current_capacity < current_total_capacity  THEN
        UPDATE warehouse_type_capacity
        SET available_capacity = current_capacity + 1
        WHERE warehouse_id = input_warehouse_id AND package_type_id = input_package_type_id;
        RETURN 1; -- Success
    ELSE
        RETURN 0; -- Insufficient capacity
    END IF;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `InsertCustomer` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_unicode_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'IGNORE_SPACE,ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `InsertCustomer`(
  IN first_name VARCHAR(255),
  IN last_name VARCHAR(255),
  IN contact_number VARCHAR(255),
  OUT generated_id VARCHAR(255)
)
BEGIN
  DECLARE new_id VARCHAR(255);
  
  -- Generate a new unique ID for the customer
  SET new_id = GenerateUniqueID('CST');
  
  -- Check if the generated ID already exists
  WHILE EXISTS (SELECT 1 FROM Customers WHERE id = new_id) DO
    SET new_id = GenerateUniqueID('CST');
  END WHILE;
  
  -- Insert the new record
  INSERT INTO Customers (id, first_name, last_name, contact_number)
  VALUES (new_id, first_name, last_name, contact_number);
  
  -- Set the generated ID for the OUT parameter
  SET generated_id = new_id;
  
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `InsertPackages` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_unicode_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'IGNORE_SPACE,ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `InsertPackages`(
    IN TYPEINPUT VARCHAR(255),
    IN WAREHOUSEINPUT VARCHAR(255),
    IN CUSTOMERINPUT VARCHAR(255),
    OUT GENERATED_ID VARCHAR(255)
)
BEGIN
    DECLARE availablecapacity INT;
    DECLARE new_id VARCHAR(255);

    -- Decrement the available_capacity using the DecrementAvailability function
    SET availablecapacity = DecrementAvailability(WAREHOUSEINPUT, TYPEINPUT);
    IF availablecapacity > 0 THEN
        -- Generate a new unique ID for the package
        SET new_id = GenerateUniqueID('PKG');
        -- Check if the generated ID already exists
        WHILE EXISTS (
            SELECT 1
            FROM packages
            WHERE id = new_id
        )
        DO
            SET new_id = GenerateUniqueID('PKG');
        END WHILE;
        -- Set the generated ID for the OUT parameter
        SET GENERATED_ID = new_id;
        -- Insert the package
        INSERT INTO packages (
            id,
            package_type_id,
            warehouse_id,
            customer_id,
            createdAt
        )
        VALUES (
            GENERATED_ID,
            TYPEINPUT,
            WAREHOUSEINPUT,
            CUSTOMERINPUT,
            NOW()
        );
    ELSE
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Sorry, not available';
    END IF;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `InsertPackageType` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_unicode_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'IGNORE_SPACE,ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `InsertPackageType`(
  IN package_type_name VARCHAR(255),
  OUT generated_id VARCHAR(255)
)
BEGIN
  DECLARE new_id VARCHAR(255);
  
  -- Generate a new unique ID for the package type
  SET new_id = GenerateUniqueID('PT');
  
  -- Check if the generated ID already exists
  WHILE EXISTS (SELECT 1 FROM type WHERE id = new_id) DO
    SET new_id = GenerateUniqueID('PT');
  END WHILE;
  
  -- Insert the new record
  INSERT INTO type (id, name)
  VALUES (new_id, package_type_name);

  SET generated_id = new_id;
  
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `InsertWarehouse` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_unicode_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'IGNORE_SPACE,ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `InsertWarehouse`(
  IN warehouse_name VARCHAR(255),
  OUT generated_id VARCHAR(255)
)
BEGIN
  DECLARE new_id VARCHAR(255);
  
  -- Generate a new unique ID for the warehouse
  SET new_id = GenerateUniqueID('WH');
  
  -- Check if the generated ID already exists
  WHILE EXISTS (SELECT 1 FROM warehouses WHERE id = new_id) DO
    SET new_id = GenerateUniqueID('WH');
  END WHILE;
  
  -- Insert the new record
  INSERT INTO warehouses (id, name)
  VALUES (new_id, warehouse_name);
  
  -- Set the generated ID for the OUT parameter
  SET generated_id = new_id;
  
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `InsertWarehouseTypeCapacity` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_unicode_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'IGNORE_SPACE,ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `InsertWarehouseTypeCapacity`(
  IN input_warehouse_id VARCHAR(255),
  IN input_package_type_id VARCHAR(255),
  IN total_capacity INTEGER
)
BEGIN
  DECLARE existing_count INT;

  -- Check if the combination of warehouse_id and package_type_id already exists
  SELECT COUNT(*) INTO existing_count
  FROM warehouse_type_capacity
  WHERE warehouse_id = input_warehouse_id AND package_type_id = input_package_type_id;

  IF existing_count > 0 THEN
    SIGNAL SQLSTATE '45000'
    SET MESSAGE_TEXT = 'Warehouse already has the specified package type.';
  ELSE
    INSERT INTO warehouse_type_capacity (warehouse_id, package_type_id, total_capacity)
    VALUES (input_warehouse_id, input_package_type_id, total_capacity);
  END IF;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `RetrieveAndIncrementAvailability` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_unicode_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'IGNORE_SPACE,ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `RetrieveAndIncrementAvailability`(
    IN input_package_id VARCHAR(255),
    IN input_warehouse_id VARCHAR(255),
    IN input_package_type_id VARCHAR(255)
)
BEGIN
    DECLARE availableCapacity INT;
    DECLARE retrieved_status DATETIME;

    -- Call the IncrementAvailability function with the retrieved parameters
    SET availableCapacity = IncrementAvailability(input_warehouse_id, input_package_type_id);

    -- Get the retrievedAt value for the package
    SELECT retrievedAt INTO retrieved_status
    FROM packages
    WHERE id = input_package_id;

    -- If the package has not been retrieved (retrieved_status is NULL), proceed
    IF retrieved_status IS NULL THEN
        IF availableCapacity > 0 THEN
            -- Update the package to mark it as retrieved
            UPDATE packages
            SET retrievedAt = NOW()
            WHERE id = input_package_id;
        ELSE
            SIGNAL SQLSTATE '45000'
            SET MESSAGE_TEXT = 'Package retrieval and availability increment failed.';
        END IF;
    ELSE
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Package has already been retrieved.';
    END IF;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-08-15 22:36:23
