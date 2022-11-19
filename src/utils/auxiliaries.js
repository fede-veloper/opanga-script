const fs = require('fs')

const readFile = (filePath, defaultFileName) => {
  try {
    const nameFileFromCommandLine = process.argv.slice(2)[0]
    
    if (process.env.NODE_ENV !== 'test') {
      filePath += nameFileFromCommandLine ? nameFileFromCommandLine : defaultFileName
    } else {
      filePath += defaultFileName
    }
    
    return fs.readFileSync(filePath, 'utf8')
  } catch (error) {
    console.log(error)
    throw new Error(error)
  }
}

const auxiliaries = {
  readFile
}

module.exports = auxiliaries