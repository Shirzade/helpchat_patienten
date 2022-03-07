import React from "react";
import {
	ImageBackground,
	TouchableOpacity,
	Text,
	Image,
	View,
} from "react-native";
import { connect } from "react-redux";
import style from "./HeaderStyle";
import { Actions } from "react-native-router-flux";
import ImagesPath from "../../utils/common/ImagePath";
import Helper from "../../utils/configs/Helper";
import { SvgCssUri } from "react-native-svg";

class AppHeader extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style={style.container}>
				<ImageBackground
					imageStyle={{ width: "100%", height: "100%", resizeMode: "stretch" }}
					style={style.imageBackground}
					source={ImagesPath.backgroundHeaderImg}
				>
					{this.showBackIcon(this.props.showIconBack)}
				</ImageBackground>
				{!this.props.centerTitle
					? this.showTitleHeader(this.props.showTitleHeader)
					: this.showCenterTitleHeader()}
			</View>
		);
	}

	// ---- show title header ----
	showTitleHeader(showTitleHeader) {
		if (showTitleHeader)
			return this.props.showServicTitle ? (
				<View style={style.titleHeader}>
					<View style={style.containerServiceIcon}>
						<SvgCssUri
							width="80%"
							height="80%"
							uri={Helper.getImageUrl(this.props.headerImage)}
						/>
					</View>
					<View style={style.containerServiceTitle}>
						<Text style={style.mainTitle}>{this.props.mainTitle}</Text>
					</View>
				</View>
			) : (
				<View style={style.titleHeader}>
					<View style={style.containerTitle}>
						<Text style={style.mainTitle}>{this.props.mainTitle}</Text>
					</View>
					{/* <TouchableOpacity style={style.containerIcon}>
            <Image source={ImagesPath.iconMicrophon} />
          </TouchableOpacity> */}
				</View>
			);
		else return null;
	}

	// ---- center titlte ----
	showCenterTitleHeader() {
		return (
			<View style={style.centerTitleHeader}>
				<Text style={style.mainTitle}>{this.props.mainTitle}</Text>
			</View>
		);
	}

	//show icone header
	showIcon(dontShowIcon) {
		if (!dontShowIcon)
			return (
				<View>
					{/* <Image source={require("../../assetes/img/hc_header_peaple.png")} /> */}
				</View>
			);
		else return null;
	}

	// ----   show back icon ----
	showBackIcon(showIconBack) {
		if (showIconBack)
			return (
				<TouchableOpacity
					onPress={() => Actions.pop()}
					style={style.containerBack}
				>
					<Image source={ImagesPath.iconBack} />
					<Text style={style.titleBack}>{this.props.backTitle}</Text>
				</TouchableOpacity>
			);
		else return null;
	}
}

export default connect(null, null)(AppHeader);
