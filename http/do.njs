#!/usr/local/bin/node

var fs = require('fs');
var querystring = require('querystring');
var contents = fs.readFileSync("name.json");
var jsonContent = JSON.parse(contents);
var id = querystring.parse(process.env.QUERY_STRING).id;

console.log('Content-type:text/plain;character=utf-8\n');
if(id in jsonContent)
	console.log(jsonContent[id]);
else
	console.log("none");
