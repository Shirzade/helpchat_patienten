import React from "react";
import { Container } from "native-base";
import {
	View,
	Image,
	Text,
	FlatList,
	TouchableOpacity,
	Modal,
} from "react-native";
import AppFooter from "../../components/AppFooter/Footer";
import AppHeader from "../../components/AppHeader/Header";
import SubSubChildService from "../../components/items/ItemSubSubChildService/SubSubChildService";
import style from "./SubServiceDetailesStyle";
import { connect } from "react-redux";
import { Actions } from "react-native-router-flux";
import ImagesPath from "../../utils/common/ImagePath";
import { activeButton } from "../../redux/actions";
import ButtonInfo from "../../components/AppButton/AppButtonInfo/ButtonInfo";
import ButtonSuccess from "../../components/AppButton/AppButtonSuccess/ButtonSuccess";
import Loading from "../../components/AppLoading/Loading";
import { showLoading } from "../../redux/actions";
import { restApi } from "../../utils/configs/restApi";
import Helper from "../../utils/configs/Helper";
import { EventRegister } from "react-native-event-listeners";

class SubServiceDetailes extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			activeButton: false,
			serviceInfo: this.props.navigation.getParam("serviceInfo", ""),
			selectedItem: false,
			servicInfo: {},
			options: [],
		};

		console.log("TESTT", this.state.serviceInfo.parent_item_id);
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
					mainTitle={this.state.serviceInfo.title}
					showTitleHeader={true}
					showServicTitle={true}
					headerImage={this.state.serviceInfo.icon}
				/>
				<Loading />
				<View style={style.container}>
					<View style={style.containerTitle}>
						<Text style={style.labelStyle}>
							{Helper.translate("select option")}
						</Text>
					</View>

					<FlatList
						data={this.state.serviceInfo.options}
						renderItem={this.renderItems.bind(this)}
						keyExtractor={(item) => item.id}
					/>

					<View style={{ height: 50 }}>
						<View style={style.containerButtons}>
							<ButtonInfo
								buttonPressed={() => {
									this.setState({ selectedItem: false });
									Actions.pop();
									this.props.showLoading(false);
								}}
								title={Helper.translate("cansele")}
							/>
							<ButtonSuccess
								activeButton={true}
								buttonPressed={() => this.confirmSelectedItem()}
								title={Helper.translate("selected")}
							/>
						</View>
					</View>
				</View>
				<AppFooter active="home" />
			</Container>
		);
	}

	// render item servis list
	renderItems(servis) {
		return (
			<SubSubChildService
				InPressItem={(selectedItem, servicInfo) =>
					this.selectedItem(selectedItem, servicInfo)
				}
				servis={servis}
			/>
		);
	}

	// confirm selected item
	confirmSelectedItem() {
		this.props.showLoading(true);
		let Data = JSON.stringify({
			item_id: this.state.serviceInfo.parent_item_id,
			options: this.state.options,
		});

		Helper.makeRequest({
			url: restApi.API_SEND_REQUEST,
			method: "POST",
			data: Data,
		}).then((response) => {
			if (response.errors) {
				Helper.showToast(response.message);
			} else {
				Helper.showToast(Helper.translate("send request message successfull"));
				Actions.push("home");
			}
			this.setState({
				selectedItem: false,
			});

			this.props.showLoading(false);
		});
	}

	// selected items
	selectedItem(selectedItem, servicInfo) {
		let listOptions = [];
		if (selectedItem) {
			listOptions.push(servicInfo.id);
		} else {
			listOptions.pop(servicInfo.id);
		}
		this.setState({
			options: listOptions,
		});
	}
}

const mapDisPatchToProps = (dispatch) => {
	return {
		showLoading: (showLoadingFlag) => dispatch(showLoading(showLoadingFlag)),
	};
};

const mapStateToProps = (state) => {
	return {
		uuid: state.user.uuid,
		appLanguege: state.langueges.appLanguege,
	};
};

export default connect(mapStateToProps, mapDisPatchToProps)(SubServiceDetailes);
