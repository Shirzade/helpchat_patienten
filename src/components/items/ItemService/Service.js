import React from "react";
import { Text, View, TouchableOpacity, Animated } from "react-native";
import { connect } from "react-redux";
import style from "./ServisStyle";
import Helper from "../../../utils/configs/Helper";
import { Actions } from "react-native-router-flux";
import { SvgCssUri } from "react-native-svg";

class Servic extends React.Component {
  constructor(props) {
    super(props);
    this.delayValue = 500;
    this.state = {
      selectedItem: false,
      animatedValue: new Animated.Value(0),
      data: [],
    };
  }
  componentDidMount = () => {
    Animated.spring(this.state.animatedValue, {
      toValue: 1,
      tension: 20,
      useNativeDriver: true,
    }).start();
  };

  render() {
    this.delayValue = this.delayValue + 500;
    const translateX = this.state.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [this.delayValue, 1],
    });

    const servicInfo = this.props.servis;
    return (
      <Animated.View
        style={[style.mainContainer, { transform: [{ translateX }] }]}
      >
        <TouchableOpacity
          onPress={() =>
            this.onPressItem(
              this.state.selectedItem,
              servicInfo.item.children,
              servicInfo.item.title,
              servicInfo.item.icon
            )
          }
          style={style.container}
        >
          <SvgCssUri
            width="55%"
            height="55%"
            uri={Helper.getImageUrl(this.props.servis.item.icon)}
          />
          <Text style={style.labelStyle}>{servicInfo.item.title}</Text>
        </TouchableOpacity>
      </Animated.View>
    );
  }

  // select item
  onPressItem(value, itemChildren, title, icon) {
    this.setState({
      selectedItem: !value,
    });

    Actions.subServiceList({
      subServiceList: itemChildren,
      serviceTitle: title,
      serviceIcon: icon,
    });
  }
}

export default connect(null, null)(Servic);
