import React from "react";
import { Container } from "native-base";
import { View, Image, Text, TouchableOpacity, FlatList } from "react-native";
import AppFooter from "../../components/AppFooter/Footer";
import AppHeader from "../../components/AppHeader/Header";
import style from "./UserStyle";
import { connect } from "react-redux";
import { Actions } from "react-native-router-flux";
import ImagesPath from "../../utils/common/ImagePath";
import Request from "../../components/items/ItemRequest/Request";
import { EventRegister } from "react-native-event-listeners";
import Helper from "../../utils/configs/Helper";
import { showLoading } from "../../redux/actions";
import Loading from "../../components/AppLoading/Loading";
import { restApi } from "../../utils/configs/restApi";

class User extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			requestList: [],
			hasRequest: true,
		};
	}

	async componentDidMount() {
		this.listener = EventRegister.addEventListener("changeLanguege", () => {
			this.handleLocalizationChange(this.props.appLanguege.value);
		});
		this.getAllServices();
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
				<Loading />
				<AppHeader
					showIconBack={true}
					mainTitle={Helper.translate("title my request")}
					showTitleHeader={true}
				/>
				<View style={style.container}>{this.renderContent()}</View>
				<AppFooter active="user" />
			</Container>
		);
	}

	reactiveRequest(request) {
		this.deleteRequest(request.item.id);
	}

	doneRequest() {
		console.log("id");
	}

	renderContent() {
		if (this.state.hasRequest) {
			return (
				<FlatList
					data={this.state.requestList}
					renderItem={this.renderItems.bind(this)}
					keyExtractor={(item) => item.id}
				/>
			);
		} else {
			return (
				<View style={style.containerMessage}>
					<Text style={style.titleStyle}>
						{Helper.translate("title no request")}
					</Text>
				</View>
			);
		}
	}

	// render item servis list
	renderItems(request) {
		return (
			<Request
				swipingCheck={(swiping) => this.setState({ swiping })}
				request={request}
				leftButtonPressed={() => this.reactiveRequest(request)}
				rightButtonPressed={() => this.doneRequest()}
			/>
		);
	}

	// ---- get service ----
	getAllServices() {
		this.props.showLoading(true);
		Helper.makeRequest({
			url: restApi.API_GET_BED_LIST_ENTITY,
			method: "GET",
			data: "",
			status: "ACTIVE",
		}).then((response) => {
			this.props.showLoading(false);
			if (response.data != undefined && response.data.length > 0) {
				this.setState({
					hasRequest: true,
					requestList: response.data,
				});
			} else {
				this.setState({
					hasRequest: false,
				});
			}
		});
	}

	// ---- delete request ----
	deleteRequest(requestId) {
		this.props.showLoading(true);
		let Data = JSON.stringify({
			id: requestId,
		});
		Helper.makeRequest({
			url: restApi.API_GET_BED_LIST_ENTITY,
			method: "DELETE",
			data: Data,
			status: "ACTIVE",
		}).then((response) => {
			if (response.result) {
				this.setState({
					requestList: [],
				});
				this.getAllServices();
			} else {
				Helper.showToast("Error");
			}
			this.props.showLoading(false);
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
		token: state.user.token,
		appLanguege: state.langueges.appLanguege,
	};
};

export default connect(mapStateToProps, mapDisPatchToProps)(User);
