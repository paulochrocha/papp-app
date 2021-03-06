import React, { Component } from 'react';
import { AppRegistry, View, Text, TouchableOpacity } from 'react-native';
import{ Fonts, TextStyles} from './../styles/container'

class TabeHeader extends Component {
  render() {
    return (
      <View style={{flex: 1,padding:40 , flexDirection: 'column'}}>
        <View>
          <Text style={[TextStyles.nearBy, Fonts.Avenir]}>
              Let us suggest you some nearby groups.
          </Text>
        </View>
        <View>
          <Text style={[TextStyles.nearByTitle, Fonts.Avenir]}>
              {'Allow Papp to See Where You Are'.toUpperCase()}
          </Text>
        </View> 
      </View>
    );
  }
}
 
export default TabeHeader
