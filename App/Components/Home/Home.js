import React , { useState ,useEffect} from 'react'

import Head from '../Header/Head'

import { View , ScrollView,Text ,Pressable , Image} from 'react-native'
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

    const handleDelete=(value)=>{
        const newList = lists.filter(list=> list !== value)
        setListes(newList)
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
                            <Pressable  onPress={()=>{}}>
                                    <Image
                                        style={styles.image}
                                      
                                        source={{uri:"https://image.flaticon.com/icons/png/512/32/32355.png"}}
                                    />
                                </Pressable>

                                <Pressable  onPress={()=>handleDelete(value)}>
                                    <Image
                                        style={styles.image}
                                       
                                        source={{uri:"https://cdn.iconscout.com/icon/premium/png-512-thumb/delete-1432400-1211078.png"}}
                                    />
                                </Pressable>
                        </View>
                   )
                })} 
            </ScrollView>
 
        </View>
    )
}

export default Home
