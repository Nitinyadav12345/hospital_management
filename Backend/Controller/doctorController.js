const viewAppointments = async (req, res) => {
    const { doctorId } = req.body;
     try {
          const result = await db.pool.execute( `SELECT * FROM appointments WHERE doctor_id = ?`, [doctorId]);
          res.send(utils.createResult(null, result));
     } catch (err) {
          console.log(err);
          res.status(500);
          res.send(utils.createResult(err, null));
     }
}

const viewPatients = async (req, res) => {
     const { DID } = req.body;
     try {
          const result = await db.pool.execute( `SELECT * FROM patients WHERE did = ?`, [DID]);
          res.send(utils.createResult(null, result));
     } catch (err) {
          console.log(err);
          res.status(500);
          res.send(utils.createResult(err, null));
     }
}

const viewDiagnosis = async (req, res) => {
     const { PID , DID } = req.body;
     try {
          const result = await db.pool.execute( `SELECT * FROM patients WHERE pid = ? and did = ?`, [PID, DID]);
          res.send(utils.createResult(null, result));
     } catch (err) {
          console.log(err);
          res.status(500);
          res.send(utils.createResult(err, null));
     }
}

const addPrescription = async (req, res) => {
     const { PID , DID , PRESCRIPTION } = req.body;
     try {
          const result = await db.pool.execute( `UPDATE patients SET prescription = ? WHERE pid = ? and did = ?`, [PRESCRIPTION, PID, DID]);
          res.send(utils.createResult(null, result));
     } catch (err) {
          console.log(err);
          res.status(500);
          res.send(utils.createResult(err, null));
     }
}

module.exports = {
     viewAppointments,
     viewPatients,
     viewDiagnosis,
     addPrescription
     }