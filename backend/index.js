const express = require('express')
const sqlite = require('sqlite')
const cors = require('cors')
const moment = require('moment')

const app = express()
app.use(express.json())
app.use(cors())

let database

sqlite.open('databas.sqlite').then(database_ => {
    database = database_

    app.get('/', (request, response) => {
        database.all('SELECT * FROM teams_table').then(teams => {
            database.all('SELECT * FROM pl_livescore').then(livescore => {
                database.all('SELECT * FROM player_table').then(players => {
                    database.all('SELECT * FROM forum_table order by id DESC').then(forum => {
                        const result = {
                            teams,
                            livescore,
                            players,
                            forum
                        }
                        response.send(result)
                    })
                })
            })
        })
    })

        app.post('/', (request, response) => {
            const date = moment().format('YYYY-MM-DD')
            database.run('INSERT INTO forum_table (name, post, date) VALUES (?, ?, ?)', [request.body.name, request.body.post, date])
                .then(() => {
                    response.send()
                })
        }) 

    app.post('/register', (request, response) => {
        database.run('INSERT INTO users (user_name, password) VALUES (?, ?)', [request.body.user_name, request.body.password])
            .then(() => {
                response.send()
            })
    }) 
})

app.listen(3000)
