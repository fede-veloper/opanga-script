const constants = require('./utils/constans')
const validations = require('./utils/validations')

const getFlagsBySection = (flagsCurrentSection, formattedLine) => {
  validations.validateFlagBySection(flagsCurrentSection, formattedLine)

  if (constants.regex.validPatternFlagsName.test(formattedLine))
    flagsCurrentSection.push(formattedLine)
}

const flags = {
  getFlagsBySection
}

module.exports = flags