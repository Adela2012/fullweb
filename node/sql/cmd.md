# SQL

### 连接、退出
`mysql -h localhost -u root -P 3306 -p`
1. -h: 数据库IP地址（localhost: 127.0.0.1）
1. -u: mysql数据库登录名（root: 超级管理员）
1. -P: 数据库端口号（默认3306，可省略）
1. -p: 密码（推荐回车后输入）

exit 退出


## 常用命令行
- 查询数据库: 
show databases;

- 创建test数据库: 
create database test character set utf8 collate utf8_general_ci;

- 使用: 
use test;

- 创建TBL_RESULT表: 
CREATE TABLE IF NOT EXISTS TBL_RESULT (
    id INT UNSIGNED AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    score INT UNSIGNED NOT NULL,
    PRIMARY KEY(id)
);

- 查看表
show tables;

- 查看表有什么字段
desc TBL_RESULT;

- 修改表字段
ALTER TABLE TBL_RESULT MODIFY COLUMN score INT(20) unsigned;

- 添加数据
INSERT INTO TBL_RESULT (name, score) VALUES ('alice', 20);

- 查询数据
select * from TBL_RESULT;

- 修改数据
update TBL_RESULT SET name='adela' where id = 1;

- 删除数据
DELETE FROM TBL_RESULT WHERE name='adela';

- ???
turncate Table TBL_RESULT;

- 条件查询
SELECT name, score FROM TBL_RESULT WHERE score > 60 ORDER BY score DESC;

- 聚合查询
SELECT name, AVG(score) from TBL_RESULT GROUP BY name;


- 连接查询