import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import style from "./ButtonInfoStyle";

class ButtonInfo extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<TouchableOpacity
				style={style.infoButton}
				onPress={() => this.props.buttonPressed()}
			>
				<Text style={style.titleButton}>{this.props.title}</Text>
			</TouchableOpacity>
		);
	}
}

export default connect(null, null)(ButtonInfo);
