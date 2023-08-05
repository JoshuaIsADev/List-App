#!/usr/bin/env node

const fs = require('fs')
const { cwd } = require('node:process')

//Method #3
const { lstat } = fs.promises

fs.readdir(cwd(), async (err, filenames) => {
  // EITHER
  // err === an error object,
  //OR
  //w err === null, which mean everything is ok

  if (err) {
    // error handling code here
    console.log(err)
  }

  for (let filename of filenames) {
    try {
      const stats = await lstat(filename)

      console.log(filename, stats.isFile())
    } catch (err) {
      console.log(err)
    }
  }
})

// Methos #2
// const lstat = (filename) => {
//   return new Promise((resolve, reject) => {
//     fs.lstat(filename, (err, stats) => {
//       if (err) {
//         reject (err)
//       }
//       resolve(stats);
//     });
//   });
// };
