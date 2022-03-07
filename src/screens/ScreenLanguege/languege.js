import React from "react";
import { Container } from "native-base";
import {
  View,
  FlatList,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import AppFooter from "../../components/AppFooter/Footer";
import AppHeader from "../../components/AppHeader/Header";
import style from "./languegeStyle";
import { connect } from "react-redux";
import LanguegeItem from "../../components/items/ItemLanguege/Languege";
import { setLanguege } from "../../redux/actions";
import { EventRegister } from "react-native-event-listeners";
import Helper from "../../utils/configs/Helper";

class Languege extends React.Component {
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
  };

  render() {
    const LanguegeList = [
      {
        country: "Deutsch",
        value: "gr",
        id: "3",
      },
      // {
      //   country: "Français",
      //   value: "fc",
      //   id: "2",
      // },
      {
        country: "English",
        value: "en",
        id: "1",
      },
      // {
      //   country: "Español",
      //   value: "es",
      //   id: "4",
      // },
    ];
    return (
      <Container>
        <AppHeader
          showIconBack={true}
          mainTitle={Helper.translate("Choose your Language")}
          showTitleHeader={true}
          centerTitle={true}
        />

        <View style={style.container}>
          <FlatList
            data={LanguegeList}
            renderItem={this.renderItems.bind(this)}
            keyExtractor={(item) => item.id}
          />
        </View>

        <AppFooter active="setting" />
      </Container>
    );
  }

  // ---- render item list ----
  renderItems(languege) {
    return (
      <LanguegeItem
        languege={languege}
        onPressItem={() => this.setLanguege(languege)}
      />
    );
  }
  // ----  set languege ----
  setLanguege(languege) {
    this.props.setLanguege(languege.item);
    this.handleLocalizationChange(languege.item.value);
    Helper.setData("languege", languege.item);
    setTimeout(() => this.changeLanguege(), 100);
  }

  changeLanguege() {
    EventRegister.emit("changeLanguege", "change languege");
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

export default connect(mapStateToProps, mapDisPatchToProps)(Languege);
