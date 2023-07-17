const { Router } = require('express')
const app = Router()
const expressLayouts = require('express-ejs-layouts')
const path = require('path')
const fs = require('fs')
const { db } = require('../db')

app.use(expressLayouts)



/* SQL FILES*/

const createUser = fs.readFileSync(path.join(__dirname, '../../sql/create-user.sql')).toString()
console.log(createUser)

/* SQL FILES*/



/* HOME PAGE */
app.get('/', (req, res) => {
    if (!req.oidc.user) return res.send('GO TO /login')
    db.get(`SELECT * FROM users WHERE name = "${req.oidc.user.name}"`, (err, row) => {
        if (err) return console.error(err)

        console.log(row)

        if (row == undefined) {
            db.run(createUser, [req.oidc.user.name, req.oidc.user.picture, req.oidc.user.locale, req.oidc.user.email], (err, result) => {
                if (err) return console.error(err)

                console.log(result)
            })
        }
    })

    res.render('index', { title: 'Home', user: JSON.stringify(req.oidc.user) })
})


/* LEADERBOARD PAGE */
app.get('/leaderboard', (req, res) => {
    db.all('SELECT * FROM users', [], (err, rows) => {
        res.render('leaderboard', { title: 'Leaderboard', user: JSON.stringify(req.oidc.user), users: JSON.stringify(rows) })
    })
})

app.get('/users', (req, res) => {
    db.all('SELECT * FROM users', [], (err, rows) => {
        res.render('users', { title: 'Users', user: JSON.stringify(req.oidc.user), users: JSON.stringify(rows) })
    })
})

module.exports = app