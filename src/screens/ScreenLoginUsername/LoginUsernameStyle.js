import { StyleSheet, Dimensions } from "react-native";
import colors from "../../utils/common/colors";
import fonts from "../../utils/common/fonts";
const { width, height } = Dimensions.get("window");

export default loginUsernameStyle = StyleSheet.create({
	container: {
		flex: 1,
		width: "100%",
		height: "100%",
	},
	title: {
		color: colors.colorWhite,
		marginBottom: 75,
		marginLeft: 25,
		fontFamily: fonts.fontMain,
	},
	inputsContainer: {
		flex: 1,
		width: width < 327 ? "80%" : 327,
		justifyContent: "center",
		alignContent: "center",
		alignItems: "flex-start",
		alignSelf: "center",
	},
	buttonsContainer: {
		flex: 1,
		justifyContent: "center",
		alignContent: "center",
		alignItems: "center",
		flexDirection: "row",
	},
	inputStyle: {
		height: 40,
		width: width < 327 ? "80%" : 327,
		borderColor: colors.colorWhite,
		borderWidth: 1,
		paddingLeft: 25,
		borderRadius: 30,
		marginBottom: 20,
		fontFamily: fonts.fontMain,
	},
	buttons: {
		width: width < 280 ? "70%" : 280,
		marginTop: 180,
		flexDirection: "row",
		justifyContent: "space-between",
		alignContent: "center",
	},
});
