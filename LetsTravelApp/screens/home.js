import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import { Icon, Button, BottomSheet, ListItem } from 'react-native-elements';

export default function Home() {
    const [isVisible, setIsVisible] = useState(false);
    const list = [
      { title: 'Canada' },
      { title: 'Mexico' },
      {
        title: 'Cancel',
        containerStyle: { backgroundColor: 'red' },
        titleStyle: { color: 'white' },
        onPress: () => setIsVisible(false),
      },
    ];

    

    return (
        <View style={styles.background}> 
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>Let's Travel</Text>
                <Text style={styles.titleText}><Icon name='plane' type="font-awesome" color='black' size='102'/></Text>
                <Button
                  title="Start"
                  onPress={() => setIsVisible(true)}
                />
            </View>
            <BottomSheet isVisible={isVisible}>
                {list.map((l, i) => (
                <ListItem key={i} containerStyle={l.containerStyle} onPress={l.onPress}>
                    <ListItem.Content>
                        <ListItem.Title style={l.titleStyle}>{l.title}</ListItem.Title>
                    </ListItem.Content>
                </ListItem>
                ))}
            </BottomSheet>
        </View>
      
    )
}

const styles = StyleSheet.create({
    background: {
        flex:1,
        backgroundColor: '#34526D',
    },
    titleText: {
      textAlign: 'center',
      fontFamily: 'rowdies',
      fontSize: 50,
    },
    titleContainer: {
      flex: 1,
      paddingTop: 100,
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    title: {
      fontSize: 30,
      fontFamily: 'rowdies',
      paddingTop: 20,
      textAlign: "center",
      flex:10,
    }
  });
  