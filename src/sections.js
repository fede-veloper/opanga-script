const constants = require('./utils/constans')
const validations = require('./utils/validations')
const flagsAuxiliaries = require('./flags')
const propsAuxiliaries = require('./props')

const stackTokenDelimiters = [] 
const stackSectionsName = []
const openSections = {}

const createSection = (line) => {
  const sectionName = getSectionNameFormatted(line)

  validations.validateSectionDefinition(openSections, sections, line, sectionName)
  stackTokenDelimiters.push(constants.tokenOpenSection)
  stackSectionsName.push(sectionName)
  addLineToSections(openSections, line)
  openSections[sectionName] = `${sectionName} {\n`
}

const closeSection = (line, sections) => {
  const currentSection = stackSectionsName.pop()
  const currentTokenClose = stackTokenDelimiters.pop()
  
  validations.validateSectionClose(currentTokenClose, line)
  sections[currentSection] = `${openSections[currentSection]}`
  delete openSections[currentSection]
}

const getSections = (data, sections) => {
  let numberLine = 1

  try {
    for (line of data) {
      if (line.includes(constants.tokenOpenSection)) {
        createSection(line, openSections)
      } else if (stackTokenDelimiters.length) {
        addLineToSections(openSections, line)
      }
  
      if (line.includes(constants.tokenCloseSection))
        closeSection(line, sections)

      numberLine++
    }
  
    validations.validateStackCurlyBraces(stackTokenDelimiters)
  } catch (error) {
    throw new Error(`${error} - at line: ${numberLine}`)
  }
}

const getSectionNameFormatted = (line) => {
  const tokensLine = line.trim()
  const sectionTokens = tokensLine.split(' ')
  const sectionName = sectionTokens.reverse().find(token => 
    token !== constants.tokenCloseSection 
      && token !== constants.tokenOpenSection
  )

  return sectionName
}

const addLineToSections = (sections, line) => {
  for (const section in sections) {
    if (!constants.regex.whiteSpaces.test(line) && line !== '')
      sections[section] += `${line}\n`
  }
}

const iterateSections = (sections) => {
  try {
    for (const section in sections) {
      const currentSection = sections[section]
      const currentSectionLines = currentSection.split('\n')
      const flagsCurrentSection = []
      const propsCurrentSection = {}
  
      for (line of currentSectionLines) {
        const formattedLine = line.trim()

        flagsAuxiliaries.getFlagsBySection(flagsCurrentSection, formattedLine)
        propsAuxiliaries.getPropsBySection(propsCurrentSection, formattedLine)      
      }
  
      addComponentsToSection(sections, section, flagsCurrentSection, propsCurrentSection)
    }
  } catch (error) {
    throw new Error(`${error}`)
  }
}

const addComponentsToSection = (sections, section, flagsCurrentSection, propsCurrentSection) => {
  sections[section] = {
    section: sections[section],
    flags: flagsCurrentSection,
    props: propsCurrentSection
  }
}

const sections = {
  getSections,
  getSectionNameFormatted, 
  iterateSections
}

module.exports = sections