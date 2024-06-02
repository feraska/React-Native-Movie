
import loading from "../../assets/loading.gif"
import { Image, StyleSheet, View } from "react-native";
const Loading = () => {
    return (
      <View style={styles.container}>
        <Image source={loading}/>
        </View>
    )
}
const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: 50,
  }
}
)
export default Loading;