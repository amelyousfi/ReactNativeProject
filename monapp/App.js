// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import Auth from './Components/Page/Profil/Auth/Auth';
// import Profil from './Components/Page/Profil/Profil';

// export default function App() {
//   // const user = {
//   //   prenom: "Amel",
//   //   nom:"Yousfi",
//   //   age: 30,
//   //   isFormat: false,
//   // };
//   const user = null;

//   // function sayHello(prenom){
//   //   return `Hello ${prenom}`
//   // }
//   function sayHello(user){
//     return `Hello ${user.prenom} ${user.nom} vous avez ${user.age}`
//   }
 
//   return (
//     <View style={styles.container}>
//         { user ? <Profil style={styles.title}/> : <Auth/>}
//       {/* <Text>
      
//         Open up App.js to start working on your app!
//         </Text> */}
//         {/* <Text style={styles.text}>
//        {sayHello(user)}
//         </Text> */}
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     // backgroundColor: '#000000',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   text: {
//     color : "red"
//   },


// });
//------------------------------------------------------
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { UserContext } from "./Components/contexts/UserContext";
import Auth from "./Components/Page/Auth/Auth";
import Profil from "./Components/Page/Profil/Profil";
export default function App() {
  // const user = null;
  // extraire le tableau
  
  //pour rester sur  la page profil on rajoute un fakeUser a chauqe sauvegarde on reste sur cette page
  const fakeUser = { email:"amel.yousfi@gmail.com", username: "amelYousfi" }
  const [user, setUser] = useState(fakeUser);
  return (
    <UserContext.Provider value ={{ user, setUser}}>
       <View style={styles.container}>
      {user ? <Profil /> : <Auth />}
      <StatusBar style='auto' />
    </View>


    </UserContext.Provider>
     );

   
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
