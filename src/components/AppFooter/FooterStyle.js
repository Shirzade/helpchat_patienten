import { StyleSheet, Dimensions } from "react-native";
import colors from "../../utils/common/colors";
const { width, height } = Dimensions.get("window");
import fonts from "../../utils/common/fonts";

export default FooterStyle = StyleSheet.create({
	shadowContainer: {
		width: "100%",
	},
	container: {
		height: 100,
		width: "100%",
		backgroundColor: colors.colorWhite,
	},
	menuIcon: {
		width: 30,
		height: 30,
		resizeMode: "contain",
	},
	subContainer: {
		position: "relative",
		height: 100,
		backgroundColor: colors.colorNavbarBack,
		borderTopLeftRadius: 20,
		borderBottomLeftRadius: 0,
		borderTopRightRadius: 20,
		borderBottomRightRadius: 0,
		marginVertical: 1,
		overflow: "hidden",
	},
	titleMenu: {
		color: colors.colorFont,
		fontSize: width < 325 ? 8 : 12,
		marginTop: 5,
		fontFamily: fonts.fontMain,
	},
	containerSelectItems: {
		flex: 1,
		flexDirection: "row",
		width: "90%",
		left: "5%",
		position: "absolute",
		borderTopLeftRadius: 10,
		borderBottomLeftRadius: 0,
		borderTopRightRadius: 10,
		borderBottomRightRadius: 0,
		bottom: 0,
		zIndex: 10,
		height: 117,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 12,
		},
		shadowOpacity: 0.58,
		shadowRadius: 16.0,
		elevation: 20,
		backgroundColor: colors.colorBarButton,
	},
	subContainerSelectItems: {
		flex: 1,
		justifyContent: "center",
		alignContent: "center",
		alignItems: "center",
	},
	labelStyleSelectSection: {
		marginTop: 10,
		color: colors.colorWhite,
	},
	modalSaveStyle: {
		width: "100%",
		height: 185,
		justifyContent: "center",
		alignContent: "center",
		alignItems: "center",
		borderRadius: 10,
		backgroundColor: colors.colorBarButton,
	},
});
