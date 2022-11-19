const defaultFileName = 'test2.txt'

const validPatternSectionName = /^[a-zA-z_]+[a-zA-z0-9]*/
const validPatternFlagsName = /^[a-zA-z_]+[a-zA-z0-9]*$/
const invalidPatternFlagName = /^[a-zA-z_]+[0-9]*\s+[a-zA-z ]+/
const invalidPatternProps = /^[0-9]+\s*[a-zA-z0-9 ]*$/
const validPatternProps = /^[a-zA-z_0-9]+\s+[0-9 ]+$/
const whiteSpaces = /^\s+\t*$/
const tokenOpenSection = '{'
const tokenCloseSection = '}'
const curlyBracesAllowedPerLine = 1

const mainSeparator = `==========`
const subSeparator = `----------`
const invalidNumberCurlyBraces = `Invalid number of curly braces per line, define each section in differnt rows.`
const invalidSectionCurlyBracesPair = `Invalid section curly braces pair.`
const invalidBalancedPairs = `Pairs curly braces aren't balanced.`
const invalidSectionName = `The name for the section is invalid.`
const invalidCloseCurlyBraces = `Missing close curly braces`
const invalidFlagDeclaration = `Declare each flag per line.`
const invalidPropDeclaration = `Invalid declaration for prop: `
const uniqueSectionName = `The name section is already in use.`
const uniqueFlagInSection = `The name of the flag already exists.`
const uniquePropInSection = `The name of the prop already exists.`
const messageMenu = `Type the name of the section to see more details`
const sectionNotFound = `Section not found, try again.`
const exitOptionMenu = `* Type 0 to finish the script.`
const noSectionsToShow = `There is not sections to show`
const noFlags = `There is not flags to show`
const noProps = `There is not props to show`
const detailsForSection = `Details for section`
const detailsSectionBody = `Complete section body: `
const detailsSectionProp = `Section props`
const detailsSectionFlags = `Section flags`
const flagName = `Flag name:`
const propName = `Prop name:`
const propValue = `value:`

const regex = {
  invalidPatternFlagName,
  invalidPatternProps,
  validPatternSectionName,
  validPatternFlagsName,
  validPatternProps,
  whiteSpaces
}

const messages = {
  noFlags, 
  noProps,
  noSectionsToShow,
  mainSeparator,
  subSeparator,
  detailsForSection,
  detailsSectionBody,
  detailsSectionProp,
  detailsSectionFlags,
  flagName,
  propName,
  propValue,
  invalidSectionName,
  invalidNumberCurlyBraces,
  invalidSectionCurlyBracesPair,
  invalidBalancedPairs,
  invalidCloseCurlyBraces,
  invalidFlagDeclaration,
  invalidPropDeclaration,
  uniqueSectionName,
  uniqueFlagInSection,
  uniquePropInSection,
  messageMenu,
  sectionNotFound,
  exitOptionMenu
}

const constants = {
  regex,
  defaultFileName,
  tokenOpenSection,
  tokenCloseSection,
  curlyBracesAllowedPerLine,
  messages
}

module.exports = constants