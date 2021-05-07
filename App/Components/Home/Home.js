import React , { useState ,useEffect} from 'react'

import Head from '../Header/Head'

import { View , ScrollView,Text } from 'react-native'
import {Input  } from 'react-native-elements'

import styles from './style'

const Home = (props) => {
    const [lists,setListes] = useState(["Orange", "Pomme", "Fraise", "Kiwi","Fruit du dragon"])
    const [newArticle, setNewArticle] = useState("")

    const handleChange =(evt)=>{
        const { text } = evt.nativeEvent;
        setNewArticle(text)
    }

    const listSubmit =()=>{
        setListes([...lists,newArticle])
        setNewArticle("")
    }

    return (
        <View style={{flex:1,backgroundColor:'white'}}>
             <Head  />
            <Input
                placeholder='Ajouter à la liste'
                onChange={ handleChange}
                value={newArticle}
                onSubmitEditing={listSubmit}
            />
                        <ScrollView 
             showsVerticalScrollIndicator={false}
            >
                { lists.map((value,index)=>{
                    return(
                        <View key={index} style={styles.list}>    
                            <Text style={styles.textList}>{value}</Text>
                        </View>
                   )
                })} 
            </ScrollView>
 
        </View>
    )
}

export default Home
