/* bin/node-echo */
var argv = require('argv'),
    echo = require('../lib/echo');
    var x = argv.run();
   console.log(x["targets"].join(" "));
   console.log(process.argv);
console.log(argv.run());
console.log(argv.run([ '1', '2', '123' ]));


/*argv.option([
    {
        name: 'option',
        type: 'csv,int'
    },
    {
        name: 'path',
        short: 'p',
        type: 'list,path'
    }
]);
console.log(argv.run());*/
// csv and int combo
//$ script --option=123,456.001,789.01
//-> option: [ 123, 456, 789 ]

// list and path combo
//$ script -p /path/to/file1 -p /path/to/file2
//-> option: [ '/path/to/file1', '/path/to/file2' ]
//console.log(echo(argv.join(' ')));