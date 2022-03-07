import { StyleSheet, Dimensions } from "react-native";
import colors from "../../../utils/common/colors";
import fonts from "../../../utils/common/fonts";

export default LanguegeStyle = StyleSheet.create({
	mainContainer: {
		flex: 1,
	},
	container: {
		flex: 1,
		width: "100%",
		height: "100%",
		marginTop: 10,
		flexDirection: "row",
	},
	containerActive: {
		flex: 1,
		width: "100%",
		height: "100%",
		marginTop: 10,
		flexDirection: "row",
		backgroundColor: colors.colorNavbarBack,
	},
	containerCountryName: {
		flex: 1,
		flexDirection: "row",
		alignContent: "center",
		alignItems: "center",
	},
	containerCheck: {
		flex: 1,
		justifyContent: "center",
		alignItems: "flex-end",
		marginRight: 20,
	},
	itemsStyle: {
		flex: 1,
		height: 63,
		borderColor: colors.colorNavbarBack,
		borderWidth: 1,
		justifyContent: "space-between",
		alignContent: "center",
		alignItems: "center",
		paddingLeft: 30,
		flexDirection: "row",
	},
	labelStyle: {
		marginLeft: 20,
		fontSize: 13,
		color: colors.colorFont,
		fontFamily: fonts.fontMain,
	},
});
