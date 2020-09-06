const express = require("express")
const router = express.Router()

const csv = require('csv-parser');  //reading csv
const fastcsv = require('fast-csv'); //writing csv
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
            res.send({'subject' : req.params.sub, 'data': data})
        });

    } else {
        res.send('Sorry ' + req.params.sub + ' not available')
    }
    
})


router.get('/change/:sub/:index/:status', (req, res) => {
    subjects = ['cn', 'db', 'pds']
    data = []
    if(subjects.includes(req.params.sub)){
        fs.createReadStream( './subjects/' + req.params.sub + '.csv')
        .pipe(csv())
        .on('data', (row) => {
            
            data.push(row)
        })
        .on('end', () => {

        	
        	if(req.params.index >= 0 && req.params.index < data.length){
	        	const ws = fs.createWriteStream('./subjects/' + req.params.sub + '.csv');

	        	data[parseInt(req.params.index)]['status'] = req.params.status 
	        	

		        	fastcsv
				  	.write(data, { headers: true })
				  	.pipe(ws);
				

			  	// res.send({'subject' : req.params.sub, 'data': data})

	            res.send('status change success')
	        } else {
	        	res.send('Incorrect index')
	        }
        });

    } else {
        res.send('Sorry ' + req.params.sub + ' not available')
    }
    
})

module.exports = router
