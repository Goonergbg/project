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

app.get('/comment', (request, response) => {
    database.all('SELECT * FROM comments order by id DESC').then(comment => {
        response.send(comment)
    })
})

let date = moment().format('YYYY-MM-DD')
app.post('/comment', (request, response) => {
    database.run('INSERT INTO comments (name, comment, date, postId) VALUES (?, ?, ?, ?)', [request.body.name, request.body.comment, date, request.body.postId])
        .then(() => {
            response.send()
        })
})


app.post('/', (request, response) => {
    database.run('INSERT INTO forum_table (name, post, date) VALUES (?, ?, ?)', [request.body.name, request.body.post, date])
        .then(() => {
            response.send()
        })
})




app.listen(3000)