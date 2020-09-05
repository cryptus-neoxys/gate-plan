const express = require("express")
const router = express.Router()

const csv = require('csv-parser');
const fs = require('fs');

router.get('/:sub', (req, res) => {
    subjects = ['cn', 'db', 'pds']
    data = []
    if(subjects.includes(req.params.sub)){
        fs.createReadStream( './subjects/' + req.params.sub + '.csv')
        .pipe(csv())
        .on('data', (row) => {
            data.push(row)
        })
        .on('end', () => {
            res.json({'subject' : req.params.sub, 'data': data})
        });

    } else {
        res.send('Sorry ' + req.params.sub + ' not available')
    }
    
})

module.exports = router