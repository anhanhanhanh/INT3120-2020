import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TextInput,
  Button,
  ViewComponent,
} from "react-native";
import Word from "../components/Word";
import Learning from "../components/Learning";
import sample from "../Data";

import tree0 from "../assets/tree/tree0.png";
import tree1 from "../assets/tree/tree1.png";
import tree2 from "../assets/tree/tree2.png";
import tree3 from "../assets/tree/tree3.png";
import tree4 from "../assets/tree/tree4.png";
import tree5 from "../assets/tree/tree5.png";
import thunder from "../assets/thunder.png";
import water from "../assets/watering-can.png";
import { FlatList } from "react-native-gesture-handler";
const treeArr = [tree0, tree1, tree2, tree3, tree4, tree5];

const screenWidth = Math.round(Dimensions.get("window").width);
const screenHeight = Math.round(Dimensions.get("window").height);


// export default class Review extends React.Component {
export default function Review({ navigation, route }) {


  //function randomAnswer() {
    let listTemp = JSON.parse(JSON.stringify(sample.listWordData))

    let listAnswer = []

    for (let i = 0; i < 4; i++) {
      let rd = Math.floor(Math.random() * listTemp.length);
      listAnswer.push(listTemp[rd]);
      listTemp.splice(rd, 1);
    }

    let index = Math.floor(Math.random() * listAnswer.length);
    let question = listAnswer[index]
    // let answer =  question.get()

    const numberQuestion = 5;
    let questionNow = 1;

  return (
    <View style={styles.container}>
      <View style={styles.DetailsBox}>
        <View style={styles.WordContainer}>
          <Text style={styles.Word}>{question.word}</Text>
          {/* <Text style={styles.Title}>Means : </Text>
          <Text style={styles.Mean}>Đăng ký</Text> */}
        </View>

        <View>
          <Image style={styles.WordImage} source={tree4} />

          <View styles={styles.ThunderWater}>
            {/* <Image style={styles.ThunderImage} source={thunder} /> */}
            {/* <Image  style={styles.WaterImage}  source ={water}/> */}
          </View>
        </View>
      </View>

      {/* <View style={styles.WordBox}>
        <Text>Hello</Text>
      </View> */}


      

      <FlatList
        data={listAnswer}
        numColumns={2}
        renderItem={({ item }) => 
          <View style={styles.wrapper}>
            <Learning wordLearning={item} />
          </View>
        }
        keyExtractor = {item => `${item.id}`} 
        contentContainerStyle={styles.containerFlatList}
      />
      
    </View>
  );
}

//styled componet
const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "flex-start",
  },
  DetailsBox: {
    flexDirection: "row",
    alignItems: "center",
    padding: 30,
    marginBottom: 30,
  },
  WordContainer: {
    flexGrow: 1,
  },
  ThunderWater: {
    flexDirection: "row",
  },
  WordImage: {
    width: 65,
    height: 65,
    backgroundColor: "green",
    borderStyle: "solid",
    borderWidth: 0.5,
    borderRadius: 80,
  },
  ThunderImage: {
    marginTop: 20,
    width: 35,
    height: 35,
    opacity: 0.4,
  },
  WaterImage: {
    marginTop: 20,
    width: 35,
    height: 35,
    marginLeft: "auto",
  },
  Mem: {
    padding: 30,
  },
  MemText: {
    paddingTop: 5,
    paddingBottom: 5,
    borderBottomWidth: 0.2,
    borderStyle: "solid",
  },
  Word: {
    textTransform: "lowercase",
    fontWeight: "700",
    fontSize: 30,
  },
  Mean: {
    textTransform: "lowercase",
    fontWeight: "500",
    fontSize: 15,
  },
  Title: {
    paddingTop: 30,
    paddingBottom: 5,
    color: "red",
    fontWeight: "500",
    fontSize: 15,
  },
  WordBox: {
    borderStyle: "solid",
    borderWidth: 0.3,
    borderColor: "black",
    shadowOffset: { width: 10, height: 10 },
    shadowColor: "black",
    shadowOpacity: 1.0,
  },
  wrapper: {
    flex: 1, 
    paddingTop: 8
  },
  containerFlatList: {
    paddingHorizontal: 8
  }
});
