import React from "react";
import { Text, View, Image, ImageBackground } from "react-native";
import style from "./selectMethodStyle";
import { connect } from "react-redux";
import { Actions } from "react-native-router-flux";
import ImagesPath from "../../utils/common/ImagePath";
import Helper from "../../utils/configs/Helper";
import { EventRegister } from "react-native-event-listeners";
import ButtonPrimary from "../../components/AppButton/AppButtonPrimary/ButtonPrimary";

class SelectMethod extends React.Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    this.listener = EventRegister.addEventListener("changeLanguege", () => {
      this.handleLocalizationChange(this.props.appLanguege.value);
    });
  }

  componentWillUnmount() {
    EventRegister.removeEventListener(this.listener);
  }

  handleLocalizationChange = (lang) => {
    Helper.setI18nConfig(lang);
    this.forceUpdate();
  };

  render() {
    return (
      <ImageBackground
        style={style.container}
        imageStyle={{ width: "100%", height: "100%", resizeMode: "stretch" }}
        source={ImagesPath.backgroundPage}
      >
        <View style={style.containerButtons}>
          <Text style={style.containerTilte}>Helpchat</Text>
          <ButtonPrimary
            title={Helper.translate("enter code")}
            buttonPressed={() => Actions.loginUsername()}
          />
          <ButtonPrimary
            title={Helper.translate("Scan QR")}
            type="QR"
            buttonPressed={() => Actions.push("QRScanner")}
          />
        </View>
      </ImageBackground>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    appLanguege: state.langueges.appLanguege,
  };
};

export default connect(mapStateToProps, null)(SelectMethod);
