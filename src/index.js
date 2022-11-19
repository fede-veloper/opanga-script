const constants = require('./utils/constans')
const auxiliaries = require('./utils/auxiliaries')
const sectionAuxiliaries = require('./sections')
const mainMenu = require('./menu')

let filePath = '../testsFiles/'

const sections = {}

const main = () => {
  const dataFromFile = auxiliaries.readFile(filePath, constants.defaultFileName)
  const formattedDataFile = dataFromFile.split('\n')

  sectionAuxiliaries.getSections(formattedDataFile, sections)
  sectionAuxiliaries.iterateSections(sections)

  mainMenu.getMenu(sections)
}

main()

module.exports = {
  sections,
  main
}

// Federico Villegas