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
import SubSubService from "../../components/items/ItemSubSubService/SubSubService";
import style from "./SubServiceListStyle";
import { connect } from "react-redux";
import { Actions } from "react-native-router-flux";
import ImagesPath from "../../utils/common/ImagePath";
import { selectedServiceId, showLoading } from "../../redux/actions";
import Loading from "../../components/AppLoading/Loading";
import ButtonInfo from "../../components/AppButton/AppButtonInfo/ButtonInfo";
import ButtonSuccess from "../../components/AppButton/AppButtonSuccess/ButtonSuccess";
import { restApi } from "../../utils/configs/restApi";
import Helper from "../../utils/configs/Helper";
import { EventRegister } from "react-native-event-listeners";

class SubServiceList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			activeButton: false,
			selectedItem: false,
			serviceInfo: {},
			serviceList: this.props.navigation.getParam("subServiceList", ""),
			serviceTitle: this.props.navigation.getParam("serviceTitle", ""),
			serviceIcon: this.props.navigation.getParam("serviceIcon", ""),
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
					mainTitle={this.state.serviceTitle}
					showTitleHeader={true}
					showServicTitle={true}
					headerImage={this.state.serviceIcon}
				/>
				<Loading />
				<View style={style.container}>
					<FlatList
						data={this.state.serviceList}
						renderItem={this.renderItems.bind(this)}
						keyExtractor={(item) => item.id}
					/>

					<Modal
						animationType="slide"
						transparent={true}
						visible={this.state.selectedItem}
					>
						<View style={{ flex: 1 }}>
							<View style={style.containerButtons}>
								<ButtonInfo
									buttonPressed={() => this.canseleSelectedItem()}
									title={Helper.translate("cansele")}
								/>
								<ButtonSuccess
									activeButton={true}
									buttonPressed={() => this.confirmSelectedItem()}
									title={Helper.translate("selected")}
								/>
							</View>
						</View>
					</Modal>
				</View>
				<AppFooter active="home" />
			</Container>
		);
	}

	// render item servis list
	renderItems(servis) {
		return (
			<SubSubService
				InPressItem={(serviceInfo) => this.selectedItem(serviceInfo)}
				selectedItem={this.state.selectedItem}
				servis={servis}
			/>
		);
	}

	// selected items
	selectedItem(serviceInfo) {
		this.props.selectedServiceId(serviceInfo.id);
		if (serviceInfo.children.length > 0) {
			Actions.subServiceList({
				subServiceList: serviceInfo.children,
				serviceTitle: serviceInfo.title,
				serviceIcon: serviceInfo.icon,
			});
		} else {
			this.setState({ activeButton: true });
			if (serviceInfo.options_count > 0)
				Actions.subServiceDetailes({
					serviceInfo: serviceInfo,
				});
			else {
				this.setState({
					selectedItem: true,
					serviceInfo: serviceInfo,
				});
			}
		}
	}

	// confirm selected item
	confirmSelectedItem() {
		this.props.showLoading(true);
		let Data = JSON.stringify({
			item_id: this.state.serviceInfo.id,
			options: [],
		});

		Helper.makeRequest({
			url: restApi.API_SEND_REQUEST,
			method: "POST",
			data: Data,
			status: "ACTIVE",
		}).then((response) => {
			if (response.errors) {
				Helper.showToast(response.message);
			} else {
				Helper.showToast(Helper.translate("send request message successfull"));
				Actions.replace("home");
			}

			this.setState({
				selectedItem: false,
			});

			this.props.showLoading(false);
		});
	}

	// cansele selected item
	canseleSelectedItem() {
		this.setState({ selectedItem: false, activeButton: true });
	}
}

const mapDisPatchToProps = (dispatch) => {
	return {
		showLoading: (showLoadingFlag) => dispatch(showLoading(showLoadingFlag)),
		selectedServiceId: (serviceId) => dispatch(selectedServiceId(serviceId)),
	};
};

const mapStateToProps = (state) => {
	return {
		uuid: state.user.uuid,
		appLanguege: state.langueges.appLanguege,
	};
};

export default connect(mapStateToProps, mapDisPatchToProps)(SubServiceList);
