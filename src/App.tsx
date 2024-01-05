import { SafeAreaView, StyleSheet, Pressable, Text, View, TextInput, FlatList, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import ShoppingItem from './components/ShoppingItem'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { app, db, getFirestore, collection, addDoc, getDocs } from '../firebase/index'

const App = () => {
    /* Need a state */
    const [title, setTitle] = useState<String>("")
    /* create a list */
    const [shoppingList, setShoppingList] = useState([])
    /* Need an export function to add new item */
    const addShoppingItem = async() => {
        try {
            const docRef = await addDoc(collection(db, "shopping"), {
              title: title,
              isChecked: false
            });
            console.log("Document written with ID: ", docRef.id);
            setTitle("")
          } catch (e) {
            console.error("Error adding document: ", e);
          }
    }

    /* Need function to retrive the list */
    const getShoppingList =async () => {
      const querySnapshot = await getDocs(collection(db, "shopping"));
      querySnapshot.forEach((doc) => {
        console.log(doc.id, doc.data());
        setShoppingList({
          ...doc.data(),
          id: doc.id,
        })
      });
    }

    /* Need an Effect to display the list */
    useEffect(() => {
      getShoppingList()
    }, [])
    

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
            {/* heading */}
            <Text style={styles.heading}>Shopping List</Text>

            {/* no. of shopping items */}
            <Text style={styles.noOfItems}>0</Text>

            {/* delete all */}
            <Pressable>
                <Icon name="delete" size={24} color="black"/>
            </Pressable>
        </View>
        {/* flatlist */}
        {/* apply condition check for render item and activity Indicator */}

        {
          shoppingList.length > 0 ? (
            <FlatList
            data={shoppingList}
            renderItem={({item})=><ShoppingItem title={item.title}/>}
            keyExtractor={item=>item.id}
            />
          )
          : (
            <ActivityIndicator/>
          )}

        {/* text input */}
        <TextInput
          placeholder='Enter shopping item' 
          style={styles.input}
          value={title}
          onChangeText={(text) => setTitle(text)}
          onSubmitEditing={addShoppingItem}
          />
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    header: {
        flexDirection: "row",
        width: "90%",
        alignSelf: "center",
        padding: 10,
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10,
    },
    heading: {
        fontSize: 30,
        fontWeight: "500",
        flex: 1,
    },
    noOfItems: {
        fontSize: 30,
        fontWeight: "500",
        marginRight: 20,
    },
    input: {
        backgroundColor: "lightgray",
        padding: 10,
        fontSize: 17,
        width: "90%",
        alignSelf: "center",
        borderRadius: 10,
        marginTop: "auto",
    },
})