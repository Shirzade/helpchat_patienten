import React from "react";
import { Container } from "native-base";
import {
  View,
  Image,
  Text,
  FlatList,
  TouchableOpacity,
  Alert,
} from "react-native";
import AppFooter from "../../components/AppFooter/Footer";
import AppHeader from "../../components/AppHeader/Header";
import SubService from "../../components/items/ItemSubService/SubService";
import style from "./ServiceDetailesStyle";
import { connect } from "react-redux";
import { Actions } from "react-native-router-flux";
import ImagesPath from "../../utils/common/ImagePath";
import { activeButton } from "../../redux/actions";
import ButtonInfo from "../../components/AppButton/AppButtonInfo/ButtonInfo";
import ButtonSuccess from "../../components/AppButton/AppButtonSuccess/ButtonSuccess";

class ServiceDetailes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeButton: false,
      servisList: [
        { name: "ali", img: ImagesPath.img6, subImg: ImagesPath.img7 },
        { name: "reza", img: ImagesPath.img6, subImg: ImagesPath.img8 },
      ],
    };
  }

  render() {
    return (
      <Container>
        <AppHeader
          showIconBack={true}
          mainTitle="Toilettengang"
          showTitleHeader={true}
          showServicTitle={true}
          headerImage={ImagesPath.img1}
        />
        <View style={style.container}>
          <FlatList
            data={this.state.servisList}
            renderItem={this.renderItems.bind(this)}
            keyExtractor={(item) => item.id}
          />

          <View style={style.containerButtons}>
            <ButtonInfo title="cansele" />
            <ButtonSuccess
              activeButton={this.state.activeButton}
              buttonPressed={() => alert("sssss")}
              title="selected"
            />
          </View>
        </View>
        <AppFooter active="home" />
      </Container>
    );
  }

  // render item servis list
  renderItems(servis) {
    return (
      <SubService
        InPressItem={() => this.setState({ activeButton: true })}
        servis={servis}
      />
    );
  }

  // selected items
  selectedItem() {
    this.props.activeButton("true");
  }
}

const mapDisPatchToProps = (dispatch) => {
  return {
    activeButton: (active) => dispatch(activeButton(active)),
  };
};

export default connect(null, mapDisPatchToProps)(ServiceDetailes);
