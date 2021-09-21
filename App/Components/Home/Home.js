import React, { useState } from "react";
import Head from "../Header/Head";
import ModalUpdateArticle from '../ModalUpdateArticle/ModalUpdateArticle'
import { View, ScrollView, Text, Pressable, Image } from "react-native";
import { Input } from "react-native-elements";
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import styles from "./style";

const Home = (props) => {
  const [lists, setListes] = useState([
    "Orange",
    "Pomme",
    "Fraise",
    "Kiwi",
    "Fruit du dragon",
  ]);
  const [newArticle, setNewArticle] = useState("");
  const [visible, setVisible] = useState(false);
  const [targetArticle, setTargetArticle] = useState({});

  const handleChange = (evt) => {
    const { text } = evt.nativeEvent;
    setNewArticle(text);
    console.log(text);
  };

  const listSubmit = () => {
    setListes([...lists, newArticle]);
    setNewArticle("");
    console.log(lists);
  };

  const handleDelete = (index) => {
    const newList = lists.filter((_, indexList) => indexList !== index);
    setListes(newList);
    console.log(newList);
  };

  const handleUpdateArticle = (index, value) => {
    setTargetArticle({ index: index, produit: value });
    setVisible(true);
  };

  const updateArticle = (newArticle, oldArticle) => {
    const newList = lists.map((list, index) =>
      index === oldArticle ? newArticle : list
    );
    setListes(newList);

    };
  const closeModal = () => {
    setVisible(false);
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Head />
      <Input
        placeholder="Ajouter à la liste"
        onChange={handleChange}
        value={newArticle}
        onSubmitEditing={listSubmit}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        {lists.map((value, index) => {
          return (
            <View key={index} style={styles.list}>
              <Text style={styles.textList}>{value}</Text>
              <BouncyCheckbox
                fillColor="green"
                onPress={(isChecked: boolean) => {}}
              />
              <Pressable onPress={() => handleUpdateArticle(index, value)}>
                <Image
                  style={styles.image}
                  source={{
                    uri:
                      "https://image.flaticon.com/icons/png/512/32/32355.png",
                  }}
                />
              </Pressable>

              <Pressable onPress={() => handleDelete(index)}>
                <Image
                  style={styles.image}
                  source={{
                    uri:
                      "https://cdn.iconscout.com/icon/premium/png-512-thumb/delete-1432400-1211078.png",
                  }}
                />
              </Pressable>
            </View>
          );
        })}
      </ScrollView>
      <ModalUpdateArticle
        visible={visible}
        updateArticle={updateArticle}
        closeModal={closeModal}
        targetArticle={targetArticle}
      />
    </View>
  );
};

export default Home;
