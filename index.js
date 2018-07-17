#!/usr/bin/env node
var bible = require('openbibles');
var program = require('commander');
var chalk = require('chalk');

program
	.arguments('<reference>')
	.option('-t, --translation <translation>', 'The Bible translation to use')
	.option('-o, --oneline', 'Display all verses on one line')
	.option('--no-color', 'Don\'t color output')
	.action(reference => {
		let translation = program.translation || 'kjv';
		try {
			let response = bible(reference, translation);
			if (!program.oneline) {
				response = response.replace(/[0-9]+/g, match => (`\n${match}`));
			}
			if (program.color) {
				response = response.replace(/[0-9]+/g, match => (chalk.bold.cyan(match)));
			}
		    console.log(response);
			process.exit(0);
		} catch(e) {
			console.log(e.message);
			process.exit(1);
		}
	})
	.parse(process.argv)
