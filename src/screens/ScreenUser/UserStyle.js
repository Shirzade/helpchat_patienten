import { StyleSheet } from "react-native";
import colors from "../../utils/common/colors";
import fonts from "../../utils/common/fonts";

export default userStyle = StyleSheet.create({
	container: {
		flex: 1,
		width: "100%",
		height: "100%",
		paddingTop: 15,
	},
	containerButtons: {
		flex: 1,
		alignItems: "center",
	},
	containerTilte: {
		marginVertical: 90,
		color: colors.colorWhite,
		fontSize: 20,
		fontFamily: fonts.fontMain,
	},
	containerMessage: {
		flex: 0.2,
		height: 80,
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
	titleStyle: {
		fontSize: 18,
		fontFamily: fonts.fontMain,
	},
});
