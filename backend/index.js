const express = require('express')
const sqlite = require('sqlite')
const cors = require('cors')
const moment = require('moment')
const uuidv4 = require('uuid/v4')



const app = express()
app.use(express.json())
app.use(cors())


let database

sqlite.open('databas.sqlite').then(database_ => {

    database_.run(
        'CREATE TABLE IF NOT EXISTS sessions (token TEXT, user_name TEXT)'
    )

    database = database_
})


app.get('/', (request, response) => {
    database.all('SELECT * FROM teams_table').then(teams => {
        database.all('SELECT * FROM pl_livescore').then(livescore => {
            database.all('SELECT * FROM player_table').then(players => {
                database.all('SELECT * FROM forum_table order by id DESC').then(forum => {
                    database.all('SELECT * FROM la_liga').then(la_liga => {
                        database.all('SELECT * FROM serie_a').then(serie_a => {
                            const result = {
                                teams,
                                livescore,
                                players,
                                forum,
                                la_liga,
                                serie_a
                            }
                            response.send(result)
                        })
                    })
                })
            })
        })
    })
})

app.post('/', (request, response) => {
    const date = moment().format('YYYY-MM-DD')
    database.run('INSERT INTO forum_table (name, post, comment, date) VALUES (?, ?, ?, ?)', [request.body.name, request.body.post, request.body.comment, date])
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

app.post('/login', (request, response) => {
    console.log(request.body)
    database
        .all('SELECT 1 FROM users WHERE user_name=? AND password=?', [
            request.body.user_name,
            request.body.password
        ])
        .then(rows => {
            console.log(rows)
            if (rows.length === 1) {
                const token = uuidv4()
                database.run('INSERT INTO sessions VALUES (?, ?)', [
                    token,
                    request.body.user_name
                ])
                // response.set('Set-Cookie', `token=${token}`)
                response.status(201).send({
                    token: token
                })
            } else {
                response.status(401).send()
            }
        })
})

function authenticate(request, response, next) {
    const cookie = request.get('Cookie')
    if (cookie) {
        database
            .all(
                'SELECT user_name FROM sessions WHERE token=?',
                /token=([0-9a-f-]*)/.exec(cookie)[1]
            )
            .then(rows => {
                if (rows.length === 1) {
                    request.userName = rows[0].user_name
                    next()
                } else {
                    response.status(401).send()
                }
            })
    } else {
        response.status(401).send()
    }
}

app.listen(3000)