import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { connect } from "react-redux";
import style from "./SubSubChildServiceStyle";
import colors from "../../../utils/common/colors";
import ToggleSwitch from "toggle-switch-react-native";
import ImagesPath from "../../../utils/common/ImagePath";
import Helper from "../../../utils/configs/Helper";
import { SvgCssUri } from "react-native-svg";
class SubSubChildService extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedItem: false,
		};
	}

	render() {
		const servicInfo = this.props.servis;
		console.log("----_____-----", servicInfo);
		return (
			<View style={style.container}>
				<TouchableOpacity
					onPress={(selectedItem) =>
						this.onPressItem(this.state.selectedItem, () =>
							this.props.InPressItem(selectedItem, servicInfo.item)
						)
					}
					style={
						this.state.selectedItem
							? style.containerActive
							: style.containerInfo
					}
				>
					<View style={style.containerImg}>
						<SvgCssUri
							width="60%"
							height="60%"
							uri={Helper.getImageUrl(servicInfo.item.image)}
						/>
					</View>
					<View style={style.containerTitle}>
						<Text style={style.labelStyle}>{servicInfo.item.title}</Text>
					</View>
				</TouchableOpacity>
				<View style={style.containerSwitch}>
					<ToggleSwitch
						isOn={this.state.selectedItem}
						onColor={colors.colorSuccesfull}
						offColor={colors.colorGrayThree}
						label=""
						labelStyle={{ color: "black", fontWeight: "900" }}
						size="large"
						onToggle={(selectedItem) =>
							this.onPressItem(this.state.selectedItem, () =>
								this.props.InPressItem(selectedItem, servicInfo)
							)
						}
					/>
				</View>
			</View>
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

export default connect(null, null)(SubSubChildService);
