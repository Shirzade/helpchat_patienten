import { StyleSheet } from "react-native";
import colors from "../../../utils/common/colors";
import fonts from "../../../utils/common/fonts";

export default ButtonInfoStyle = StyleSheet.create({
	infoButton: {
		width: 128,
		height: 40,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 20,
		borderWidth: 3,
		borderColor: colors.colorBarButton,
	},
	titleButton: {
		fontFamily: fonts.fontMain,
	},
});
