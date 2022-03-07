import { StyleSheet } from "react-native";
import colors from "../../utils/common/colors";
import fonts from "../../utils/common/fonts";

export default selectedMethodStyle = StyleSheet.create({
	container: {
		flex: 1,
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
});
