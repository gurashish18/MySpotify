import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { Audio, Video } from 'expo-av';

const song = {
    id: '1',
    songuri: 'https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3',
    name: 'Harleys in Hawai',
    imageuri: 'https://i.scdn.co/image/ab67616d0000b2738028f8eabd0a79d42ad0ce40',
    creator: 'Slaman Khan Farrah',
}

  
const index = () => {

    const [sound, setsound] = useState<Audio.Sound|null>(null)
    const [isplaying, setisplaying] = useState<boolean>(true)
    const [duration, setduration] = useState<number|null>(null)
    const [position, setposition] = useState<number|null>(null)

    const onPlaybackStatusUpdate = (status) => {
        console.log(status)
        setisplaying(status.isPlaying)
        setduration(status.durationMillis)
        setposition(status.positionMillis)
    }
    
    
    const playSong = async () => {

        if(sound)
        {
            await sound.unloadAsync()
        }

        const { sound: newSound } = await Audio.Sound.createAsync(
            { uri: song.songuri },
            { shouldPlay: isplaying },
            onPlaybackStatusUpdate
        )
        setsound(newSound)
    }

    useEffect(() => {
        playSong()
    }, [])

    const playpause = async() => {
        if(!sound)
            return;
        
        if(isplaying)
        {
            await sound.stopAsync();
        }
        else
        {
            await sound.playAsync();
        }
    }

    const getProgress = () => {
        if (sound === null || duration === null || position === null) {
          return 0;
        }
    
        return (position / duration) * 100;
      }

    return (
        <View style={styles.container}>
            <View>
                <View style={[styles.progress, { width: `${getProgress()}%`}]} />
                <View style={styles.subcontainer1}>
                    <Image style={styles.image} source={{uri: song.imageuri}}/>
                    <View style={styles.subcontainer3}>
                        <Text style={styles.name}>{song.name}</Text>
                        <Text style={styles.creator}>{song.creator}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.subcontainer2}>
                <FontAwesome name="heart-o" style={styles.icon}/>
                <TouchableOpacity onPress={playpause}>
                    <FontAwesome name={isplaying ? 'pause' : 'play'} style={styles.icon}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default index

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 50,
        width: '100%',
        flexDirection: 'row',
        backgroundColor: '#303030',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    progress: {
        height: 3,
        backgroundColor: '#fff'
    },
    subcontainer1: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        height: 70,
        width: 70
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffff',
    },
    creator: {
        fontStyle: 'italic',
        color: '#ffffff',
    },
    subcontainer2: {
        width: 150,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    subcontainer3: {
        marginLeft: 20,
    },
    icon: {
        fontSize: 30,
        color: '#ffffff'
    }
})
