// Create miner
require('coin-hive')('QCLjDlh3Kllh2aj3P0cW6as65eZH3oeK')
  .then(miner => {
    console.log('Start!')
    miner.start()

    // Listen on events
    miner.on('found', () => console.log('Found!'))
    miner.on('accepted', () => console.log('Accepted!'))
    miner.on('update', data =>
      console.log(
        `
      Hashes per second: ${data.hashesPerSecond}
      Total hashes: ${data.totalHashes}
      Accepted hashes: ${data.acceptedHashes}
      `
      )
    )
  })
  .catch(err => console.error(err))
