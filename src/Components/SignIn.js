import * as React from "react";
import { View, TouchableOpacity, Text, StyleSheet, Pressable,Dimensions } from "react-native";
import MyBottom from "./MyBottom";
import { Feather } from "@expo/vector-icons";
import MyInput from "./MyInput";
import { AuthContext } from "../Context/AuthContext";
import MyBottonGoogle from "./MyBottonGoogle";
import BottonRegistro from "./BottonRegistro";
import { Colors } from "../Constants/Colors";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
const { width, height } = Dimensions.get("window");

const SignIn = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const { authState, setAuthState, setEmail, setPassword, handleSignIn } = React.useContext(AuthContext);
  const navigation = useNavigation();

  const onHandleSign = async () => {
    try {
      await handleSignIn();
    } catch (err) {
      console.log("Error", err);
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  
  return (
    <React.Fragment>
      <ScrollView>
        <View style={styles.cont}>
      <Text style={styles.text}> Correo Electrónico </Text>
      <MyInput label={"Email"} onChangeText={setEmail} style={styles.input}/>
      <Text style={styles.textPassword}> Contraseña </Text>
      <View style={styles.viewPassword}>
        <MyInput
          label={"Contraseña"}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
          // style={styles.input}
        />
        <TouchableOpacity onPress={toggleShowPassword} style={styles.eyeIcon} activeOpacity={0.8}>
          <Feather name={showPassword ? "eye" : "eye-off"} size={24} color="#323646" />
        </TouchableOpacity>
      </View>
      <MyBottom title="Ingresar" onPress={onHandleSign} />

      <Pressable>
        <Text style={styles.textForgotPassword}>
          {" "}
          ¿Olvidaste tu contraseña?{" "}
        </Text>
      </Pressable>
      <View style={styles.line}></View>
      <MyBottonGoogle title="Google" />

      <Pressable>
        <Text style={styles.textPass}> ¿No tienes una cuenta? </Text>
      </Pressable>

      <BottonRegistro
        title="Registrate"
        onPress={() => navigation.navigate("Register")}
      />
      </View>
      </ScrollView>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  cont:{
    flex:1,
    alignItems:'center',
   
  },
  text: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#F3305F",
    marginRight: "55%",
    marginTop:80,
  
  },
  textPassword: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#F3305F",
    marginRight: "65%",
  },
  textForgotPassword: {
    position: "absolute",
    alignSelf:'center',
    
  },
  line: {
    width: "90%",
    height: 2,
    backgroundColor: Colors.bottonLogin,
    marginTop: "6%",
    marginBottom: "2%",
  },
  textPass:{
    alignSelf:'center',
  },
  viewPassword:{
    flexDirection: 'row',
    alignItems: 'center',
  },

  eyeIcon: {
    position: "absolute",
    right: 25,
  },
});
export default SignIn;