// import { StyleSheet, Text, View } from "react-native";

// export default function Card(){
//     return (
//         <View>
//             <View style={styles.bloc1}>
//             <Text style={styles.ligne1}>
//                 BienVenu!
//             </Text>
//             <Text>
//                 Veuillez Vous Authentifier


//             </Text>


//             </View>
          
//             <View>
//                 <Text>
//                     Composant Potentiel
//                 </Text>

//             </View>
        
//         </View>
//     );



    
// }
// export default function Card(props){
//     console.log(props)
//     return (
//         <View style= {styles.container} >
//             <Text style= {styles.title}>
//                 {props.title}
//             </Text>
//             <Text style= {styles.content}>
//                 {props.content}
//             </Text>
//             {/* <Text>
//                 Composant Potentiel !
//             </Text> */}
//             <View>
//                 {props.children}
//             </View>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     cardContainer: {
//         margin: 20

//     },
//     container: {
//         textAlign:"center",
//         //margin: 20 ,
//         paddingHorizontal: 20,
//         borderTopRightRadius: 5,
//         borderTopLeftRadius: 5?
    
//       backgroundColor: '#2c3e50',
//       borderRadius: 5,
//     },
//     title: {
//       color : 'whitesmoke',
//       fontSize: 30,
//       fontWeight: "bold",
//     },
//      content: {
//      color: "whitesmoke",
//      fontSize: 20,
//     },
//     childrenContainer: {
//         backgroundColor: "whitesmoke",
//         padding: 20,
//     },
    


  
  
//   });
  
///------------------------------------
import { StyleSheet, Text, View } from "react-native";
import { STYLES_VARIABLES } from "../../../variables/stylesVariables";

export default function Card(props) {
  console.log(props);
  return (
    <View style={styles.cardContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.content}>{props.content}</Text>
      </View>

      <View style={styles.childrenContainer}>{props.children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    margin: 20,
  },
  container: {
    backgroundColor: STYLES_VARIABLES.PRIMARY_COLOR,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    textAlign: "center",
    paddingHorizontal: 20,
  },
  title: {
    color: STYLES_VARIABLES.LIGHT_COLOR,
    fontSize: 30,
    fontWeight: "bold",
  },
  content: {
    color: STYLES_VARIABLES.LIGHT_COLOR,
    fontSize: 20,
  },
  childrenContainer: {
    backgroundColor: STYLES_VARIABLES.GRAY_COLOR,
    padding: 20,
  },
});