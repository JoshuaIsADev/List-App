#!/usr/bin/env node

const fs = require('fs')
const { cwd } = require('node:process')

fs.readdir(cwd(), (err, filenames) => {
  // EITHER
  // err === an error object,
  //OR
  //w err === null, which mean everything is ok

  if (err) {
    // error handling code here
    console.log(err)
  }
  console.log(filenames)
})
