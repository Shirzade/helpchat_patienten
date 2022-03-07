import React, { Component } from "react";
import { Modal, Platform, View } from "react-native";
import style from "./LoadingStyle";
import { Spinner } from "native-base";
import { connect } from "react-redux";
import colors from "../../utils/common/colors";

class Loading extends Component {
  state = {
    modalVisible: false,
  };
  toggleModal(visible) {
    this.setState({ modalVisible: visible });
  }
  render() {
    return (
      <View
        style={
          this.props.showLoadingFlag ? style.modalAndroid : { display: "none" }
        }
      >
        <Spinner color={colors.colorBett} />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    showLoadingFlag: state.loading.showLoadingFlag,
  };
};

export default connect(mapStateToProps, null)(Loading);
