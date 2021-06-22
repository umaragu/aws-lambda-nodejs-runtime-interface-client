#!/usr/bin/env node
/** Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved. */

const lambda = require("../lib/index");

if(process.argv.length < 3) {
  throw new Error("No handler specified");
}

const appRoot = process.cwd();
const handler = process.argv[2];
const initFunction;
if(process.argv.length > 3) {
  initFunction = process.argv[3]
}

console.log(`Executing '${handler}' in function directory '${appRoot}'`);
lambda.run(appRoot, handler, initFunction);
