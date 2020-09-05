let express = require('express')
let cors = require('cors')
let bodyParser = require('body-parser')
let routes = require('./routes')


let app = express();
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/plan', routes)		

app.get('/', (req, res) => {
    res.send(`
        <h1> Hi! This api was made by: ANIKET SINGH RAWAT </h1>
        <p>Usage: /url/plan/{subject}</p>
        <ul>
            <li>cn : computer network 1.5 hrs</li>
            <li>db : database 1 hr</li>
            <li>pds : Programming and Data structures 1 hr</li>
        </ul>
    `)
})

app.listen(process.env.PORT || 5000)