import { StyleSheet, Dimensions, Platform } from "react-native";
import colors from "../../../utils/common/colors";
const { width, height } = Dimensions.get("window");
import fonts from "../../../utils/common/fonts";

export default itemServisStyle = StyleSheet.create({
	mainContainer: {
		flex: 0.5,
	},
	container: {
		flex: 0.5,
		height: 165,
		backgroundColor: colors.colorWhite,
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
	containerActive: {
		width: 165,
		height: 165,
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
		elevation: 24,
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.3,
		shadowRadius: 4.65,
	},
	labelStyle: {
		fontSize: width < 325 ? 15 : 18,
		marginTop: 10,
		fontFamily: fonts.fontMain,
	},
});
