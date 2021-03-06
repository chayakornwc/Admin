-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 21, 2018 at 02:24 PM
-- Server version: 10.1.26-MariaDB
-- PHP Version: 7.1.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `lpru_conference`
--

-- --------------------------------------------------------

--
-- Table structure for table `course`
--

CREATE TABLE `course` (
  `course_id` int(3) NOT NULL,
  `course_name` varchar(255) NOT NULL,
  `update_log` text NOT NULL,
  `time_stamp` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE CURRENT_TIMESTAMP
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `registration`
--

CREATE TABLE `registration` (
  `id` int(11) NOT NULL,
  `user_group` int(11) NOT NULL,
  `prefix` varchar(6) NOT NULL,
  `first_name` varchar(120) NOT NULL,
  `last_name` varchar(120) NOT NULL,
  `gender` varchar(6) NOT NULL,
  `address` varchar(120) NOT NULL,
  `city` varchar(55) NOT NULL,
  `district` varchar(55) NOT NULL,
  `province` varchar(55) NOT NULL,
  `email` varchar(125) NOT NULL,
  `major` varchar(120) DEFAULT NULL,
  `affiliation` int(2) DEFAULT NULL,
  `company` varchar(125) NOT NULL,
  `username` varchar(64) NOT NULL,
  `password` varchar(64) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `registration`
--

INSERT INTO `registration` (`id`, `user_group`, `prefix`, `first_name`, `last_name`, `gender`, `address`, `city`, `district`, `province`, `email`, `major`, `affiliation`, `company`, `username`, `password`) VALUES
(10, 2, 'นาย', 'ชยากร', 'แก้ววงศ์', 'ชาย', '806 moo 3 wiang', 'chiang sean', 'chiang sean', 'chiang rai', 'whitecat.chayakorn@gmail.com', 'วิศวกรรมซอฟต์แวร์', NULL, 'มหาวิทยาลัยราชภัฏลำปาง', 'admin', '8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92'),
(11, 0, 'นาย', 'chayakorn', 'kaewwong', 'ชาย', '806 moo 3 wiang', 'chiang sean', 'เชียงแสน', 'chiang rai', 'whitecat.chayakorn@gmail.com', NULL, NULL, 'ราชภัฏลำปาง', 'chayakorn3', '15e2b0d3c33891ebb0f1ef609ec419420c20e320ce94c65fbc8c3312448eb225');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `course`
--
ALTER TABLE `course`
  ADD PRIMARY KEY (`course_id`);

--
-- Indexes for table `registration`
--
ALTER TABLE `registration`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `course`
--
ALTER TABLE `course`
  MODIFY `course_id` int(3) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `registration`
--
ALTER TABLE `registration`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
