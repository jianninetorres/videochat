import React from 'react';
import { TouchableOpacity, Image } from 'react-native';

const MessageBtn = ({onPress, style}) => {
  return(
    <TouchableOpacity onPress={onPress}>
      <Image
        style={style}
        source={require('../../../assets/icons/messages.png')}/>
    </TouchableOpacity>
  );
}

 export { MessageBtn };
