import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { connect } from "react-redux";
import style from "./SubServiceStyle";
import ImagesPath from "../../../utils/common/ImagePath";

class SubServic extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedItem: false,
		};
	}

	render() {
		const servicInfo = this.props.servis;
		return (
			<TouchableOpacity
				onPress={() =>
					this.onPressItem(this.state.selectedItem, () =>
						this.props.InPressItem()
					)
				}
				style={
					this.state.selectedItem ? style.containerActive : style.container
				}
			>
				<View style={style.containerImg}>
					<Image style={style.imgStyle} source={servicInfo.item.img} />
					<View style={style.subImgStyle}>
						<Image source={servicInfo.item.subImg} />
					</View>
				</View>

				<View style={style.containerTitle}>
					<Text style={style.labelStyle}>{servicInfo.item.name}</Text>
				</View>
			</TouchableOpacity>
		);
	}

	// select item

	onPressItem(value, callback) {
		this.setState({
			selectedItem: !value,
		});
		callback();
	}
}

export default connect(null, null)(SubServic);
