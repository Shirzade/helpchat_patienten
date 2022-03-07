import { StyleSheet } from "react-native";
import colors from "../../utils/common/colors";

export default subServiceStyle = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    padding: 10,
  },
  containerButtons: {
    width: 327,
    position: "absolute",
    bottom: 50,
    flexDirection: "row",
    paddingHorizontal: 20,
    marginBottom: 50,
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "flex-start",
    alignSelf: "center",
  },
});
