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

  const allStats = Array(filenames.length).fill(null)

  for (let filename of filenames) {
    const index = filenames.indexOf(filename)
    fs.lstat(filename, (err, stats) => {
      if (err) {
        console.log(err)
      }

      allStats[index] = stats

      const ready = allStats.every((stats) => {
        return stats
      })

      if (ready) {
        allStats.forEach((stats, index) => {
          console.log(filenames[index], stats.isFile())
        })
      }
    })
  }
})
