import React from 'react'
import { Text } from 'react-native'
// eslint-disable-next-line import/no-unresolved
import PanningScrollView from 'react-native-panning-scrollview'

const App = () => (
  <PanningScrollView
    badgeImage={{ uri: 'https://i.imgur.com/46QVams.png' }}
    headerImage={{ uri: 'https://i.imgur.com/xjyh403.png' }}
  >
    <Text style={{ fontWeight: 'bold' }}>MDR</Text>
    <Text>{description}</Text>
  </PanningScrollView>
)

const description = `The MDR, or 'Micro Dynamic Rifle', is an gas-operated, semi-automatic bullpup rifle platform developed by American firearms company Desert Tech (previously known as Desert Tactical Arms). It was designed with the goal of being modular and highly modifiable to suit the individual user's preferences. It was also designed to be completely ambidextrous, with all weapon controls and the charging handle being accessible regardless of the shooter's preferred side.

The main feature of the MDR is its unique ejection mechanism, which propels spent casings forward away from the shooter's face. This is achieved with the use of two plates, which fit over the MDR's ejection port. One plate houses the ejector, responsible for pushing spent casings off of the bolt, and the other plate acts as a chute guiding the spent casing out of the gun. When the gun is fired, the backwards travel of the bolt activates the ejector, pushing the brass casing into the ejection chute. The bolt then travels back forward, pushing the spent casing down the chute and out the gun and simultaneously loading the next round into the chamber. These two plates can be easily removed and swapped to opposite sides of the gun, allowing the MDR to be quickly modified for a left-handed shooter.[1]

As part of their goal of making the gun as adaptable as possible, Desert Tech offers the MDR in several different calibers. Changing between calibers is relatively painless, simply requiring swapping to a bolt head and barrel for the desired caliber and a magazine well adapter to accommodate the new magazine. First generation MDRs were offered in .223/5.56 NATO and .308/7.62 NATO, and the later MDRX model introduced chambering options for .300 Blackout and 6.5 Creedmoor.

The first showings of the MDR prototype were at SHOT Show 2014, with production of the gun being planned for the following year. Due to some design revisions and complications in the manufacturing process, it wasn't until 2017 that the MDR became available on the commercial market. The early MDRs had some issues, namely with the 7.62 NATO variants, which had problems properly extracting certain brands of military surplus ammunition. Desert Tech, to their credit, took these criticisms to heart, and made several modifications to the MDR to fix these issues. MDR owners were able to send their guns in to the manufacturer to receive these upgrades at no additional cost. All of the improvements made for the original MDR were made standard on the later MDRX model, which is identical in appearance to the original model, along with some added improvements.`

export default App
