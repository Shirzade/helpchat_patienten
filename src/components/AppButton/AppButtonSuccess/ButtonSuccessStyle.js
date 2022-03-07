import { StyleSheet } from "react-native";
import colors from "../../../utils/common/colors";
import fonts from "../../../utils/common/fonts";

export default ButtonSuccessStyle = StyleSheet.create({
	successButton: {
		width: 128,
		height: 40,
		justifyContent: "center",
		alignContent: "center",
		alignItems: "center",
		borderRadius: 20,
		borderColor: colors.colorBarButton,
		backgroundColor: colors.colorBarButton,
		borderWidth: 1,
	},
	successButtonUnActive: {
		width: 128,
		height: 40,
		opacity: 0.5,
		justifyContent: "center",
		alignContent: "center",
		alignItems: "center",
		borderRadius: 20,
		borderColor: colors.colorBarButton,
		backgroundColor: colors.colorBarButton,
		borderWidth: 1,
	},
	successButtonLabel: {
		color: colors.colorWhite,
		fontFamily: fonts.fontMain,
	},
	primaryButtonSmallLabel: {
		color: colors.colorWhite,
		fontFamily: fonts.fontMain,
	},
});
