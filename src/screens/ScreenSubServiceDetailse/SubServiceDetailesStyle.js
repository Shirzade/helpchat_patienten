import { StyleSheet } from "react-native";
import colors from "../../utils/common/colors";
import fonts from "../../utils/common/fonts";

export default subServiceDetailesStyle = StyleSheet.create({
	container: {
		flex: 1,
		width: "100%",
		height: "100%",
		padding: 10,
	},
	containerButtons: {
		width: 327,
		height: 50,
		flexDirection: "row",
		paddingHorizontal: 20,
		justifyContent: "space-between",
		alignContent: "center",
		alignSelf: "center",
	},
	containerTitle: {
		padding: 20,
		justifyContent: "center",
		alignItems: "center",
	},
	labelStyle: {
		fontSize: 20,
		fontFamily: fonts.fontMain,
	},
});
