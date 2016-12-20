var fs = require('fs');

module.exports = (req, res, next) => {
    var file = './src/server/files/services.json';

    fs.exists(file, (exists) => {
        if (exists) {
            fs.readFile(file, 'utf8', (err, data) => {
                if (!err) {
                    var services = JSON.parse(data);
                    res.send(services);
                } else {
                    console.log('Error writing: ' + file);
                    res.end();
                }
            });
        } else {
            console.log('File does not exist!');
            res.end();
        }
    });
};
