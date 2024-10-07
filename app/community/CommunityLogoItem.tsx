import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { ThemedText } from '../../components/ThemedText';

interface CommunityLogoProps {
  community: {
    id: number;
    logo: string;
    name: string;
  };
  onPress: () => void;
}

export function CommunityLogoItem({ community, onPress }: CommunityLogoProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.logoContainer}>
        <Image source={{ uri: community.logo }} style={styles.logo} />
      </View>
      <ThemedText style={styles.name} numberOfLines={2} ellipsizeMode="tail">
        {community.name}
      </ThemedText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginRight: 20,
    width: 100,
  },
  logoContainer: {
    width: 84,
    height: 84,
    borderRadius: 42,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  logo: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  name: {
    fontSize: 14,
    textAlign: 'center',
    width: '100%',
    marginTop: 8,
    color: '#8B0000',
    fontWeight: '600',
  },
});