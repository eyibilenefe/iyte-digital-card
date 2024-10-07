import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, TouchableOpacity, FlatList, ActivityIndicator, View, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';

import { ThemedText } from '../../components/ThemedText';
import { ThemedView } from '../../components/ThemedView';
import { AnnouncementItem } from '../community/AnnouncementItem';
import { CommunityLogoItem } from '../community/CommunityLogoItem';

interface Announcement {
  id: number;
  name: string | null;
  image: string | null;
  url: string | null;
}

interface Community {
  id: number;
  name: string;
  logo: string;
  description: string;
  followers: any[];
  events: any[];
}

const API_BASE_URL = 'http:/192.168.51.43:8080'; // Kendi IP adresinizi buraya yazın

const { width } = Dimensions.get('window');
const ANNOUNCEMENT_WIDTH = width * 0.9;
const COMMUNITY_WIDTH = width * 0.85;

export default function ExploreScreen() {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [communities, setCommunities] = useState<Community[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showAllCommunities, setShowAllCommunities] = useState(false);
  const router = useRouter();
  const [activeAnnouncementIndex, setActiveAnnouncementIndex] = useState(0);
  const announcementListRef = useRef<FlatList>(null);

  const handleCommunityPress = (community: Community) => {
    router.push({
      pathname: '/community/[id]',
      params: { id: community.id, community: JSON.stringify(community) }
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      await Promise.all([fetchAnnouncements(), fetchCommunities()]);
    } catch (error) {
      setError('Veriler yüklenirken bir hata oluştu. Lütfen tekrar deneyin.');
    } finally {
      setLoading(false);
    }
  };

  const fetchAnnouncements = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/announcements/getAnnouncements`);
      const data = await response.json();
      setAnnouncements(data);
    } catch (error) {
      console.error('Duyurular alınırken hata oluştu:', error);
    }
  };

  const fetchCommunities = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/community`);
      const data = await response.json();
      setCommunities(Array.isArray(data) ? data : [data]);
    } catch (error) {
      console.error('Topluluklar alınırken hata oluştu:', error);
    }
  };

  const handleViewAllPress = () => {
    setShowAllCommunities(true);
  };

  const handleAnnouncementScroll = (event: any) => {
    const slideSize = event.nativeEvent.layoutMeasurement.width;
    const index = event.nativeEvent.contentOffset.x / slideSize;
    const roundIndex = Math.round(index);
    setActiveAnnouncementIndex(roundIndex);
  };

  const scrollToAnnouncement = (index: number) => {
    announcementListRef.current?.scrollToOffset({
      offset: index * ANNOUNCEMENT_WIDTH,
      animated: true,
    });
  };

  useEffect(() => {
    const timer = setInterval(() => {
      const nextIndex = (activeAnnouncementIndex + 1) % announcements.length;
      scrollToAnnouncement(nextIndex);
    }, 5000); // Her 5 saniyede bir otomatik kaydırma

    return () => clearInterval(timer);
  }, [activeAnnouncementIndex, announcements.length]);

  return (
    <ThemedView style={styles.container}>
      <FlatList
        ListHeaderComponent={() => (
          <>
            <FlatList
              ref={announcementListRef}
              horizontal
              data={announcements}
              renderItem={({ item }) => <AnnouncementItem announcement={item} />}
              keyExtractor={(item) => item.id.toString()}
              style={styles.announcementList}
              showsHorizontalScrollIndicator={false}
              snapToInterval={ANNOUNCEMENT_WIDTH}
              decelerationRate="fast"
              snapToAlignment="center"
              contentContainerStyle={styles.announcementContent}
              pagingEnabled
              onScroll={handleAnnouncementScroll}
              scrollEventThrottle={16}
              onMomentumScrollEnd={(event) => {
                const newIndex = Math.round(
                  event.nativeEvent.contentOffset.x / ANNOUNCEMENT_WIDTH
                );
                setActiveAnnouncementIndex(newIndex);
              }}
            />
            <View style={styles.paginationContainer}>
              {announcements.map((_, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => scrollToAnnouncement(index)}
                >
                  <View
                    style={[
                      styles.paginationDot,
                      index === activeAnnouncementIndex && styles.paginationDotActive,
                    ]}
                  />
                </TouchableOpacity>
              ))}
            </View>
            <View style={styles.clubsContainer}>
              <ThemedText style={styles.sectionTitle}>Kulüpler</ThemedText>
              <FlatList
                horizontal
                data={communities}
                renderItem={({ item }) => (
                  <CommunityLogoItem 
                    community={item} 
                    onPress={() => handleCommunityPress(item)}
                  />
                )}
                keyExtractor={(item) => item.id.toString()}
                style={styles.communityLogosContainer}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.communityLogosContent}
                snapToInterval={COMMUNITY_WIDTH}
                decelerationRate="fast"
                snapToAlignment="center"
              />
            </View>
          </>
        )}
        data={[]}
        renderItem={() => null}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  announcementList: {
    marginTop: 20,
    marginBottom: 10,
  },
  announcementContent: {
    paddingHorizontal: (width - ANNOUNCEMENT_WIDTH) / 2,
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    flexWrap: 'wrap', // Eğer çok fazla duyuru varsa, birden fazla satıra geçmesine izin ver
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#D3D3D3',
    marginHorizontal: 4,
    marginVertical: 4, // Çok fazla duyuru olduğunda satırlar arası boşluk için
  },
  paginationDotActive: {
    backgroundColor: '#8B0000',
  },
  clubsContainer: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 15,
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#8B0000',
    marginBottom: 15,
  },
  communityLogosContainer: {
    marginBottom: 10,
  },
  communityLogosContent: {
    paddingHorizontal: (width - COMMUNITY_WIDTH) / 2,
  },
});
