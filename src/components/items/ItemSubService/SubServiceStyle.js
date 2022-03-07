import { StyleSheet, Dimensions, Platform } from "react-native";
import colors from "../../../utils/common/colors";
const { width, height } = Dimensions.get("window");
import fonts from "../../../utils/common/fonts";

export default subServisStyle = StyleSheet.create({
	container: {
		width: "95%",
		height: 80,
		backgroundColor: colors.colorWhite,
		flexDirection: "row",
		margin: 10,
		borderRadius: 10,
		justifyContent: "space-between",
		alignContent: "center",
		alignItems: "center",
		shadowColor: colors.colorBlack,
		shadowOffset: {
			width: 0,
			height: 12,
		},
		shadowOpacity: 0.58,
		shadowRadius: 16.0,
		elevation: Platform.OS == "android" ? 8 : 24,
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.3,
		shadowRadius: 4.65,
	},
	containerActive: {
		width: "95%",
		height: 80,
		flexDirection: "row",
		backgroundColor: colors.colorWhite,
		borderWidth: 2,
		borderColor: colors.colorBarButton,
		margin: 10,
		borderRadius: 10,
		justifyContent: "center",
		alignContent: "center",
		alignItems: "center",
		shadowColor: colors.colorBlack,
		shadowOffset: {
			width: 0,
			height: 12,
		},
		shadowOpacity: 0.58,
		shadowRadius: 16.0,
		elevation: Platform.OS == "android" ? 8 : 24,
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.3,
		shadowRadius: 4.65,
	},
	labelStyle: {
		fontSize: width < 325 ? 15 : 20,
		marginTop: 10,
		fontFamily: fonts.fontMain,
	},
	containerImg: {
		backgroundColor: colors.colorIconFarbe,
		width: 60,
		height: 60,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 50,
		marginLeft: 20,
	},
	imgStyle: {
		width: 45,
		height: 45,
		resizeMode: "contain",
	},
	containerTitle: {
		flex: 1,
		paddingLeft: 20,
	},
	subImgStyle: {
		position: "absolute",
		top: 40,
		right: 0,
	},
});
