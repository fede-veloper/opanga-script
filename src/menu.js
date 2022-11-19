const promptDialog = require("prompt-sync")({ sigint: true })

const constants = require('./utils/constans')

const getMenu = (sections) => {
  const numOfSections = Object.keys(sections).length
  let selectedSection = ''

  while (numOfSections && selectedSection !== '0') {
    console.log(`\nThere are ${numOfSections} section`)
    
    console.log(constants.messages.subSeparator)

    for (const section in sections) {
      console.log(section)
    }

    console.log(constants.messages.subSeparator)
    console.log(constants.messages.exitOptionMenu)
    selectedSection = promptDialog(`${constants.messages.messageMenu}: `)

    if (sections[selectedSection]) {
      const numberOfFlagsCurrentSection = (sections[selectedSection].flags).length
      const numberOfPropsCurrentSection = Object.keys(sections[selectedSection].props).length

      console.log(`\n${constants.messages.mainSeparator}`)
      console.log(`${constants.messages.detailsForSection} - ${selectedSection}`)
      console.log(`${constants.messages.mainSeparator} \n`)
      console.log(`${constants.messages.detailsSectionBody} \n\n${sections[selectedSection].section}`)
      console.log(`${constants.messages.detailsSectionFlags} - ${numberOfFlagsCurrentSection}\n`)
      
      if (numberOfFlagsCurrentSection) {
        for (const flag of sections[selectedSection].flags) {
          console.log(`${constants.messages.flagName} ${flag}`)
        }
      } else {
        console.log(constants.messages.noFlags)
      }
      console.log(`\n${constants.messages.detailsSectionProp} - ${numberOfPropsCurrentSection} \n`)
      if (numberOfPropsCurrentSection) {
        for (const prop in sections[selectedSection].props) {
          console.log(`${constants.messages.propName} ${prop}, ${constants.messages.propValue} ${sections[selectedSection].props[prop]}`)
        }
      } else {
        console.log(constants.messages.noProps)
      }
    } else if (selectedSection !== '0') {
      console.log(`${constants.messages.sectionNotFound} [ ${selectedSection} ]`)
    }
  }

  if (!numOfSections) 
    console.log(constants.messages.noSectionsToShow)
}

const menu = {
  getMenu
}

module.exports = menu