// import { Text, TouchableOpacity, View } from "react-native"
// import { Colors } from "react-native/Libraries/NewAppScreen";

// // const Button = (props) =>{
//     const Button = ({action, success, danger, outline, children}) =>{
//     //destructurer l objet props
    
//     const color = success ? "green" : danger ? "red" : "#2c3e50"
//     const ButtonBackgroundColor = outline ? "transparent" : Colors;
//     return(
//         <TouchableOpacity onPress={action}
//          style={[
//             StyleSheet.container,
//             {
//                 backgroundColor: ButtonBackgroundColor,
//                 color : outline? color : "whitesmoke",
//                 borderColor : outline ? color : "transparent"
//             }


//          ]
//             }
//             >
//             {children}
        
//         {/* <View>
//             <Text>
//                 Button

//             </Text>
//         </View> */}
//         <Text style={
//             [
//                 styles.label,
//                 {
//                     color : outline ? color : "whitesmoke"
//                 }
//             ]
//         }>
//             {label}
//         </Text>
//         </TouchableOpacity>
//     );
// }
// const styles = StyleSheet.create({
//     container : {
//         borderWith: 1,
//         padding: 10,
//         borderRadius: 5,
//         textAlign : "center",
//         backgroundColor: "#2c3e50",
//     },
//     label: {
//         fontSize: 15,
//         fontWeight: "bold",
//     }
// });
// export default Button;
//------------------------------------------------------------
// import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
// import { STYLES_VARIABLES } from "../../../variables/stylesVariables";

// const Button = ({ label, action, success, danger, outline, children }) => {
//   const color = success
//     ? STYLES_VARIABLES.SUCCESS_COLOR
//     : danger
//     ? STYLES_VARIABLES.DANGER_COLOR
//     : STYLES_VARIABLES.PRIMARY_COLOR;

//   const buttonBackgroundColor = outline ? "transparent" : color;

//   return (
//     <TouchableOpacity
//       onPress={action}
//       style={[
//         styles.container,
//         {
//           backgroundColor: buttonBackgroundColor,

//           borderColor: outline ? color : "transparent",
//         },
//       ]}
//     >
//       <Text
//         style={[
//           styles.label,
//           { color: outline ? color : STYLES_VARIABLES.LIGHT_COLOR },
//         ]}
//       >
//         {label}
//       </Text>
//     </TouchableOpacity>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     borderWidth: 1,
//     padding: 10,
//     borderRadius: 5,
//     textAlign: "center",
//   },
//   label: {
//     fontSize: 15,
//     fontWeight: "bold",
//   },
// });

// export default Button;

import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { STYLES_VARIABLES } from "../../../variables/stylesVariables";

const Button = ({
  label,
  left,
  action,
  success,
  danger,
  outline,
  children,
}) => {
  const color = success
    ? STYLES_VARIABLES.SUCCESS_COLOR
    : danger
    ? STYLES_VARIABLES.DANGER_COLOR
    : STYLES_VARIABLES.PRIMARY_COLOR;

  const buttonBackgroundColor = outline ? "transparent" : color;

  return (
    <TouchableOpacity
      onPress={action}
      style={[
        styles.container,
        {
          backgroundColor: buttonBackgroundColor,
          borderColor: outline ? color : "transparent",

          flexDirection: left ? "row" : "row-reverse",
        },
      ]}
    >
      {children}
      <Text
        style={[
          styles.label,
          { color: outline ? color : STYLES_VARIABLES.LIGHT_COLOR },
        ]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    padding: 7,
    borderRadius: 5,
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginHorizontal: 10,
  },
});

export default Button;