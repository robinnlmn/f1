const sqlite3 = require('sqlite3').verbose()
const fs = require('fs')

const db = new sqlite3.Database('./database.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) return console.error(err.message)

    console.log('connected to database')
})


fs.readFileSync('./sql/tables.sql').toString().split(';').forEach(e => {
    if (e && e !== '')
        db.run(e, err => {
            if (err) console.error('Error at creating tables: ' + err);
            else console.log('- Successfully created tables')
        });
})

module.exports = { db }