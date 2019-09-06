#!/usr/bin/node

const fs=require('fs'),
      log=console.log,
      http=require('http'),
      path=require('path'),
      file=process.argv[2];

if(process.argv.length !==3){
  console.error('命令行参数格式:cmd fileName');
  process.exit(1);
}

try{
var data=fs.readFileSync(file).toString('base64');
//log(data);
}catch(e){
  console.error(e.message);
  process.exit(2);
}

var ext=path.extname(file);
var uriData='data:./'+ext.slice(1,ext.length)+';base64,'+data;

var html='<!DOCTYPE html><html><body><img alt="'+path.basename(file,ext)+'"src="'+uriData+'"></body></html>'

http.createServer((req,res)=>{
  log(req.headers);
  log(req.url+'\n');
  res.end(html);
}).listen(8080);
