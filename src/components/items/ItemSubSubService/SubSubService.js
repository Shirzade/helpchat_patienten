import React from "react";
import { Text, View, TouchableOpacity, Image, Animated } from "react-native";
import { connect } from "react-redux";
import style from "./SubSubServiceStyle";
import ImagesPath from "../../../utils/common/ImagePath";
import Helper from "../../../utils/configs/Helper";
import { SvgCssUri } from "react-native-svg";
class SubSubServic extends React.Component {
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
    const servicInfo = this.props.servis;
    const selectedItem = this.props.selectedItem;

    this.delayValue = this.delayValue + 500;
    const translateX = this.state.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [this.delayValue, 1],
    });

    return (
      <Animated.View style={{ transform: [{ translateX }] }}>
        <TouchableOpacity
          onPress={() =>
            this.onPressItem(this.props.selectedItem, () =>
              this.props.InPressItem(servicInfo.item)
            )
          }
          style={
            this.props.selectedItem &&
            this.props.serviceId === servicInfo.item.id
              ? style.containerActive
              : style.container
          }
        >
          <View style={style.containerImg}>
            <SvgCssUri
              width="70%"
              height="70%"
              uri={Helper.getImageUrl(servicInfo.item.icon)}
            />
          </View>

          <View style={style.containerTitle}>
            <Text style={style.labelStyle}>{servicInfo.item.title}</Text>
            <Image
              style={
                servicInfo.item.children.length > 0 || this.checkOptions()
                  ? style.iconRightStyle
                  : { display: "none" }
              }
              source={ImagesPath.iconArrowRight}
            />
          </View>
        </TouchableOpacity>
      </Animated.View>
    );
  }

  //
  checkOptions() {
    if (this.props.servis.item.options) {
      return this.props.servis.item.options.length > 0 ? true : false;
    } else {
      return false;
    }
  }

  // select item
  onPressItem(value, callback) {
    this.setState({
      selectedItem: !value,
    });
    callback();
  }
}

const mapStateToProps = (state) => {
  return {
    serviceId: state.service.serviceId,
  };
};

export default connect(mapStateToProps, null)(SubSubServic);
