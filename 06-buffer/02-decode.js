#!/usr/bin/node

const log=console.log;

var buf=new Buffer(process.argv[2],'base64');
var info=buf.toString('utf8').split(':');

log('user name:%s\npassword: %s',info[0],info[1]);
