import EStyleSheet from "react-native-extended-stylesheet";
import { Dimensions } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const styles = EStyleSheet.create({
  container: {
    flex: 1
  },
  map: {
    flex: 1,
    height: height,
    width: width
  }
});

export default styles;
