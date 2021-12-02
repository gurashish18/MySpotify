import React from 'react'
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native'
import {Albumtype} from '../../types'
import { useNavigation } from '@react-navigation/native'

export type AlbumProps = {
    album: Albumtype,
}

const Album = (props: AlbumProps) => {
    const navigation = useNavigation();
    return (
        <TouchableHighlight onPress={() => navigation.navigate('AlbumScreen', {id: props.album.id})}>
            <View style={styles.container}>
                <Image style={styles.image} source={{uri: props.album.imageuri}}/>
                <Text style={styles.text}>{props.album.artistNames}</Text>
            </View>
        </TouchableHighlight>
    )
}

export default Album

const styles = StyleSheet.create({
    container: {
        margin: 8,
        width: 150,
    },
    image: {
        width: '100%',
        height: 150,
    },
    text: {
        marginTop: 5,
        color: 'grey'
    }
})
