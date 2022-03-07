import { StyleSheet, Dimensions } from "react-native";
import colors from "../../../utils/common/colors";
const SCREEN_WIDTH = Dimensions.get("window").width;
import fonts from "../../../utils/common/fonts";

export default RequestStyle = StyleSheet.create({
	containerStyle: {
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
		elevation: 10,
		flex: 1,
		flexDirection: "row",
		marginBottom: 5,
		marginHorizontal: 10,
		marginTop: 8,
		backgroundColor: colors.colorWhite,
		borderRadius: 10,
	},
	textStyle: {
		fontSize: 17,
		color: colors.colorWhite,
		fontFamily: fonts.fontMain,
	},
	labelStyle: {
		fontSize: 17,
		fontFamily: fonts.fontMain,
	},
	subLabeleStyle: {
		fontSize: 12,
		fontFamily: fonts.fontMain,
	},
	timeLabelStyle: {
		fontSize: 12,
		marginTop: 10,
		color: colors.colorMinutenFarbe,
		fontFamily: fonts.fontMain,
	},
	leftButtonContainer: {
		alignItems: "center",
		justifyContent: "center",
		marginTop: 7,
		borderRadius: 15,
		paddingHorizontal: 18,
		paddingVertical: 23,
		backgroundColor: colors.colorFarbe2,
		position: "absolute",
		height: 90,
		elevation: 2,
	},
	// rightButtonContainer: {
	//   alignItems: 'center',
	//   justifyContent: 'center',
	//   marginRight: 10,
	//   borderRadius: 10,
	//   paddingHorizontal: 18,
	//   paddingVertical: 23,
	//   backgroundColor: '$colorUnActiveBorder',
	//   position: 'absolute',
	//   height: 90,
	//   elevation: 2,
	// },
	valueContainer: {
		width: "100%",
		flex: 1,
		zIndex: 10,
	},
	valueStyle: {
		elevation: 3,
		borderRadius: 15,
		height: 90,
		flex: 1,
		flexDirection: "row",
	},
	valueStyleAccept: {
		elevation: 3,
		borderRadius: 15,
		height: 90,
		backgroundColor: colors.colorUnActive,
		flex: 1,
		flexDirection: "row",
	},
	roomContainer: {
		flex: 2,
		justifyContent: "center",
		paddingLeft: 30,
		borderBottomColor: colors.colorNone,
		borderLeftColor: colors.colorNone,
		borderRightColor: colors.colorBorder,
		borderTopColor: colors.colorNone,
		borderWidth: 1,
	},
	serviceContainer: {
		flex: 6,
		justifyContent: "center",
		alignContent: "center",
		alignItems: "center",
	},
	serviceValue: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "center",
		alignContent: "center",
		alignItems: "center",
	},
	titleService: {
		flex: 2,
		paddingLeft: 15,
	},
	imageService: {
		flex: 1,
		justifyContent: "center",
		alignContent: "center",
		alignItems: "center",
	},
	imageServiceContainer: {
		width: 55,
		height: 55,
		justifyContent: "center",
		alignContent: "center",
		alignItems: "center",
		backgroundColor: colors.colorIconFarbe,
		borderRadius: 50,
	},
	imageAcceptServiceContainer: {
		width: 55,
		height: 55,
		justifyContent: "center",
		alignContent: "center",
		alignItems: "center",
		backgroundColor: colors.colorWhite,
		borderRadius: 50,
	},
	rightButtonContainer: {
		position: "absolute",
		right: 0,
		marginTop: 7,
		height: 88,
		alignItems: "center",
		justifyContent: "center",
		marginRight: 5,
		borderRadius: 10,
		paddingHorizontal: 18,
		elevation: 2,
		backgroundColor: colors.colorFarbe2,
	},
	containerImg: {
		width: 60,
		height: 60,
		backgroundColor: colors.colorIconFarbe,
		borderRadius: 50,
		justifyContent: "center",
		alignItems: "center",
	},
	imgStyle: {
		width: 40,
		height: 40,
		resizeMode: "contain",
	},
});