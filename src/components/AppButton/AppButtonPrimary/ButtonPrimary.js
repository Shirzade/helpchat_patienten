import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import style from "./ButtonPrimaryStyle";

class ButtonPrimary extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<TouchableOpacity
				style={
					this.props.type == "QR" ? style.primaryButton : style.primaryButtonQR
				}
				onPress={() => this.props.buttonPressed()}
			>
				<Text style={style.titleButton}>{this.props.title}</Text>
			</TouchableOpacity>
		);
	}
}

export default connect(null, null)(ButtonPrimary);
