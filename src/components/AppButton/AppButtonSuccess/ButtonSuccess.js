import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import style from "./ButtonSuccessStyle";
import { View } from "native-base";

class ButtonSuccess extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View
        style={
          this.props.activeButton
            ? style.successButton
            : style.successButtonUnActive
        }
      >
        <TouchableOpacity onPress={() => this.props.buttonPressed()}>
          <Text style={style.successButtonLabel}>{this.props.title}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default connect(null, null)(ButtonSuccess);
