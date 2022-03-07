import React from "react";
import { Container } from "native-base";
import { View, Image, Text, TouchableOpacity, FlatList } from "react-native";
import AppFooter from "../../components/AppFooter/Footer";
import AppHeader from "../../components/AppHeader/Header";
import Servis from "../../components/items/ItemService/Service";
import style from "./HomeStyle";
import { connect } from "react-redux";
import { Actions } from "react-native-router-flux";
import Helper from "../../utils/configs/Helper";
import ImagesPath from "../../utils/common/ImagePath";
import { restApi } from "../../utils/configs/restApi";
import Loading from "../../components/AppLoading/Loading";
import { showLoading } from "../../redux/actions";
import { EventRegister } from "react-native-event-listeners";

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			servisList: [],
		};
	}

	async componentDidMount() {
		this.getAllServices();
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
				<Loading />
				<AppHeader
					showIconBack={false}
					mainTitle={Helper.translate("title home page")}
					showTitleHeader={true}
				/>
				<View style={style.container}>
					<FlatList
						data={this.state.servisList}
						numColumns={2}
						renderItem={this.renderItems.bind(this)}
						keyExtractor={(item) => item.id}
					/>
				</View>
				<AppFooter active="home" />
			</Container>
		);
	}

	// ---- get service ----
	getAllServices() {
		this.props.showLoading(true);
		let Data = JSON.stringify({
			uuid: this.props.uuid,
		});
		Helper.makeRequest({
			url: restApi.API_GET_ENTITY_LIST,
			method: "POST",
			data: Data,
		}).then((response) => {
			this.setState({
				servisList: response,
			});
			this.props.showLoading(false);
		});
	}

	// render item servis list
	renderItems(servis) {
		return (
			<Servis
				InPressItem={() => this.showDetailesPage(servis)}
				servis={servis}
			/>
		);
	}
	// ---- show detailes page ----
	showDetailesPage(servis) {
		if (servis.index) Actions.subServiceList();
		else Actions.serviceDetailes();
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

export default connect(mapStateToProps, mapDisPatchToProps)(Home);
