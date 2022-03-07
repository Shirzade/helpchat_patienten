import { StyleSheet, Dimensions } from "react-native";
import colors from "../../../utils/common/colors";
const { width, height } = Dimensions.get("window");
import fonts from "../../../utils/common/fonts";

export default ButtonPrimaryStyle = StyleSheet.create({
	primaryButton: {
		width: width < 330 ? "85%" : 330,
		height: 40,
		justifyContent: "center",
		paddingLeft: 20,
		borderRadius: 20,
		borderWidth: 1,
		marginTop: 10,
		borderColor: colors.colorWhite,
	},
	primaryButtonQR: {
		width: width < 330 ? "85%" : 330,
		height: 40,
		justifyContent: "center",
		paddingLeft: 20,
		borderRadius: 20,
		borderWidth: 1,
		marginTop: 20,
		backgroundColor: colors.colorWhite,
		borderColor: colors.colorWhite,
	},
	titleButton: {
		fontFamily: fonts.fontMain,
	},
});
