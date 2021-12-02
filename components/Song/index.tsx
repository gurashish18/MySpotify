import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Songtype } from '../../types'

export type SongProps = {
    song: Songtype
}

const index = (props : SongProps) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: props.song.imageuri}}/>
            <View style={styles.subcontainer}>
                <Text style={styles.name}>{props.song.name}</Text>
                <Text style={styles.creator}>{props.song.creator}</Text>
            </View>
        </View>
    )
}

export default index

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 7
    },
    image: {
        height: 70,
        width: 70,
    },
    subcontainer: {
        marginLeft: 20,
        marginTop: 7,
        marginBottom: 7,
        justifyContent: 'space-between',
    },
    name: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'lightgrey'
    },
    creator: {
        color: 'grey',
        fontStyle: 'italic',
    }
})
