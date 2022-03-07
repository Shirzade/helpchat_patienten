import React from "react";
import { Image, Dimensions, View, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { FooterTab, Footer, Button, Text } from "native-base";
import style from "./FooterStyle";
import { Actions } from "react-native-router-flux";
import { BoxShadow } from "react-native-shadow";
import ImagesPath from "../../utils/common/ImagePath";
import { EventRegister } from "react-native-event-listeners";
import Helper from "../../utils/configs/Helper";

class AppFooter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedAll: false,
      saveItems: false,
    };
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
    const shadowOpt = {
      width: Dimensions.get("window").width,
      height: 80,
      color: "#1F2433",
      border: 30,
      radius: 20,
      opacity: 0.1,
      x: 2,
      y: 3,
      style: { marginVertical: 5 },
    };
    return (
      <View>
        <BoxShadow setting={shadowOpt} style={style.shadowContainer}>
          <FooterTab style={style.subContainer}>
            <Button
              vertical
              onPress={
                this.props.active != "home"
                  ? () => this.navigation("home")
                  : null
              }
            >
              <Image
                style={style.menuIcon}
                source={
                  this.props.active === "home"
                    ? ImagesPath.menuIconHomeActive
                    : ImagesPath.menuIconHome
                }
              />
              <Text style={style.titleMenu}>{Helper.translate("Home")}</Text>
            </Button>
            <Button
              vertical
              onPress={
                this.props.active != "user"
                  ? () => this.navigation("user")
                  : null
              }
            >
              <Image
                style={style.menuIcon}
                source={
                  this.props.active === "user"
                    ? ImagesPath.menuIconUserActive
                    : ImagesPath.menuIconUser
                }
              />
              <Text style={style.titleMenu}>{Helper.translate("User")}</Text>
            </Button>
            <Button
              vertical
              onPress={
                this.props.active != "setting"
                  ? () => this.navigation("setting")
                  : null
              }
            >
              <Image
                style={style.menuIcon}
                source={
                  this.props.active === "setting"
                    ? ImagesPath.menuIconSettingActive
                    : ImagesPath.menuIconSetting
                }
              />
              <Text style={style.titleMenu}>{Helper.translate("Setting")}</Text>
            </Button>
          </FooterTab>
        </BoxShadow>
      </View>
    );
  }

  // ---- navigation pages ----
  navigation(page) {
    switch (page) {
      case "home":
        Actions.push("home");
        break;
      case "user":
        Actions.push("user");
        break;
      case "setting":
        Actions.push("setting");
        break;
    }
  }
}

const mapStateToProps = (state) => {
  return {
    appLanguege: state.langueges.appLanguege,
  };
};

export default connect(mapStateToProps, null)(AppFooter);
