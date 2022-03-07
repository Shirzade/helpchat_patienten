import { StyleSheet } from "react-native";
import colors from "../../utils/common/colors";

export default languegeStyle = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    padding: 30,
  },
  subContainer: {
    backgroundColor: colors.colorNavbarBack,
    width: "100%",
    height: 250,
    borderRadius: 10,
  },
  firstSection: {
    flex: 4,
    borderBottomColor: colors.colorWhite,
    borderLeftColor: colors.colorNone,
    borderRightColor: colors.colorNone,
    borderTopColor: colors.colorNone,
    borderWidth: 1,
  },
  nameSection: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  infoSection: {
    flex: 1,
    paddingHorizontal: 20,
  },
  secondSection: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingLeft: 20,
    alignContent: "center",
    alignItems: "center",
  },
  label: {
    marginLeft: 15,
    color: colors.colorFont,
  },
  nameLabelStyle: {
    fontSize: 17,
    color: colors.colorFont,
    fontWeight: "bold",
  },
  infoLabelStyle: {
    fontSize: 14,
    color: colors.colorFont,
  },
  logOutSection: {
    flex: 1,
    alignContent: "center",
    justifyContent: "flex-end",
    paddingBottom: 50,
    alignItems: "center",
  },
  containerLogoutModal: {
    width: "85%",
    height: 150,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 0,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 0,
    backgroundColor: colors.colorBarButton,
  },
  containerButtonModal: {
    width: "78%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
  },
  textContainerModal: {
    width: "78%",
    justifyContent: "center",
    marginBottom: 30,
  },
  textModalStyle: {
    color: colors.colorWhite,
    fontSize: 17,
  },
  avatarImage: {
    width: 35,
    height: 35,
    resizeMode: "contain",
  },
  editImage: {
    width: 25,
    height: 25,
    resizeMode: "contain",
  },
});
