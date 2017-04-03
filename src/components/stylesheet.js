import React from "react-native";
import Dimensions from 'Dimensions';

// Precalculate Device Dimensions for better performance
const x = Dimensions.get('window').width;
const y = Dimensions.get('window').height;

// Calculating ratio from iPhone breakpoints
const ratioX = x < 375 ? (x < 320 ? 0.75 : 0.875) : 1 ;
const ratioY = y < 568 ? (y < 480 ? 0.75 : 0.875) : 1 ;

// We set our base font size value
const base_unit = 16;

// We're simulating EM by changing font size according to Ratio
const unit = base_unit * ratioX;

// We add an em() shortcut function
function em(value) {
  return unit * value;
}

/* All iPhone simulators in XCode (iOS 10.2)
react-native run-ios --simulator=""

iPhone 5
iPhone 5s
iPhone 6
iPhone 6 Plus
iPhone 6s
iPhone 6s Plus
iPhone 7
iPhone 7 Plus
iPhone SE
iPad Retina
iPad Air
iPad Air 2
iPad Pro (9.7 inch)
iPad Pro (12.9 inch)
*/

// Then we set our styles with the help of the em() function
export default Stylesheet = {

  // GENERAL
  DEVICE_WIDTH: x,
  DEVICE_HEIGHT: y,
  RATIO_X: ratioX,
  RATIO_Y: ratioY,
  UNIT: em(1),
  PADDING: em(1.25),

  // CARD
  CARD_WIDTH: x - em(1.25) * 2,
  CARD_HEIGHT: (x - em(1.25) * 2) * (3/5),
  CARD_PADDING_X: em(1.875),
  CARD_PADDING_Y: em(1.25),

  // Smallscreen
  SMALLSCREEN_WIDTH: x * 0.387, //145
  SMALLSCREEN_HEIGHT: y * 0.174, //116

  //Largescreen
  LARGESCREEN_WIDTH: x,
  LARGSCREEN_HEIGHT: y * 0.5997, //375px

  // FONT
  FONT_SIZE: em(1),
  FONT_SIZE_SMALLER: em(0.75),
  FONT_SIZE_SMALL: em(0.875),
  FONT_SIZE_TITLE: em(1.25),

};
