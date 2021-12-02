import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { AlbumHeadertype } from '../../types'

export type AlbumHeaderprops = {
    albumheader : AlbumHeadertype
}

const index = (props : AlbumHeaderprops) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: props.albumheader.imageuri}}/>
            <View style={styles.subcontainer}>
                <Text style={styles.name}>{props.albumheader.name}</Text>
                <View style={styles.creator}>
                    <Text style={styles.text}>By {props.albumheader.creator} - {props.albumheader.likes} likes</Text>
                </View>
                <View style={styles.button}>
                    <Text style={styles.playbutton}>PLAY</Text>
                </View>
            </View>
        </View>
    )
}

export default index

const styles = StyleSheet.create({
    container: {
        minHeight: 380,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 0.5,
        borderBottomColor: '#ffffff'
    },
    image: {
        height: 170,
        width: 170,
    },
    subcontainer: {
        marginTop: 20,
    },
    creator: {
        alignItems: 'center',
        marginTop: 5,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        letterSpacing: 2,
        color: '#ffffff',
    },
    text: {
        fontSize: 13,
        color: '#ffffff',
    },
    button: {
        marginTop: 25,
        alignItems: 'center',
    },
    playbutton: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffff',
        borderWidth: 0.5,
        borderRadius: 15,
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#1DB954'
    }
})
