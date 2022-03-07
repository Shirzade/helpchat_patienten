import { StyleSheet, Dimensions } from "react-native";
import colors from "../../utils/common/colors";
import fonts from "../../utils/common/fonts";

export default HeaderStyle = StyleSheet.create({
	container: {
		width: "100%",
		borderWidth: 0,
		borderColor: colors.colorWhite,
		backgroundColor: colors.colorWhite,
	},
	imageBackground: {
		width: Dimensions.get("window").width,
		height: 100,
		justifyContent: "center",
		backgroundColor: "transparent",
	},
	titleHeader: {
		height: 60,
		alignContent: "center",
		alignItems: "center",
		flexDirection: "row",
		borderBottomColor: colors.colorBorder,
		borderLeftColor: colors.colorWhite,
		borderRightColor: colors.colorWhite,
		borderTopColor: colors.colorWhite,
		justifyContent: "space-between",
		borderWidth: 1,
		paddingLeft: 25,
		paddingBottom: 15,
	},
	containerTitle: {
		paddingLeft: 10,
	},
	centerTitleHeader: {
		height: 60,
		alignContent: "center",
		alignItems: "center",
		borderBottomColor: colors.colorBorder,
		borderLeftColor: colors.colorWhite,
		borderRightColor: colors.colorWhite,
		borderTopColor: colors.colorWhite,
		justifyContent: "center",
		borderWidth: 1,
		paddingBottom: 15,
	},

	mainTitle: {
		fontSize: 16,
		fontFamily: fonts.fontMain,
	},
	subTitle: {
		fontSize: 14,
		color: colors.colorMinutenFarbe,
		fontFamily: fonts.fontMain,
	},
	containerBack: {
		flexDirection: "row",
		paddingLeft: 25,
	},
	titleBack: {
		marginLeft: 15,
	},
	containerIcon: {
		width: 40,
		height: 40,
		backgroundColor: colors.colorIconFarbe,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 50,
		marginRight: 20,
	},
	containerServiceIcon: {
		width: 60,
		height: 60,
		backgroundColor: colors.colorWhite,
		borderWidth: 2,
		borderColor: colors.colorBarButton,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 50,
		marginRight: 20,
	},
	containerServiceTitle: {
		paddingRight: 10,
		justifyContent: "flex-start",
		alignItems: "flex-start",
		flex: 1,
	},
	imgTitle: {
		width: 40,
		height: 40,
		resizeMode: "contain",
	},
});
