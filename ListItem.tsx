import React from 'react'
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

interface Props {
    item: string;
}

const ListItem = ({ item }: Props) => {
    return (
        <TouchableOpacity style={ styles.ListItem }>
            <View style={ styles.listItemView }>
                <Text style={ styles.listItemText }>{ item }</Text>
                <Icon name="remove" size={ 20 } />
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    ListItem: {
        padding: 15,
        backgroundColor: '#f8f8f8',
        borderBottomWidth: 1,
        borderColor: '#eee',
    },
    listItemView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    listItemText: {
        fontSize: 18,
    },
})
export default ListItem
