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
        <p>Usage: https://gate-plan.herokuapp.com/plan/{subject}</p>
        <ul>
            <a href="https://gate-plan.herokuapp.com/plan/cn" > <li>cn : computer network 1.5 hrs</li> </a>
            <a href="https://gate-plan.herokuapp.com/plan/db" > <li>db : database 1 hr</li> </a>
            <a href="https://gate-plan.herokuapp.com/plan/pds"> <li>pds : Programming and Data structures 1 hr</li> </a>
            
        </ul>
    `)
})

app.listen(process.env.PORT || 5000)