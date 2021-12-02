import * as React from 'react';
import { FlatList, StyleSheet, Text, View} from 'react-native';
import AlbumCategory from '../components/AlbumCategory/index';

const AlbumCategories = [
{
  id: '1',
  title: 'Romantic',
  albums: [
    {
      id: '1',
      imageuri: 'https://i.scdn.co/image/ab67616d0000b2738028f8eabd0a79d42ad0ce40',
      artistNames: 'Slaman Khan Farrah',
    },
    {
      id: '2',
      imageuri: 'https://i.scdn.co/image/ab67616d0000b273d14201a32b7e313544d18eae',
      artistNames: 'Akshay kumar katrina',
    },
    {
      id: '3',
      imageuri: 'https://www.pinkvilla.com/files/styles/large/public/99_songs_review_1.jpg?itok=rcpNDNjL',
      artistNames: 'Slaman Khan',
    },
    {
      id: '4',
      imageuri: 'https://i.scdn.co/image/ab67616d0000b2738028f8eabd0a79d42ad0ce40',
      artistNames: 'Akshay kumar',
    },
    {
      id: '5',
      imageuri: 'https://i.scdn.co/image/ab67616d0000b273d14201a32b7e313544d18eae',
      artistNames: 'kumar katrina',
    },
  ]
},
{
  id: '2',
  title: 'Hip Hop',
  albums: [
    {
      id: '1',
      imageuri: 'https://i.scdn.co/image/ab67706f0000000377a92a646f0294d8f1873306',
      artistNames: 'Slaman Khan Farrah',
    },
    {
      id: '2',
      imageuri: 'https://i.scdn.co/image/ab67616d0000b27357823d09cb2efe1a926f1623',
      artistNames: 'Akshay kumar katrina',
    },
    {
      id: '3',
      imageuri: 'https://www.pinkvilla.com/files/styles/large/public/99_songs_review_1.jpg?itok=rcpNDNjL',
      artistNames: 'Slaman Khan',
    },
    {
      id: '4',
      imageuri: 'https://i.scdn.co/image/ab67706f0000000377a92a646f0294d8f1873306',
      artistNames: 'Akshay kumar',
    },
    {
      id: '5',
      imageuri: 'https://i.scdn.co/image/ab67616d0000b27357823d09cb2efe1a926f1623',
      artistNames: 'kumar katrina',
    },
  ]
},
{
  id: '3',
  title: 'Happy',
  albums: [
    {
      id: '1',
      imageuri: 'https://i.scdn.co/image/ab67616d0000b2738028f8eabd0a79d42ad0ce40',
      artistNames: 'Slaman Khan Farrah',
    },
    {
      id: '2',
      imageuri: 'https://i.scdn.co/image/ab67616d0000b273d14201a32b7e313544d18eae',
      artistNames: 'Akshay kumar katrina',
    },
    {
      id: '3',
      imageuri: 'https://www.pinkvilla.com/files/styles/large/public/99_songs_review_1.jpg?itok=rcpNDNjL',
      artistNames: 'Slaman Khan',
    },
    {
      id: '4',
      imageuri: 'https://i.scdn.co/image/ab67616d0000b2738028f8eabd0a79d42ad0ce40',
      artistNames: 'Akshay kumar',
    },
    {
      id: '5',
      imageuri: 'https://i.scdn.co/image/ab67616d0000b273d14201a32b7e313544d18eae',
      artistNames: 'kumar katrina',
    },
  ]
},
{
  id: '4',
  title: 'Sad',
  albums: [
    {
      id: '1',
      imageuri: 'https://i.scdn.co/image/ab67706f0000000377a92a646f0294d8f1873306',
      artistNames: 'Slaman Khan Farrah',
    },
    {
      id: '2',
      imageuri: 'https://i.scdn.co/image/ab67616d0000b27357823d09cb2efe1a926f1623',
      artistNames: 'Akshay kumar katrina',
    },
    {
      id: '3',
      imageuri: 'https://www.pinkvilla.com/files/styles/large/public/99_songs_review_1.jpg?itok=rcpNDNjL',
      artistNames: 'Slaman Khan',
    },
    {
      id: '4',
      imageuri: 'https://i.scdn.co/image/ab67706f0000000377a92a646f0294d8f1873306',
      artistNames: 'Akshay kumar',
    },
    {
      id: '5',
      imageuri: 'https://i.scdn.co/image/ab67616d0000b27357823d09cb2efe1a926f1623',
      artistNames: 'kumar katrina',
    },
  ]
},
{
  id: '5',
  title: 'Recently Played',
  albums: [
    {
      id: '1',
      imageuri: 'https://i.scdn.co/image/ab67616d0000b2738028f8eabd0a79d42ad0ce40',
      artistNames: 'Slaman Khan Farrah',
    },
    {
      id: '2',
      imageuri: 'https://i.scdn.co/image/ab67616d0000b273d14201a32b7e313544d18eae',
      artistNames: 'Akshay kumar katrina',
    },
    {
      id: '3',
      imageuri: 'https://www.pinkvilla.com/files/styles/large/public/99_songs_review_1.jpg?itok=rcpNDNjL',
      artistNames: 'Slaman Khan',
    },
    {
      id: '4',
      imageuri: 'https://i.scdn.co/image/ab67616d0000b2738028f8eabd0a79d42ad0ce40',
      artistNames: 'Akshay kumar',
    },
    {
      id: '5',
      imageuri: 'https://i.scdn.co/image/ab67616d0000b273d14201a32b7e313544d18eae',
      artistNames: 'kumar katrina',
    },
  ]
},
]

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* <AlbumCategory title={AlbumCategories.title} albums={AlbumCategories.albums}/> */}
      <FlatList 
        data={AlbumCategories}
        horizontal={false}
        renderItem={({ item }) => <AlbumCategory title={item.title} albums={item.albums}/>}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
