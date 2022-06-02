// //import liraries
// import React, { Component } from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// // create a component
// const MyComponent = () => {
//     return (
//         <View style={styles.container}>
//             <Text>MyComponent</Text>
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
// export default MyComponent;

//import liraries
import React, { Component, useContext, useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import InputWithError from "../../UI/InputWithError/InputWithError";
import { AntDesign } from "@expo/vector-icons";
import { STYLES_VARIABLES } from "../../../variables/stylesVariables";
import Button from "../../UI/Button/Button";
import { UserContext } from "../../contexts/UserContext";

// create a component
const Signup = () => {
  //definir le context
  const {user, setUser}  = useContext(UserContext)
  //console.log(userC)
  // -1- Creer les Variables d'etats:
  const [emailInput, setEmailInput] = useState("amel.yousfiben@gmail.com")
  const [emailError, setEmailError] = useState("");

  const [passwordInput, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [usernameInput, setUsernameInput] = useState("");
  const [usernameError, setUsernameError] = useState("")

  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [passwordConfirmError, setPasswordConfirmError] = useState("")

  // 2- Creer les fonctions qui changent l etat
  function handleEmail(text){
    setEmailError("");
    setEmailInput(text);
  }
  function handlePassword(text){
    setPassword(text);
    setPasswordError("");
  }
  function handlePasswordConfirm(text){
    setPasswordConfirm(text);
    setPasswordConfirmError("");
  }
  function handleUsername(text){
    setUsernameInput(text);
    setUsernameError("");


  }

  //3  creer la fonction qui permet de valider les inputs
  function login(){

    if(emailInput.includes("@") && passwordInput.length >= 6 && passwordInput == passwordConfirm && usernameInput.length >= 3 ){
      // alert("connexion avec success")
      // utilisation du context
     
        // setUsernameError({ email: emailInput, username: usernameInput});
        
      setUser({ email : emailInput, userName : usernameInput})
     // setEmailInput("")

    }
    else{
      setEmailError(!emailInput.includes("@") ? "email invalide!!" : "");
      setPasswordError(passwordInput.length < 6 ? "Mot de passe tres couurt!!" : "");
      setUsernameError(usernameInput.length <3 ? "user name trop court minimum 3 caractere": "")
      setPasswordConfirmError(passwordInput !== passwordConfirm ?  "les mots de passe ne sont pas identiques" : "" )

    }
    //4- mettre les composant en place

  }







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
        holder='username'
        valeur={usernameInput}
        action={handleUsername}
        errorMessage={usernameError}
        type='default'
      />

      <InputWithError
        holder='Mot de passe'
        valeur={passwordInput}
        action={handlePassword}
        errorMessage={passwordError}
        type='default'
        isPassword
      />
       <InputWithError
        holder='confirm password'
        valeur={passwordConfirm}
        action={handlePasswordConfirm}
        errorMessage={passwordConfirmError}
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


//make this component available to the app
export default Signup;
