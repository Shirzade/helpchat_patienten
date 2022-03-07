import React from "react";
import { Text, View, TouchableOpacity, Image, Animated } from "react-native";
import style from "./LanguegeStyle";
import { connect } from "react-redux";
import ImagesPath from "../../../utils/common/ImagePath";
import { setLanguege } from "../../../redux/actions";

class LanguegeItem extends React.Component {
  constructor(props) {
    super(props);
    this.delayValue = 500;
    this.state = {
      selectLanguege: false,
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

    return (
      <Animated.View
        style={[style.mainContainer, { transform: [{ translateX }] }]}
      >
        <TouchableOpacity
          onPress={() => this.props.onPressItem()}
          style={
            this.props.appLanguege.id === this.props.languege.item.id
              ? style.containerActive
              : style.container
          }
        >
          <View style={style.itemsStyle}>
            <View style={style.containerCountryName}>
              <Image
                source={this.getImageCountry(this.props.languege.item.id)}
              />
              <Text style={style.labelStyle}>
                {this.props.languege.item.country}
              </Text>
            </View>
            <View style={style.containerCheck}>
              <Image
                source={
                  this.props.appLanguege.id === this.props.languege.item.id
                    ? ImagesPath.iconDarkTick
                    : null
                }
              />
            </View>
          </View>
        </TouchableOpacity>
      </Animated.View>
    );
  }

  // ---- show image ----
  getImageCountry(id) {
    switch (id) {
      case "3":
        return ImagesPath.iconLanguegeGerman;
        break;
      case "2":
        return ImagesPath.iconLanguegeFrenc;
        break;
      case "1":
        return ImagesPath.iconLanguegeEng;
        break;
      case "4":
        return ImagesPath.iconLanguegeSpan;
        break;
    }
  }
}

const mapDisPatchToProps = (dispatch) => {
  return {
    setLanguege: (appLanguege) => dispatch(setLanguege(appLanguege)),
  };
};

const mapStateToProps = (state) => {
  return {
    appLanguege: state.langueges.appLanguege,
  };
};

export default connect(mapStateToProps, mapDisPatchToProps)(LanguegeItem);
