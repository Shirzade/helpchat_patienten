import React from "react";
import { ImageBackground, View, Dimensions, Text } from "react-native";
import style from "./splashStyle";
import { Actions } from "react-native-router-flux";
import Helper from "../../utils/configs/Helper";
import ImagesPath from "../../utils/common/ImagePath";
import { connect } from "react-redux";
import { EventRegister } from "react-native-event-listeners";
import { setLanguege } from "../../redux/actions";

const { width, height } = Dimensions.get("window");

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    await Helper.getData("languege").then((responseData) => {
      if (
        responseData === null ||
        responseData === "undefined" ||
        responseData === ""
      ) {
        this.handleLocalizationChange(this.props.appLanguege.value);
      } else {
        this.handleLocalizationChange(responseData.value);
        this.props.setLanguege(responseData);
      }
    });

    setTimeout(() => {
      Actions.replace("selectMethod");
    }, 2000);

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
        style={{ width: "100%", height: "100%" }}
        imageStyle={{ width: "100%", height: "100%", resizeMode: "stretch" }}
        source={width > 650 ? ImagesPath.splashIpad : ImagesPath.splashIphone}
      >
        <View style={style.containerWelcomText}>
          <Text style={style.titleStyle}>{Helper.translate("wellcome")}</Text>
          <Text style={style.titleStyle}> {Helper.translate("Helpchat")}</Text>
        </View>
      </ImageBackground>
    );
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

export default connect(mapStateToProps, mapDisPatchToProps)(Splash);
