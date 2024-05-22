CREATE DATABASE HMS;

USE HMS;


CREATE TABLE USER(
    UID INT PRIMARY KEY AUTO_INCREMENT ,
    FIRSTNAME VARCHAR(100) NOT NULL,
    LASTNAME VARCHAR(100),
    EMAIL VARCHAR(100) NOT NULL,
    PASSWORD VARCHAR(1000) NOT NULL,
    PHONE VARCHAR(15) NOT NULL,
    ROLE VARCHAR(15) NOT NULL,
    USERPHOTO VARCHAR(1000)    
);

CREATE TABLE EMPLOYEE
(
    EID INT PRIMARY KEY AUTO_INCREMENT,
    DOJ DATE NOT NULL,
    DOB DATE NOT NULL,
    SALARY FLOAT NOT NULL,
    USERID INT,
    FOREIGN KEY (USERID) REFERENCES USER(UID) 
);

CREATE TABLE DOCTOR 
(
    DID INT PRIMARY KEY AUTO_INCREMENT,
    CHARGES VARCHAR(45),
    DEPARTMENT VARCHAR(100),
    EID INT,
    FOREIGN KEY(EID) REFERENCES EMPLOYEE(EID)
);

CREATE TABLE PATIENT 
(
    PID INT PRIMARY KEY AUTO_INCREMENT,
    DID INT, 
    BLOODGROUP VARCHAR(4) NOT NULL,
    DOB DATE NOT NULL,
    PRESCRIPTION VARCHAR(1000),
    PATIENT_PROBLEM VARCHAR(1000),
    UID INT , 
    BED_NO INT,
    DOA DATE,
    DOD DATE,
    IS_ADMIT_P INT NOT NULL,
    IS_DOCTOR_VISITED INT NOT NULL,
    FOREIGN KEY (DID) REFERENCES DOCTOR(DID),
    FOREIGN KEY (UID) REFERENCES USER(UID)
);

CREATE TABLE PAYMENT
(
    PAYID INT PRIMARY KEY AUTO_INCREMENT,
    FEES FLOAT NOT NULL,
    STATUS VARCHAR(45),
    PID INT,
    CATEGORY VARCHAR(100),
    FOREIGN KEY (PID) REFERENCES PATIENT(PID)
);

CREATE TABLE APPOINTMENT
(
    APPID INT PRIMARY KEY AUTO_INCREMENT,
    STATUS VARCHAR(45),
    APPDATE DATE NOT NULL,
    DID INT ,
    PID INT,
    FOREIGN KEY (DID) REFERENCES DOCTOR(DID),
    FOREIGN KEY (PID) REFERENCES PATIENT(PID)
);

CREATE TABLE MEDICIENE 
(
    MID INT PRIMARY KEY AUTO_INCREMENT,
    NAME VARCHAR(50),
    PRICE FLOAT,
    QUANTITY INT,
    EXPIRYDATE DATE,
    DETAILS VARCHAR(100),
    PHOTO VARCHAR(1000)
);

INSERT INTO USER (FIRSTNAME, LASTNAME, EMAIL, PASSWORD, PHONE, ROLE, USERPHOTO) VALUES
('John', 'Doe', 'john.doe@example.com', 'hashed_password_123', '+1234567890', 'patient', 'user_photo_1.jpg'),
('Jane', 'Smith', 'jane.smith@example.com', 'hashed_password_456', '+1987654321', 'doctor', 'user_photo_2.jpg'),
('Emily', 'Johnson', 'emily.johnson@example.com', 'hashed_password_789', '+1122334455', 'admin', 'user_photo_3.jpg');

INSERT INTO EMPLOYEE (DOJ, DOB, SALARY, USERID) VALUES
('2020-01-15', '1985-07-20', 60000, 2),
('2021-03-22', '1990-11-30', 50000, 1);

INSERT INTO DOCTOR (CHARGES, DEPARTMENT, EID) VALUES
('100', 'Cardiology', 1),
('150', 'Neurology', 2);

INSERT INTO PATIENT (DID, BLOODGROUP, DOB, PRESCRIPTION, PATIENT_PROBLEM, UID, BED_NO, DOA, DOD, IS_ADMIT_P, IS_DOCTOR_VISITED) VALUES
(1, 'O+', '1995-04-12', 'Take two pills daily', 'High fever', 3, 101, '2023-05-01', NULL, 1, 1),
(2, 'A+', '1980-08-22', 'Rest and hydration', 'Migraine', 3, 102, '2023-05-05', '2023-05-12', 0, 1);

INSERT INTO PAYMENT (FEES, STATUS, PID, CATEGORY) VALUES
(200, 'Paid', 1 , 'Consultation'),
(150, 'Pending', 2, 'Consultation');

INSERT INTO APPOINTMENT (STATUS, APPDATE, DID, PID) VALUES
('Confirmed', '2023-06-15', 1, 1),
('Cancelled', '2023-06-20', 2, 2);

INSERT INTO MEDICIENE (NAME, PRICE, QUANTITY, EXPIRYDATE, DETAILS, PHOTO) VALUES
('Aspirin', 10.50, 100, '2025-01-01', 'Pain reliever', 'path/to/photo4.jpg'),
('Ibuprofen', 15.00, 200, '2024-12-31', 'Anti-inflammatory', 'path/to/photo5.jpg');

