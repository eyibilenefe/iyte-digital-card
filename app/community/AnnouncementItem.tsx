import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { ThemedText } from '../../components/ThemedText';

interface AnnouncementProps {
  announcement: {
    id: number;
    name: string | null;
    image: string | null;
    url: string | null;
  };
}

const { width } = Dimensions.get('window');
const ITEM_WIDTH = width * 0.9;
const ITEM_HEIGHT = ITEM_WIDTH * 0.75;

export function AnnouncementItem({ announcement }: AnnouncementProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={() => {/* URL'ye yönlendirme işlemi */}}>
      <View style={styles.imageContainer}>
        {announcement.image && (
          <Image 
            source={{ uri: announcement.image }} 
            style={styles.image} 
            resizeMode="cover"
          />
        )}
      </View>
      <View style={styles.textContainer}>
        {announcement.name && (
          <ThemedText style={styles.name}>{announcement.name}</ThemedText>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    borderRadius: 12,
    overflow: 'hidden',
    marginRight: 16,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    backgroundColor: 'white',
  },
  imageContainer: {
    width: '100%',
    height: '70%',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  textContainer: {
    padding: 12,
    height: '30%',
    justifyContent: 'center',
  },
  name: {
    color: '#8B0000',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
});