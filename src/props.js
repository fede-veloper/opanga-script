const constants = require('./utils/constans')
const validations = require('./utils/validations')

const getPropsBySection = (propsCurrentSection, formattedLine) => {
  const tokensProps = formattedLine.split(' ')
  const nameProp = tokensProps[0]
  
  validations.validatePropBySection(propsCurrentSection, nameProp, formattedLine)
  
  if (constants.regex.validPatternProps.test(formattedLine)) {
    const valueProp = tokensProps.slice(1).join(' ')
    
    propsCurrentSection[nameProp] = valueProp
  }
}

const props = {
  getPropsBySection
}

module.exports = props