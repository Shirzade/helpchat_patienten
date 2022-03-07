import colors from "../../utils/common/colors";
import fonts from "../../utils/common/fonts";
import { StyleSheet } from "react-native";
export default splashStyle = StyleSheet.create({
	containerWelcomText: {
		marginTop: 60,
		alignContent: "center",
		alignItems: "center",
		justifyContent: "center",
	},
	titleStyle: {
		fontSize: 20,
		marginTop: 5,
		color: colors.colorWhite,
		fontFamily: fonts.fontMain,
	},
});
