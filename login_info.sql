-- MySQL dump 10.13  Distrib 8.0.15, for Win64 (x86_64)
--
-- Host: localhost    Database: login_info
-- ------------------------------------------------------
-- Server version	8.0.15

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8mb4 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `users` (
  `comp` varchar(80) NOT NULL,
  `user` varchar(30) NOT NULL,
  `hash` char(32) DEFAULT NULL,
  PRIMARY KEY (`user`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('A.S.Enterprises  Bilaspur','A.S.ENTERPRISES','81dc9bdb52d04dc20036dbd8313ed055'),('Agrawal Agencies Kharsia','AAKHS','dd2bd34afd56277007385d653994bbeb'),('Sushmeet Enterprises Kharora','Aman chhabra','6fa335631c80f8a392d64859b13059e3'),('Shri Mahavir Namkeen Bhandar , Raipur','Amit','81dc9bdb52d04dc20036dbd8313ed055'),('Anand Sweet Mart Dhamtari','anandsweetmart','d3ba4f4998f0552d0db4a30cba33b643'),('A.S.Enterprises  Bilaspur','asenterprises','f8d7e30387bcb61e90c9123801361924'),('Ashish Agencies Raigarh','ashish agencies','eac0d3108b72bca89639cd56e166aa22'),('Balaji Enterprises  Raipur','Balaji enterprises ','81dc9bdb52d04dc20036dbd8313ed055'),('Bansal Agencies Korba','bansalagencies','1532dff5b1890c6b4977eabe46682fef'),('Raj Agency , Jagdalpur','CHOKHENDRA','a27168de7668ec04f7fb60ce95e9e7c4'),('Chopda Agencies Mungeli','chopda agency','8c249675aea6c3cbd91661bbae767ff1'),('Direct Sales &amp; Godown Sales','ds','522748524ad010358705b6852b81be4c'),('Jain Agencies , Bhanupratappur','gaurav','114cdc3f5ef7d129bbcffe57426bafab'),('Goyal Marketing,Raipur','Goyal','be26abe76fb5c8a4921cf9d3e865b454'),('Goyal Traders Baloda','GoyalTraders','9a4aeb93a3d37fe371f9e6fe442d2ad2'),('Gurudev Agencies Baghbhara','gurudev230','44c854ee560ea8c0d7b728552a3b2962'),('Harsh Agencies Bodla','harshbodla','830a8da589a4ffc3e646c813895e28cb'),('Hariomkar Food Products Pvt, Ltd, Nagpur','ho','b5d9b59113086d3f9f9f108adaaa9ab5'),('International Traders Saraipali','INTERNATIONAL','827ccb0eea8a706c4c34a16891f84e7b'),('Jain Agencies Rajim','JAIN AGENCIES','d41d8cd98f00b204e9800998ecf8427e'),('Jagdish Prasad Gajanand Neora','JG1008','12f73080e04ce0d8e95defb577ebc3f4'),('Keerti Enterprises Bilaspur','keertient','5b98c53a9816908cabbebee6b90d4270'),('Love Traders  Bilaspur','LOVETRADERS','d79c8788088c2193f0244d8f1f36d2db'),('Lucky Traders Raipur','Lucky','8977ecbb8cb82d77fb091c7a7f186163'),('Majisha Agencies Jagdalpur','MAJISHA','e10adc3949ba59abbe56e057f20f883e'),('Majisha Agencies Jagdalpur','MAJISHA1','c26820b8a4c1b3c2aa868d6d57e14a79'),('Mamta Enterprises Sakti','mamta','f254622b73b0ed480fab48f98ae142c1'),('Manohar Kirana Store , Rajnandgaon','Manoher','0014963c080ed8561a76d8b0d8769058'),('M.P.Sales,Bilaspur','MPSALES','9b1d543d06df1f5481140dd5bd9e4792'),('J.K.Traders  Bilaspur','naveenagrawal12345@yahoo.in','2d6581608eb348b475380b28817af3f4'),('New Khalsa Agencies  Durg','New khalsa agencies','02cdc9356f9aee7a098bf00c3176f5bd'),('Patro Cold Drink, Kawardha','patrocoldrinks','31952f68a3bea28b0cbd1f252782dfae'),('Gurumukh Das Bharat Lal Raigarh','pawanvalecha','bec052dae7837d3f495baa5f8d227088'),('Pooja Trading Bilaspur','Pooja','1724344e7e1d5364fc141b36b3bfcb8a'),('Punjab Agencies Bemetara','punjab agency bmt','a9963e4664ea867df3b5395780a66e2e'),('Refresh and Recharge  Durg','PUSHKAR.RNR','7b3cd89c0034230ec6448544127d462a'),('Raj Agency , Jagdalpur','rajagency','6316df6403947247064e779f5014d718'),('Om Prakash Jain Raipur','rajesh','8aa903e40952a84bd7177ad2daeb5962'),('Suresh Kirana Store Bilaspur','RAMCHAND','7d2b92b6726c241134dae6cd3fb8c182'),('Rani Sati Agency  Champa','ranisati','028a6dc5d9636a066e1462443286b95d'),('Fateh Agencies  Durg','Ranveer singh','0ffaca95e3e5242ba1097ad8a9a6e95d'),('Ratan Agencies, Dallirajhara','ratanagy','cf2b8dd5a367b5c88488ee5dcc5d9c74'),('Ravi Kirana  Sambalpur','Ravi93','7e863269ed9b40426ddf7321404b0625'),('Shivanand Enterprises Raipur','sanjay','827ccb0eea8a706c4c34a16891f84e7b'),('Sharda Genral Stores Chandrapur','Sharda85','7df1b7ce3491c78939c7c1498e959655'),('Sheetal Agency  Kawardha','shashikant','9797d07a91d908428855987fc117e837'),('Shri Majisa Agency Kondagoan','shri majisa agency','e3958a8c7218de842b0db063b56cc2dd'),('Shri Ji Daily Needs &amp; Agencies Mahasamund','shriji','d92d6cf84a8b16a00af91558b3c495f9'),('Shri Mahavir Agencies Kirandul','Sri mahavir agencies','e10adc3949ba59abbe56e057f20f883e'),('T.C..K. Traders Takhatpur (Bilaspur)','TCKTRADERS','4aecfbe5d21e3f7912bf8eb29124423a');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-04-29 15:50:20
