const constants = require('./constans')

const validateSectionDefinition = (openSections, sections, line, sectionName) => {
  const tokensLine = line.split(' ')
  const isValidOpenToken = tokensLine.filter(token => token === constants.tokenOpenSection)

  if (openSections[sectionName] || sections[sectionName])
    throw new Error(`${constants.messages.uniqueSectionName} [ ${sectionName} ]`)
  
  if (!constants.regex.validPatternSectionName.test(sectionName))
    throw new Error(`${constants.messages.invalidSectionName} [ ${sectionName} ]`)

  if (isValidOpenToken.length > constants.curlyBracesAllowedPerLine)
    throw new Error(`${constants.messages.invalidNumberCurlyBraces} [ ${line.trim()} ]`)
}

const validateSectionClose = (currentToken, line) => {
  const tokensLine = line.split(' ')
  const isValidCloseToken = tokensLine.filter(token => token === constants.tokenCloseSection)

  if (!currentToken)
    throw new Error(`${constants.messages.invalidBalancedPairs}`)

  if (isValidCloseToken.length > constants.curlyBracesAllowedPerLine)
    throw new Error(`${constants.messages.invalidNumberCurlyBraces} [ ${line.trim()} ]`)
}

const validateStackCurlyBraces = (stack) => {
  if (stack.length) {
    const extraOpenCurlyBraces = stack.filter(element => element === constants.tokenOpenSection)

    throw new Error(`${constants.messages.invalidCloseCurlyBraces} - [ ${extraOpenCurlyBraces.length} ${constants.tokenCloseSection} ]`)
  }
}

const validateFlagBySection = (flagsCurrentSection, formattedLine) => {
  if (flagsCurrentSection.includes(formattedLine))
    throw new Error(`${constants.messages.uniqueFlagInSection} [ ${formattedLine} ]`)
  if (constants.regex.invalidPatternFlagName.test(formattedLine)) 
    throw new Error(`${constants.messages.invalidFlagDeclaration} [ ${formattedLine} ]`)
}

const validatePropBySection = (propsCurrentSection, nameProp, formattedLine) => {
  if (propsCurrentSection[nameProp])
    throw new Error(`${constants.messages.uniquePropInSection} [ ${nameProp} ]`)
  if (constants.regex.invalidPatternProps.test(formattedLine))
    throw new Error(`${constants.messages.invalidPropDeclaration} [ ${formattedLine} ]`)
}

const validations = {
  validateSectionDefinition,
  validateSectionClose,
  validateStackCurlyBraces,
  validateFlagBySection,
  validatePropBySection
}

module.exports = validations