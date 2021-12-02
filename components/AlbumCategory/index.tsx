import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import { Albumtype } from '../../types';
import Album from '../Album';

export type AlbumCategoryProps = {
    title: string,
    albums: [Albumtype]
}

const index = (props: AlbumCategoryProps) => {
    return (
        <View style={styles.container}>
            {/* Title of the category*/}
            <Text style={styles.text}>{props.title}</Text>
            {/* List of albums */}
            <FlatList
                data={props.albums}
                horizontal
                renderItem={({ item }) => <Album album={item}/>}
                keyExtractor={( item ) => item.id}
            />
        </View>
    )
}

export default index

const styles = StyleSheet.create({
    container: {
        margin: 10,
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ffffff'
    }
})
