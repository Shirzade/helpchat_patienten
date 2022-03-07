import React from "react";
import { View, Animated, Easing, Text, ImageBackground } from "react-native";
import { RNCamera } from "react-native-camera";
import { Actions } from "react-native-router-flux";
import ImagesPath from "../../utils/common/ImagePath";
import ButtonPrimarySmall from "../../components/AppButton/AppButtonPrimarySmall/ButtonPrimarySmall";
import colors from "../../utils/common/colors";
import base64 from "react-native-base64";
import { EventRegister } from "react-native-event-listeners";
import Helper from "../../utils/configs/Helper";
import { restApi } from "../../utils/configs/restApi";
import { setUserId, showLoading, setTokenBed } from "../../redux/actions";

import { connect } from "react-redux";

class QRScanner extends React.Component {
	constructor(props) {
		super(props);
		(this.state = {
			activeScanner: true,
		}),
			(this.animatedValue = new Animated.Value(0));
	}

	animate() {
		this.animatedValue.setValue(0);
		Animated.timing(this.animatedValue, {
			toValue: 1,
			duration: 120,
			easing: Easing.linear,
		}).start(() => this.animate());
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
		const opacity = this.animatedValue.interpolate({
			inputRange: [0, 0.5, 1],
			outputRange: [0, 1, 0],
		});
		return (
			<View style={{ flex: 1 }}>
				<RNCamera
					ref={(ref) => {
						this.camera = ref;
					}}
					ref={(cam) => (this.cam = cam)}
					onCameraReady={this.prepareRatio}
					flashMode={"on"}
					barcodeFinderBorderWidth={10}
					barcodeFinderWidth={350}
					barcodeFinderHeight={400}
					autoFocus={"on"}
					mirrorImage={false}
					barcodeFinderVisible={true}
					onBarCodeRead={
						this.state.activeScanner ? this.onBarCodeRead.bind(this) : null
					}
					type={RNCamera.Constants.Type.back}
					style={{
						width: "100%",
						height: "100%",
						justifyContent: "center",
						alignContent: "center",
						alignItems: "center",
					}}
				>
					<View
						style={{
							width: "100%",
							height: "100%",
						}}
					>
						<View
							style={{
								width: "100%",
								height: "20%",
								backgroundColor: colors.colorBg,
							}}
						></View>
						<View
							style={{
								flexDirection: "row",
								width: "100%",
								height: "40%",
							}}
						>
							<View
								style={{
									height: "100%",
									width: "10%",
								}}
							>
								<ImageBackground
									style={{ width: "100%", height: "100%" }}
									imageStyle={{
										width: "100%",
									}}
									source={ImagesPath.imageBgRightScanner}
								></ImageBackground>
							</View>
							<View
								style={{
									height: "100%",
									width: "80%",
									justifyContent: "center",
									alignItems: "center",
									alignContent: "center",
								}}
							>
								<Animated.View
									style={{
										opacity,
										height: 1,
										width: "100%",
										backgroundColor: colors.colorQRScanner,
									}}
								/>
							</View>
							<View
								style={{
									backgroundColor: colors.colorBg,
									height: "100%",
									width: "10%",
								}}
							></View>
						</View>
						<View
							style={{
								width: "100%",
								height: "40%",
								backgroundColor: colors.colorBg,
							}}
						>
							<ImageBackground
								style={{
									width: "100%",
									height: "100%",
									justifyContent: "center",
									alignContent: "center",
									alignItems: "center",
								}}
								imageStyle={{
									width: "100%",
								}}
								source={ImagesPath.imageBgBottomScanner}
							>
								<ButtonPrimarySmall
									title={Helper.translate("Go back")}
									buttonPressed={() => this.goBack()}
								/>
							</ImageBackground>
						</View>
					</View>
				</RNCamera>
			</View>
		);
	}

	// ---- scan QR code ----

	onBarCodeRead(scanResult) {
		this.setState({
			activeScanner: false,
		});
		console.log(scanResult.data);
		console.log(scanResult.data.search("qrlogin") + 8);
		let startUrl = scanResult.data.search("qrlogin") + 8;
		this.loginActionWithUUID(scanResult.data.substring(28, 100));
	}

	// -----  login button with uuid -----
	loginActionWithUUID(uuid) {
		this.props.showLoading(true);
		let Data = JSON.stringify({
			uuid: uuid,
		});
		Helper.makeRequest({
			url: restApi.API_LOGIN_WITH_CODE,
			method: "POST",
			data: Data,
		}).then((response) => {
			if (response.data) {
				Helper.showToast(response.message);
				Helper.setData("BedInfo", response.data.entity);
				Helper.setData("token", response.data.token);
				this.props.setTokenBed(response.data.token);
				this.props.setUserId(response.data.entity.uuid);
				Actions.replace("home");
			} else {
				Helper.showToast(response.message);
			}
			this.props.showLoading(false);
		});
	}

	// ---- go back ----
	goBack() {
		Actions.push("selectMethod");
	}
}
const mapDisPatchToProps = (dispatch) => {
	return {
		showLoading: (showLoadingFlag) => dispatch(showLoading(showLoadingFlag)),
		setTokenBed: (token) => dispatch(setTokenBed(token)),
		setUserId: (uuid) => dispatch(setUserId(uuid)),
	};
};

const mapStateToProps = (state) => {
	return {
		appLanguege: state.langueges.appLanguege,
	};
};
export default connect(mapStateToProps, mapDisPatchToProps)(QRScanner);
