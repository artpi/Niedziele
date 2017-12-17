var sundays = require( './index.js' );

var list = Object.keys( sundays ).map( function( key ) { return '### ' + key + "\n\n" + sundays[ key ] + "\n\n"; } );
console.log( list.join( '' ) );