import React from "react";
import { Container } from "native-base";
import {
	View,
	Image,
	Text,
	TouchableOpacity,
	Modal,
	ScrollView,
	AsyncStorage,
} from "react-native";
import AppFooter from "../../components/AppFooter/Footer";
import AppHeader from "../../components/AppHeader/Header";
import style from "./profileStyle";
import { connect } from "react-redux";
import ToggleSwitch from "toggle-switch-react-native";
import { Actions } from "react-native-router-flux";
import ImagesPath from "../../utils/common/ImagePath";
import colors from "../../utils/common/colors";
import Helper from "../../utils/configs/Helper";
import ButtonInfo from "../../components/AppButton/AppButtonInfo/ButtonInfo";
import ButtonSuccess from "../../components/AppButton/AppButtonSuccess/ButtonSuccess";
import { showLoading, setTokenBed, setUserId } from "../../redux/actions";
import ButtonPrimarySmall from "../../components/AppButton/AppButtonPrimarySmall/ButtonPrimarySmall";

import { EventRegister } from "react-native-event-listeners";

class Profile extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showModalLogout: false,
			bedInformation: this.props.navigation.getParam("bedInfo", ""),
		};
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
		return (
			<Container>
				<AppHeader
					showIconBack={true}
					mainTitle="Acount"
					showTitleHeader={true}
					centerTitle={true}
				/>

				<ScrollView>
					<View style={style.container}>
						<View style={style.subContainer}>
							<View style={style.firstSection}>
								<View style={style.nameSection}>
									<View>
										<Text style={style.nameLabelStyle}>
											{this.state.bedInformation.title}
										</Text>
									</View>
									<View>
										<Image
											style={style.avatarImage}
											source={ImagesPath.menuIconUser}
										/>
									</View>
								</View>
								<View style={style.infoSection}>
									<Text style={style.infoLabelStyle}>
										You Can edit your Account
									</Text>
									<Text style={style.infoLabelStyle}>Name here.</Text>
								</View>
							</View>
							<TouchableOpacity style={style.secondSection}>
								<Image style={style.editImage} source={ImagesPath.iconEdit} />
								<Text style={style.label}>edit</Text>
							</TouchableOpacity>
						</View>

						<View style={style.logOutSection}>
							<ButtonInfo
								buttonPressed={() => {
									this.setState({ showModalLogout: true });
								}}
								title={Helper.translate("logout")}
							/>
						</View>

						<Modal
							animationType="slide"
							transparent={true}
							visible={this.state.showModalLogout}
						>
							<View style={{ flex: 1 }}>
								<View style={style.containerExit}>
									<View style={style.containerQuestion}>
										<Text style={style.questionStyle}>
											{Helper.translate("logout question")}
										</Text>
									</View>
									<View style={style.containerButtons}>
										<ButtonPrimarySmall
											buttonPressed={() => {
												this.setState({ showModalLogout: false });
											}}
											title={Helper.translate("cansele")}
										/>
										<ButtonPrimarySmall
											activeButton={true}
											type="WHITE"
											buttonPressed={() => this.logOut()}
											title={Helper.translate("confirm")}
										/>
									</View>
								</View>
							</View>
						</Modal>
					</View>
				</ScrollView>

				<AppFooter active="setting" />
			</Container>
		);
	}
	logOut() {
		this.setState({ showModalLogout: false });
		AsyncStorage.removeItem("BedInfo");
		AsyncStorage.removeItem("token");
		this.props.setTokenBed("");
		this.props.setUserId("");
		Actions.replace("selectMethod");
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

export default connect(mapStateToProps, mapDisPatchToProps)(Profile);
