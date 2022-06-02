import { useContext } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from "react-native";
import { STYLES_VARIABLES } from "../../../variables/stylesVariables";
import { UserContext } from "../../contexts/UserContext";
import defaultAvatar from "../../../assets/default_avatar.png"
import { MaterialIcons } from "@expo/vector-icons";
export default function Profil() {
 const { user } = useContext(UserContext);
 console.log(user);
 const sizes = useWindowDimensions();
 console.log(sizes);
 return (
  <View style={{ width: "100%" }}>
    <View>
      <Image
        style={[
          styles.image,
          { width: sizes.width, height: sizes.width },
        ]}
        source={defaultAvatar}
      />

      <View style={styles.iconsContainer}>
        <TouchableOpacity>
          <MaterialIcons
            name='photo-library'
            size={50}
            color={STYLES_VARIABLES.PRIMARY_COLOR}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcons
            name='photo-camera'
            size={50}
            color={STYLES_VARIABLES.PRIMARY_COLOR}
          />
        </TouchableOpacity>
      </View>
    </View>

    <View style={styles.infosContainer}>
      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Email:</Text>
        <Text style={styles.info}>{user.email}</Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Username:</Text>
        <Text style={styles.info}>{user.username}</Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Description:</Text>
        <Text style={styles.info}>
          {user.description
            ? user.description
            : "Veuillez entrer une description..."}
        </Text>
      </View>
    </View>
  </View>
);
}
const styles = StyleSheet.create({
  image: {
    alignSelf: "center",
    margin: 20,
    maxWidth: 300,
    maxHeight: 300,
  },
  iconsContainer: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: STYLES_VARIABLES.GRAY_COLOR,
    maxWidth: 300,
    alignSelf: "center",
    width: "100%",
    justifyContent: "space-around",
    padding: 5,
    margin: 10,
    borderRadius: 10,
  },
  infosContainer: {
    backgroundColor: STYLES_VARIABLES.GRAY_COLOR,
    padding: 20,
    borderBottomWidth: 2,
    borderTopWidth: 2,
    borderColor: STYLES_VARIABLES.PRIMARY_COLOR,
    width: "100%",
    maxWidth: 300,
    alignSelf: "center",
  },
  infoContainer: {
    borderBottomWidth: 2,
    borderColor: STYLES_VARIABLES.DARK_GRAY_COLOR,
    padding: 5,
    margin: 5,
  },
  infoLabel: {
    color: STYLES_VARIABLES.PRIMARY_COLOR,
    fontWeight: "bold",
  },
  info: {
    fontSize: 16,
    color: STYLES_VARIABLES.DARK_COLOR,
  },

});