import { StyleSheet } from "react-native";
import colors from "../../utils/common/colors";
import fonts from "../../utils/common/fonts";

export default settingStyle = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 10,
		width: "100%",
		height: "100%",
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
	settingItems: {
		width: "100%",
		height: 63,
		marginTop: 15,
		backgroundColor: colors.colorNavbarBack,
		justifyContent: "space-between",
		alignContent: "center",
		alignItems: "center",
		borderRadius: 2,
		flexDirection: "row",
		paddingHorizontal: 20,
	},
	settingSubItem: {
		flexDirection: "row",
	},
	valueLabel: {
		fontSize: 12,
		fontFamily: fonts.fontMain,
	},
	labelSubItem: {
		marginLeft: 20,
		fontSize: 14,
		color: colors.colorFont,
		fontFamily: fonts.fontMain,
	},
	imageStyle: {
		width: 25,
		height: 25,
		resizeMode: "contain",
	},
});
