const sections = require('../sections')
const validations = require('../utils/validations')
const constants = require('../utils/constans')

describe('section', () => {
  test('set formatted section definition', () => {
    // Arrange
    const sectionLine = `section {`
    // Act
    const result = sections.getSectionNameFormatted(sectionLine)
    // Assert
    expect(result).toBe('section')
  })
})

describe('validations', () => {
  test('invalid section definition', () => {
    // Arrange
    const section = 'runtime { key1 1 }'
    const sectionName = 'runtime'
    const sections = { runtime: {} }
    // Assert
    expect(() => validations.validateSectionDefinition({}, sections, section, 'runtime'))
      .toThrow(`${constants.messages.uniqueSectionName} [ ${sectionName} ]`)
  })

  test('invalid section definition name', () => {
    // Arrange
    const line = '1runtime { key1 1 }'
    const sectionName = '1runtime'
    const sections = { }
    // Assert
    expect(() => validations.validateSectionDefinition({}, sections, line, sectionName))
      .toThrow(`${constants.messages.invalidSectionName} [ ${sectionName} ]`)
  })  

  test('invalid section definition curly braces', () => {
    // Arrange
    const line = 'runtime { { key1 1 }'
    const sections = { }
    // Assert
    expect(() => validations.validateSectionDefinition({}, sections, line, 'runtime'))
      .toThrow(`${constants.messages.invalidNumberCurlyBraces} [ ${line.trim()} ]`)
  })
})

// I didnt finish all my tests cases because of time. 
// I did somo tests cases to show part of the resolution way.