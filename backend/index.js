const express = require('express')
const sqlite = require('sqlite')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())

let database

sqlite.open('databas.sqlite').then(database_ => {
            database = database_


            // app.get('/', (request, response) => {
            //     database.all('SELECT * FROM teams_table').then(teams => {
            //         database.all('SELECT * FROM pl_livescore').then(livescore => {
            //             const result = {
            //                 teams,
            //                 livescore
            //             }
            //             response.send(result)
            //         })

            app.get('/', (request, response) => {
                database.all('SELECT * FROM teams_table').then(teams => {
                    database.all('SELECT * FROM pl_livescore').then(livescore => {
                        database.all('SELECT * FROM player_table').then(players => {
                            const result = {
                                teams,
                                livescore,
                                players
                            }
                            response.send(result)
                        })
                    })
                })


                app.post('/', (request, response) => {
                    database.run('INSERT INTO forum_table (name, comment) VALUES (?, ?)', [request.body.name, request.body.comment])
                        .then(rows => {
                            response.send(rows)
                        })
                })

                app.listen(3000)
            })


            //skriver name och comment så att jag inte behöver lägga in fler ? vilket annars hade behövts pga att varje inlägg får ett ID. 