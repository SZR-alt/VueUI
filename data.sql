
CREATE DATABASE IF NOT EXISTS webtn2006 DEFAULT CHARACTER SET 'utf8';

USE webtn2006 ;

CREATE  TABLE users(
 id MEDIUMINT UNSIGNED NOT NULL KEY AUTO_INCREMENT,
 first_name VARCHAR(20) NOT NULL,
 last_name VARCHAR(20) NOT NULL
);

INSERT users(first_name,last_name) VALUES('A','B');
INSERT users(first_name,last_name) VALUES('C','D');
INSERT users(first_name,last_name) VALUES('E','F');
INSERT users(first_name,last_name) VALUES('G','H');

-- 将相关的字段或字符串进行拼接,可通过CONCAT()、CONCAT_WS()函数实现

-- 返回如果结果
-- id    fullname
-- 1       AB
-- 2       CD
-- 3       EF
-- 4       GH

-- CONCAT,CONCAT_WS(with separator)


SELECT id,CONCAT(first_name,'.',last_name) AS fullname FROM users;

SELECT id,CONCAT_WS('.',first_name,last_name) AS fullname FROM users;

SELECT CONCAT('A','-','B','-','C','-','D') ;

SELECT CONCAT_WS('-','A','B','C','D','E');