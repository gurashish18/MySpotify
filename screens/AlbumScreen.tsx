import React, {useEffect} from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { useRoute } from '@react-navigation/native'
import Song from '../components/Song/index'
import AlbumHeader from '../components/AlbumHeader/index'

const album = 
    {
        id: '1',
        name: 'Good Vibes',
        imageuri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1yD2RTfquVTCujSYO1mS78x1hudyVRKiD9Q&usqp=CAU',
        creator: 'Spotify',
        likes: 37.6,
        songs: [
              {
                id: '1',
                name: 'Gurashish',
                imageuri: 'https://i.scdn.co/image/ab67616d0000b2738028f8eabd0a79d42ad0ce40',
                creator: 'Slaman Khan Farrah',
              },
              {
                id: '2',
                name: 'Gurashish',
                imageuri: 'https://i.scdn.co/image/ab67616d0000b273d14201a32b7e313544d18eae',
                creator: 'Akshay kumar katrina',
              },
              {
                id: '3',
                name: 'Gurashish',
                imageuri: 'https://www.pinkvilla.com/files/styles/large/public/99_songs_review_1.jpg?itok=rcpNDNjL',
                creator: 'Slaman Khan',
              },
              {
                id: '4',
                name: 'Gurashish',
                imageuri: 'https://i.scdn.co/image/ab67616d0000b2738028f8eabd0a79d42ad0ce40',
                creator: 'Akshay kumar',
              },
              {
                id: '5',
                name: 'Gurashish',
                imageuri: 'https://i.scdn.co/image/ab67616d0000b273d14201a32b7e313544d18eae',
                creator: 'kumar katrina',
              }
        ]
    }

const AlbumScreen = () => {
    const route = useRoute()

    useEffect(() => {
        console.log(route)
    }, [])
    return (
        <View>
            <FlatList 
              data={album.songs}
              horizontal={false}
              renderItem={({ item }) => <Song song={item}/>}
              keyExtractor={(item) => item.id}
              ListHeaderComponent={() => <AlbumHeader albumheader={album} />}
            />
        </View>
    )
}

export default AlbumScreen

const styles = StyleSheet.create({
    text: {
        color: '#ffffff'
    }
})
