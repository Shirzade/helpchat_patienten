import React from "react";
import { Text, View, TextInput, ImageBackground, Keyboard } from "react-native";
import colors from "../../utils/common/colors";
import style from "./LoginUsernameStyle";
import { connect } from "react-redux";
import { Actions } from "react-native-router-flux";
import ImagesPath from "../../utils/common/ImagePath";
import Helper from "../../utils/configs/Helper";
import Loading from "../../components/AppLoading/Loading";
import { showLoading, setTokenBed, setUserId } from "../../redux/actions";
import { restApi } from "../../utils/configs/restApi";
import { validators } from "../../utils/common/validationFunctions";
import { EventRegister } from "react-native-event-listeners";
import ButtonPrimarySmall from "../../components/AppButton/AppButtonPrimarySmall/ButtonPrimarySmall";

class LoginUsername extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			bedCode: null,
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
			<ImageBackground
				style={style.container}
				imageStyle={{ width: "100%", height: "100%", resizeMode: "stretch" }}
				source={ImagesPath.backgroundPage}
			>
				<Loading />
				<View style={style.inputsContainer}>
					<Text style={style.title}>
						{Helper.translate("Enter Username and Password")}
					</Text>
					<TextInput
						placeholderTextColor={colors.colorGray}
						placeholder={Helper.translate("enter code")}
						onChangeText={this.handleCode}
						style={style.inputStyle}
					/>
				</View>
				<View style={style.buttonsContainer}>
					<View style={style.buttons}>
						<ButtonPrimarySmall
							title={Helper.translate("Go back")}
							buttonPressed={() => this.goBack()}
						/>
						{/* <ButtonPrimarySmall
							type="WHITE"
							title={Helper.translate("Login")}
							buttonPressed={() => this.loginAction()} */}
						<ButtonPrimarySmall
							type="WHITE"
							title={Helper.translate("Login")}
							buttonPressed={() => this.loginAction()}
						/>
					</View>
				</View>
			</ImageBackground>
		);
	}

	// ---- handlre password ----
	handleCode = (text) => {
		this.setState({
			bedCode: text,
		});
	};
	// ---- go back ----
	goBack() {
		Actions.push("selectMethod");
	}

	// -----  login button with code -----
	loginAction() {
		Keyboard.dismiss();
		this.props.showLoading(true);
		if (validators.checkRequire("Bed Code", this.state.bedCode)) {
			let Data = JSON.stringify({
				code: this.state.bedCode,
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
		} else {
			this.props.showLoading(false);
		}
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

export default connect(mapStateToProps, mapDisPatchToProps)(LoginUsername);
