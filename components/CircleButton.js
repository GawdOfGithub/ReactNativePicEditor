import { View,Pressable,StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function CircleButton({onPress}){
    return(
        <View style ={StyleSheet.circleButtonContainer}>
            <Pressable style={StyleSheet.circleButtonContainer} onPress={onPress}>
                <MaterialIcons name="add" size={38} color="#2592e" />

            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    circleButtonContainer: {
      width: 84,
      height: 84,
      marginHorizontal: 60,
      borderWidth: 4,
      borderColor: '#ffd33d',
      borderRadius: 42,
      padding: 3,
    },
    circleButton: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 42,
      backgroundColor: '#fff',
    },
  });