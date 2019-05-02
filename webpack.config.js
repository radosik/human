module.exports = {
    entry: ['./src/js/play.js'],
    mode: 'development', 
    watch: true,       
    output: {
        path: __dirname + '/dist',
        filename: 'play.js'
    }    
}
