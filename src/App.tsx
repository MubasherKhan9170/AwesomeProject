import { SafeAreaView, StyleSheet, Pressable, Text, View, TextInput } from 'react-native'
import React from 'react'
import ShoppingItem from './components/ShoppingItem'
import Icon from 'react-native-vector-icons/MaterialIcons'

const App = () => {
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
        <ShoppingItem/>
        <ShoppingItem/>
        <ShoppingItem/>

        {/* text input */}
        <TextInput placeholder='Enter shopping item' style={styles.input}/>
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