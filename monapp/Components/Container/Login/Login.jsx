// // rnfc : react native functionnal component
// //import liraries
// import React, { Component } from 'react';
// import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
// import { AntDesign } from '@expo/vector-icons';

// // create a component
// const Login = () => {
//     //1- creer les variables d etat
//     const [emailInput, setEmailInput] = useStat("");
//     //gestion des erreurs
//     const [emailError, setEmailError] = useStat("");
//     const [passwordError, setPasswordError] = useStat("");
//     const [passwordInput, setPasswordInput] = useStat("");
//     //2- Creer les fonctions qui changent l etat (les variables)
//     function handEmail(text){
//         setEmailError("")
//         setEmailInput(text);
//     }

//     function handPassword(text){
//         setPasswordError("")
//         setPasswordInput(text);
//     }
//     //3- creer la fonction pour valider le formulaire:
//     function login(){
//         if(emailInput.includes("@") && passwordInput.length>=6){
//             alert("connexion avec succes! Email:"+emailInput);
//         }
//         else{
//             setEmailError(!emailInput.includes("@") ? "email invalide!" : "" );
//             setPasswordError(passwordInput.length<6 ? "Mot de pass court" : "");
//         }
       
//     }
//     // 4- Mettre le composant en place avec les variable

//     return (
//         <View style={styles.container}>
//             <Text>Login</Text>
//             <TextInput placeholder="Email" onChangeText={handEmail}/>
//             <TextInput>{emailError}</TextInput>
//             <TextInput placeholder ="password"
//              onChangeText={handPassword}
//              secureTextEntry={true}
//              />
//               <TextInput>{passwordError}</TextInput>
//              <TouchableOpacity onPress={login}>
//                  <Text>
//                      Connexion
//                  </Text>
//              </TouchableOpacity>
//              <Button label={"connexion"} action = {login} sucess={true} danger={false} outline={true}>
//              <AntDesign name="leftcircle" size={24} color="black" />
//                  <Text>
//                       Connexion

//                  </Text>
//              </Button>
//         </View>
//     );
// };

// // define your styles
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#2c3e50',
//     },
// });

// //make this component available to the app
// export default Login;


// rnfc: React Native Functional Component
// import { useState } from "react";
// import { View, Text, StyleSheet, TextInput } from "react-native";
// import { TouchableOpacity } from "react-native-web";
// import Button from "../../UI/Button/Button";
// import { AntDesign } from "@expo/vector-icons";
// import { STYLES_VARIABLES } from "../../../variables/stylesVariables";
// const Login = () => {
//   //1- Créer les variables d'etats:
//   const [emailInput, setEmailInput] = useState("amel.yousfiben.com");
//   const [emailError, setEmailError] = useState("");

//   const [passwordInput, setPasswordInput] = useState("");
//   const [passwordError, setPasswordError] = useState("");

//   //2- Créer les fonctions qui changent les variables:
//   function handleEmail(text) {
//     setEmailError("");
//     setEmailInput(text);
//   }

//   function handlePassword(text) {
//     setPasswordError("");
//     setPasswordInput(text);
//   }

//   //3- Créer la fonction pour valider le formulaire:
//   function login() {
//     if (emailInput.includes("@") && passwordInput.length >= 6) {
//       alert("Connexion avec succes! Email: " + emailInput);
//       setEmailInput("");
//     } else {
//       setEmailError(!emailInput.includes("@") ? "Email invalide!" : "");
//       setPasswordError(
//         passwordInput.length < 6 ? "Mot de passe trop court!" : ""
//       );
//     }
//   }

//   //TWO WAY BINDING: LIAISON DANS LE DEUX SENS

//   //4- Mettre les composants en place et les lier avec la variables et les fonctions:
//   return (
//     <View style={styles.container}>
//       <TextInput
//         value={emailInput}
//         placeholder='Email'
//         onChangeText={handleEmail}
//       />
//       <Text>{emailError}</Text>

//       <TextInput
//         placeholder='Mot de passe'
//         onChangeText={handlePassword}
//         secureTextEntry={true}
//       />
//       <Text>{passwordError}</Text>

//       <Button label='Connexion' action={login}>
//         <AntDesign
//           name='login'
//           size={20}
//           color={STYLES_VARIABLES.LIGHT_COLOR}
//         />
//       </Button>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {},
// });

// export default Login;
// login.jsx

// // rnfc: React Native Functional Component
// import { useState } from "react";
// import { View, Text, StyleSheet, TextInput } from "react-native";
// import { TouchableOpacity } from "react-native-web";
// import Button from "../../UI/Button/Button";
// import { AntDesign } from "@expo/vector-icons";
// import { STYLES_VARIABLES } from "../../../variables/stylesVariables";
// import InputWithError from "../../UI/InputWithError/InputWithError";
// const Login = () => {
//   //1- Créer les variables d'etats:
//   const [emailInput, setEmailInput] = useState("sam@sam.com");
//   const [emailError, setEmailError] = useState("");

//   const [passwordInput, setPasswordInput] = useState("");
//   const [passwordError, setPasswordError] = useState("");

//   //2- Créer les fonctions qui changent les variables:
//   function handleEmail(text) {
//     setEmailError("");
//     setEmailInput(text);
//   }

//   function handlePassword(text) {
//     setPasswordError("");
//     setPasswordInput(text);
//   }

//   //3- Créer la fonction pour valider le formulaire:
//   function login() {
//     if (emailInput.includes("@") && passwordInput.length >= 6) {
//       alert("Connexion avec succes! Email: " + emailInput);
//       setEmailInput("");
//     } else {
//       setEmailError(!emailInput.includes("@") ? "Email invalide!" : "");
//       setPasswordError(
//         passwordInput.length < 6 ? "Mot de passe trop court!" : ""
//       );
//     }
//   }

//   //TWO WAY BINDING: LIAISON DANS LE DEUX SENS

//   //4- Mettre les composants en place et les lier avec la variables et les fonctions:
//   return (
//     <View style={styles.container}>
//       <InputWithError
//         holder='Email'
//         valeur={emailInput}
//         action={handleEmail}
//         errorMessage={emailError}
//         type='email-address'
//       />

//       <InputWithError
//         holder='Mot de passe'
//         valeur={passwordInput}
//         action={handlePassword}
//         errorMessage={passwordError}
//         type='default'
//         isPassword
//       />

//       <Button label='Connexion' action={login}>
//         <AntDesign
//           name='login'
//           size={20}
//           color={STYLES_VARIABLES.LIGHT_COLOR}
//         />
//       </Button>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {},
// });

// export default Login;
// rnfc: React Native Functional Component
import { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-web";
import Button from "../../UI/Button/Button";
import { AntDesign } from "@expo/vector-icons";
import { STYLES_VARIABLES } from "../../../variables/stylesVariables";
import InputWithError from "../../UI/InputWithError/InputWithError";
const Login = () => {
  //1- Créer les variables d'etats:
  const [emailInput, setEmailInput] = useState("amelyousfi.com");
  const [emailError, setEmailError] = useState("");

  const [passwordInput, setPasswordInput] = useState("");
  const [passwordError, setPasswordError] = useState("");

  //2- Créer les fonctions qui changent les variables:
  function handleEmail(text) {
    setEmailError("");
    setEmailInput(text);
  }

  function handlePassword(text) {
    setPasswordError("");
    setPasswordInput(text);
  }

  //3- Créer la fonction pour valider le formulaire:
  function login() {
    if (emailInput.includes("@") && passwordInput.length >= 6) {
      alert("Connexion avec succes! Email: " + emailInput);
      setEmailInput("");
    } else {
      setEmailError(!emailInput.includes("@") ? "Email invalide!" : "");
      setPasswordError(
        passwordInput.length < 6 ? "Mot de passe trop court!" : ""
      );
    }
  }

  //TWO WAY BINDING: LIAISON DANS LE DEUX SENS

  //4- Mettre les composants en place et les lier avec la variables et les fonctions:
  return (
    <View style={styles.container}>
      <InputWithError
        holder='Email'
        valeur={emailInput}
        action={handleEmail}
        errorMessage={emailError}
        type='email-address'
      />

      <InputWithError
        holder='Mot de passe'
        valeur={passwordInput}
        action={handlePassword}
        errorMessage={passwordError}
        type='default'
        isPassword
      />

      <Button label='Connexion' action={login}>
        <AntDesign
          name='login'
          size={20}
          color={STYLES_VARIABLES.LIGHT_COLOR}
        />
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Login;
