import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { ThemedText } from '../components/ThemedText';

interface CommunityCardProps {
  community: {
    id: number;
    name: string;
    logo: string;
    description: string;
    followers: any[];
    events: any[];
  };
}

export function CommunityCardItem({ community }: CommunityCardProps) {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={{ uri: community.logo }} style={styles.logo} />
      <View style={styles.infoContainer}>
        <ThemedText style={styles.name}>{community.name}</ThemedText>
        <ThemedText style={styles.description}>{community.description}</ThemedText>
        <ThemedText style={styles.stats}>
          {community.followers.length} takipçi • {community.events.length} etkinlik
        </ThemedText>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  infoContainer: {
    flex: 1,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    marginBottom: 4,
  },
  stats: {
    fontSize: 12,
    color: '#666',
  },
});