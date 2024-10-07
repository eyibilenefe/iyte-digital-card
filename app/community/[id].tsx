import React from 'react';
import { View, Image, StyleSheet, ScrollView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { ThemedText } from '../../components/ThemedText';
import { ThemedView } from '../../components/ThemedView';

export default function CommunityDetailScreen() {
  const { community } = useLocalSearchParams();
  const communityData = JSON.parse(community as string);

  return (
    <ScrollView>
      <ThemedView style={styles.container}>
        <Image source={{ uri: communityData.logo }} style={styles.logo} />
        <ThemedText style={styles.name}>{communityData.name}</ThemedText>
        <ThemedText style={styles.description}>{communityData.description}</ThemedText>
        <ThemedText style={styles.stats}>
          Takipçi: {communityData.followers.length} • Etkinlik: {communityData.events.length}
        </ThemedText>
        
        <ThemedText style={styles.sectionTitle}>Etkinlikler</ThemedText>
        {communityData.events.map((event: any, index: number) => (
          <ThemedText key={index} style={styles.eventItem}>{event.name}</ThemedText>
        ))}
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
  logo: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 16,
  },
  stats: {
    fontSize: 14,
    color: '#666',
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
  eventItem: {
    fontSize: 16,
    marginBottom: 4,
    alignSelf: 'flex-start',
  },
});