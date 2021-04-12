const sqlite3 = require('sqlite3')
const { open } = require('sqlite') //não preciso baixar todos os mudulos, apenas o open para fazer a conexão

module.exports = () => open({
        filename: './database.sqlite',
        driver: sqlite3.Database //driver
    });




