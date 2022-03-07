import { StyleSheet } from "react-native";
import colors from "../../../utils/common/colors";
import fonts from "../../../utils/common/fonts";

export default ButtonPrimarySmallStyle = StyleSheet.create({
	primaryButtonSmall: {
		width: 128,
		height: 40,
		justifyContent: "center",
		alignContent: "center",
		alignItems: "center",
		borderRadius: 20,
		borderColor: colors.colorWhite,
		borderWidth: 1,
	},
	primaryButtonSmallWhite: {
		width: 128,
		height: 40,
		justifyContent: "center",
		alignContent: "center",
		alignItems: "center",
		borderRadius: 20,
		backgroundColor: colors.colorWhite,
		borderColor: colors.colorWhite,
		borderWidth: 1,
	},
	primaryButtonLabelWhiteLabel: {
		color: colors.colorFont,
		fontFamily: fonts.fontMain,
	},
	primaryButtonSmallLabel: {
		color: colors.colorWhite,
		fontFamily: fonts.fontMain,
	},
});
