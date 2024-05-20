//Create doctor controller based on information  in Api.text and using mysql.sql for schema and data of database
const express = require("express")
const db = require("../db")
const utils = require("../utils")
const crypto = require("crypto-js")
const jwt = require("jsonwebtoken")
const config = require('../config')
const router = express.Router()

const viewAppointments = async (req, res) => {
   const { doctorId } = req.body;
    //res.send(appointments)
    db.pool.execute( `SELECT * FROM appointments WHERE doctor_id = ?`, [doctorId], (err, result) => {
        if(err) {
            console.log(err)
            res.status(500)
            res.send(utils.createResult(err,result)); 
        }
        else {
            res.send(utils.createResult(err,result)); 
        }
    })
}

const viewPatients = async (req, res) => {
    const { DID } = req.body;
    db.pool.execute( `SELECT * FROM patients WHERE did = ?`, [DID], (err, result) => {
        if(err) {
            console.log(err)
            res.status(500)
            res.send(utils.createResult(err,result)); 
        }
        else {
            res.send(utils.createResult(err,result)); 
        }
    })
}
const viewDiagnosis = async (req, res) => {
    const { DID } = req.body;
    db.pool.execute( `SELECT * FROM diagnosis WHERE did = ?`, [DID], (err, result) => {
        if(err) {
            console.log(err)
            res.status(500)
            res.send(utils.createResult(err,result)); 
        }
        else {
            res.send(utils.createResult(err,result)); 
        }
    })
}