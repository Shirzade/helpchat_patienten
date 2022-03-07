import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import style from "./ButtonPrimarySmallStyle";

class ButtonPrimarySmall extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<TouchableOpacity
				style={
					this.props.type == "WHITE"
						? style.primaryButtonSmallWhite
						: style.primaryButtonSmall
				}
				onPress={() => this.props.buttonPressed()}
			>
				<Text
					style={
						this.props.type == "WHITE"
							? style.primaryButtonLabelWhiteLabel
							: style.primaryButtonSmallLabel
					}
				>
					{this.props.title}
				</Text>
			</TouchableOpacity>
		);
	}
}

export default connect(null, null)(ButtonPrimarySmall);
