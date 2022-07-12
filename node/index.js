const mysql = require("mysql")
const express = require("express")
const app = express()

const port = 3000

const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
}

const connection = mysql.createConnection(config)

app.get('/', (req, res) => {
    // const insert = `INSERT INTO fullcycle(name) value('Allyson Reis')`
    const select = "SELECT * FROM fullcycle"

    connection.query(`INSERT INTO fullcycle(name) value('Allyson Reis')`);
    connection.query(`INSERT INTO fullcycle(name) value('João Silva')`);
    connection.query(`INSERT INTO fullcycle(name) value('Maria Antonieta')`);

    connection.query(select, (err, result, fields) => {
        res.send(`<h1>Full Cycle Rocks!</h1>
            ${!!result.length ? result.map(el => `<ol><li>${el.name}</li> </ol>`).join('') : ''}
        `)
    })

})

app.listen(port, () => {
    console.log('Rodando na porta: ' + port)
})