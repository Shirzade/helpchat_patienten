import React from "react";
import { Container } from "native-base";
import { View, Image, Text, TouchableOpacity, ScrollView } from "react-native";
import AppFooter from "../../components/AppFooter/Footer";
import AppHeader from "../../components/AppHeader/Header";
import style from "./SettingStyle";
import { connect } from "react-redux";
import ToggleSwitch from "toggle-switch-react-native";
import { Actions } from "react-native-router-flux";
import ImagesPath from "../../utils/common/ImagePath";
import colors from "../../utils/common/colors";
import Helper from "../../utils/configs/Helper";
import { EventRegister } from "react-native-event-listeners";
import { showLoading } from "../../redux/actions";
import SystemSetting from "react-native-system-setting";

class Setting extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			bedInformation: {},
			notificationState: true,
			volomeState: true,
			vibrationState: true,
		};

		SystemSetting.getVolume("notification").then((volume) => {
			console.log("Current volume is " + volume);
		});
	}
	async componentDidMount() {
		this.getBedInformation();
		this.listener = EventRegister.addEventListener("changeLanguege", () => {
			this.handleLocalizationChange(this.props.appLanguege.value);
		});

		this.getNotificationSetting();
		this.getVolumeSetting();
		this.getVibrationSetting();
	}
	componentWillUnmount() {
		EventRegister.removeEventListener(this.listener);
	}
	handleLocalizationChange = (lang) => {
		Helper.setI18nConfig(lang);
		this.forceUpdate();
	};

	// -----  get setting  notification -----
	async getNotificationSetting() {
		await Helper.getData("settingNotification").then((responseData) => {
			if (
				responseData === null ||
				responseData === "undefined" ||
				responseData === ""
			) {
				this.setState({
					notificationState: true,
				});
			} else {
				this.setState({
					notificationState: responseData,
				});
			}
		});
	}

	// -----  get setting volume ----
	async getVolumeSetting() {
		await Helper.getData("settingVolume").then((responseData) => {
			if (
				responseData === null ||
				responseData === "undefined" ||
				responseData === ""
			) {
				this.setState({
					volomeState: true,
				});
			} else {
				this.setState({
					volomeState: responseData,
				});
			}
		});
	}

	// -----   get vibration setting -----
	async getVibrationSetting() {
		await Helper.getData("settingVibration").then((responseData) => {
			if (
				responseData === null ||
				responseData === "undefined" ||
				responseData === ""
			) {
				this.setState({
					vibrationState: true,
				});
			} else {
				this.setState({
					vibrationState: responseData,
				});
			}
		});
	}

	//  -------   get bed information --------
	getBedInformation() {
		this.props.showLoading(true);
		Helper.getData("BedInfo").then((responseData) => {
			if (
				responseData === null ||
				responseData === "undefined" ||
				responseData === ""
			) {
			} else {
				this.props.showLoading(false);
				console.log(responseData);
				this.setState({
					bedInformation: responseData,
				});
			}
		});
	}

	// ----  change setting ----
	changeSetting(item) {
		switch (item) {
			case 1:
				{
					this.setState({
						notificationState: !this.state.notificationState,
					});
					Helper.setData("settingNotification", !this.state.notificationState);
				}
				break;
			case 2:
				{
					if (!this.state.volomeState)
						SystemSetting.setVolume(1.0, {
							type: "notification",
							playSound: true,
							showUI: true,
						});
					else
						SystemSetting.setVolume(0, {
							type: "notification",
							playSound: true,
							showUI: true,
						});
					this.setState({
						volomeState: !this.state.volomeState,
					});
					Helper.setData("settingVolume", !this.state.volomeState);
				}
				break;
			case 3:
				this.setState({
					vibrationState: !this.state.vibrationState,
				});
				Helper.setData("settingVibration", !this.state.vibrationState);
				break;
			default:
				break;
		}

		Helper.showToast(Helper.translate("Done"));
	}

	render() {
		return (
			<Container>
				<AppHeader
					showIconBack={true}
					mainTitle={Helper.translate("Setting")}
					showTitleHeader={true}
					centerTitle={true}
				/>
				<ScrollView style={style.container}>
					<View style={style.settingItems}>
						<View style={style.settingSubItem}>
							<Image
								style={style.imageStyle}
								source={ImagesPath.menuIconUser}
							/>
							<Text style={style.labelSubItem}>
								{Helper.translate("Account")}
							</Text>
						</View>
						<TouchableOpacity
							onPress={() =>
								Actions.push("profile", { bedInfo: this.state.bedInformation })
							}
							style={style.settingSuItem}
						>
							<Text style={style.valueLabel}>
								{this.state.bedInformation.title}
							</Text>
						</TouchableOpacity>
					</View>
					<View style={style.settingItems}>
						<View style={style.settingSubItem}>
							<Image
								style={style.imageStyle}
								source={ImagesPath.iconSettingLanguege}
							/>
							<Text style={style.labelSubItem}>
								{Helper.translate("Languege")}
							</Text>
						</View>
						<TouchableOpacity
							onPress={() => Actions.push("langueges")}
							style={style.settingSuItem}
						>
							<Text style={style.valueLabel}>
								{this.props.appLanguege.country}
							</Text>
						</TouchableOpacity>
					</View>
					<View style={style.settingItems}>
						<View style={style.settingSubItem}>
							<Image
								style={style.imageStyle}
								source={ImagesPath.iconSettingNotification}
							/>
							<Text style={style.labelSubItem}>
								{Helper.translate("Notification")}
							</Text>
						</View>
						<View style={style.settingSuItem}>
							<ToggleSwitch
								isOn={this.state.notificationState}
								onColor={colors.colorSuccesfull}
								offColor={colors.colorGrayThree}
								size="medium"
								onToggle={(isOn) => this.changeSetting(1)}
							/>
						</View>
					</View>
					<View style={style.settingItems}>
						<View style={style.settingSubItem}>
							<Image
								style={style.imageStyle}
								source={ImagesPath.iconSettingSound}
							/>
							<Text style={style.labelSubItem}>
								{Helper.translate("Volume")}
							</Text>
						</View>
						<View style={style.settingSuItem}>
							<ToggleSwitch
								isOn={this.state.volomeState}
								onColor={colors.colorSuccesfull}
								offColor={colors.colorGrayThree}
								size="medium"
								onToggle={(isOn) => this.changeSetting(2)}
							/>
						</View>
					</View>
					<View style={style.settingItems}>
						<View style={style.settingSubItem}>
							<Image
								style={style.imageStyle}
								source={ImagesPath.iconSettingVibrate}
							/>
							<Text style={style.labelSubItem}>
								{Helper.translate("Vibration")}
							</Text>
						</View>
						<View style={style.settingSuItem}>
							<ToggleSwitch
								isOn={this.state.vibrationState}
								onColor={colors.colorSuccesfull}
								offColor={colors.colorGrayThree}
								size="medium"
								onToggle={(isOn) => this.changeSetting(3)}
							/>
						</View>
					</View>
					<View style={style.settingItems}>
						<View style={style.settingSubItem}>
							<Image
								style={style.imageStyle}
								source={ImagesPath.iconSettingHelp}
							/>
							<Text style={style.labelSubItem}>{Helper.translate("Help")}</Text>
						</View>
						<TouchableOpacity
							onPress={() => Actions.push("profile")}
							style={style.settingSuItem}
						>
							<Text style={style.valueLabel}>
								{/* {this.props.appLanguege.country} */}
							</Text>
						</TouchableOpacity>
					</View>
				</ScrollView>
				<AppFooter active="setting" />
			</Container>
		);
	}
}

const mapDisPatchToProps = (dispatch) => {
	return {
		showLoading: (showLoadingFlag) => dispatch(showLoading(showLoadingFlag)),
	};
};

const mapStateToProps = (state) => {
	return {
		appLanguege: state.langueges.appLanguege,
	};
};

export default connect(mapStateToProps, mapDisPatchToProps)(Setting);
