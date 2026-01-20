use prj;

# 테이블 생성 DDL 추가

-- 1. 부모 테이블 (참조를 당하는 독립적인 테이블들)
CREATE TABLE `userinfo` (
    `user_no` int(10) NOT NULL AUTO_INCREMENT,
    `id` VARCHAR(32) NOT NULL,
    `pw` VARCHAR(255) NULL,
    `nickname` VARCHAR(10) NULL,
    `avatar` VARCHAR(255) NULL,
    `regdate` DATETIME DEFAULT CURRENT_TIMESTAMP,
    `recent_login` DATETIME NULL,
    `bgvolume` TINYINT DEFAULT 50,
    `efvolume` TINYINT DEFAULT 50,
    PRIMARY KEY (`user_no`)
);

CREATE TABLE `jobs` (
    `jobs_no` VARCHAR(255) NOT NULL,
    `vic_score` int(1) NULL,
    PRIMARY KEY (`jobs_no`)
);

CREATE TABLE `gamelog` (
    `game_no` VARCHAR(255) NOT NULL,
    `room_create_date` DATETIME DEFAULT CURRENT_TIMESTAMP,
    `start_date` DATETIME NULL,
    `end_date` DATETIME NULL,
    `vic_team` INT(1) NULL,
    PRIMARY KEY (`game_no`)
);

-- 2. 자식 테이블 (외래키 참조가 포함된 테이블들)
CREATE TABLE `friendslist` (
    `request_user_no` int(10) NOT NULL,
    `response_user_no` int(10) NOT NULL,
    `accept` enum('0','1') DEFAULT '0',
    PRIMARY KEY (`request_user_no`, `response_user_no`),
    FOREIGN KEY (`request_user_no`) REFERENCES `userinfo` (`user_no`),
    FOREIGN KEY (`response_user_no`) REFERENCES `userinfo` (`user_no`)
);

CREATE TABLE `roomlist` (
    `game_no` VARCHAR(255) NOT NULL,
    `room_title` VARCHAR(32) NULL,
    `lock` enum('T','F') DEFAULT 'F',
    `room_pw` INT(6) NULL,
    `participants` INT(1) DEFAULT 1,
    `max_par` INT(1) DEFAULT 8,
    `progress` enum('T','F') DEFAULT 'F',
    PRIMARY KEY (`game_no`),
    FOREIGN KEY (`game_no`) REFERENCES `gamelog` (`game_no`)
);

CREATE TABLE `vote` (
    `vote_id` INT NOT NULL AUTO_INCREMENT,
    `game_no` VARCHAR(255) NOT NULL,
    `Field` VARCHAR(255) NULL,
    `Field2` VARCHAR(255) NULL,
    PRIMARY KEY (`vote_id`),
    FOREIGN KEY (`game_no`) REFERENCES `gamelog` (`game_no`)
);

CREATE TABLE `blacklist` (
    `primarykey` int(10) NOT NULL AUTO_INCREMENT,
    `request_user_no` int(10) NOT NULL,
    `response_user_no` int(10) NOT NULL,
    PRIMARY KEY (`primarykey`),
    FOREIGN KEY (`request_user_no`) REFERENCES `userinfo` (`user_no`),
    FOREIGN KEY (`response_user_no`) REFERENCES `userinfo` (`user_no`)
);

CREATE TABLE `chat_log` (
    `chat_no` INT NOT NULL AUTO_INCREMENT,
    `game_no` VARCHAR(255) NOT NULL, -- 원본 int에서 VARCHAR(255)로 수정 (gamelog와 일치)
    `user_no` int(10) NOT NULL,
    `play_date` DATETIME DEFAULT CURRENT_TIMESTAMP,
    `chat_log` VARCHAR(225) NULL,
    `chat_type` ENUM('ALL', 'MAFIA', 'DEAD') DEFAULT 'ALL', -- ENUM 값 명시
    PRIMARY KEY (`chat_no`),
    FOREIGN KEY (`game_no`) REFERENCES `gamelog` (`game_no`),
    FOREIGN KEY (`user_no`) REFERENCES `userinfo` (`user_no`)
);

CREATE TABLE `ranking` (
    `user_no` int(10) NOT NULL,
    `game_no` VARCHAR(255) NOT NULL,
    `total_play` INT DEFAULT 0,
    `total_vic` INT DEFAULT 0,
    `rank_score` INT DEFAULT 0,
    PRIMARY KEY (`user_no`, `game_no`),
    FOREIGN KEY (`user_no`) REFERENCES `userinfo` (`user_no`),
    FOREIGN KEY (`game_no`) REFERENCES `gamelog` (`game_no`)
);

CREATE TABLE `player_list` (
    `primarykey` int(10) NOT NULL AUTO_INCREMENT,
    `user_no` int(10) NOT NULL,
    `jobs_no` VARCHAR(255) NOT NULL,
    `game_no` VARCHAR(255) NOT NULL,
    `outcome` enum('W','L') NULL,
    PRIMARY KEY (`primarykey`),
    FOREIGN KEY (`user_no`) REFERENCES `userinfo` (`user_no`),
    FOREIGN KEY (`jobs_no`) REFERENCES `jobs` (`jobs_no`),
    FOREIGN KEY (`game_no`) REFERENCES `roomlist` (`game_no`)
);