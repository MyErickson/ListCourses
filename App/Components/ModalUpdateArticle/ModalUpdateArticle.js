import React, { useState } from 'react'

import { View, Platform} from 'react-native'
import Dialog from "react-native-dialog";
import {Input } from 'react-native-elements';


import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";


const ModalUpdateArticle =({
    visible,
    closeModal,
    updateArticle,
    targetArticle,

})=>{

    const [newArticle, setNewArticle] = useState("")

    const close =()=>{
        setNewArticle("")
        closeModal()
    }

    const handleChangeArticle=(evt)=>{
        const { text } = evt.nativeEvent;
        setNewArticle(text)
    }

    const handleOk=()=>{
        updateArticle(newArticle,targetArticle.index)
        closeModal()
        setNewArticle("")

    }

    return (
              
        <Dialog.Container 
        visible={visible}
        headerStyle={{borderRadius:30 }}
        contentStyle={{width:wp("90%"),borderRadius:14,justifyContent:"space-between",marginBottom:Platform.OS==='ios'?0:0}}
        buttonSeparatorStyle={{color:"black"}} >
            
   
            <View style={{ alignItems:'center'}}>
                <Input
                    containerStyle={{width:340 }}
                    placeholder={"modifier l'article"}
                    placeholderTextColor="grey"
                    value={newArticle}
                    onChange={handleChangeArticle}

                />

            </View>      
        
        <Dialog.Button label="Envoyer" onPress={handleOk}/>  
        <Dialog.Button color="red"  label={ "Annuler" } onPress={()=>close()}/> 

        </Dialog.Container>
     
    )
}

 

export default ModalUpdateArticle
