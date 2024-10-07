import React from 'react';
import { View, ViewProps, useColorScheme } from 'react-native';

export function ThemedView({ style, ...props }: ViewProps) {
  const colorScheme = useColorScheme();
  const backgroundColor = colorScheme === 'dark' ? '#1C1C1E' : '#FFFFFF';

  return <View style={[{ backgroundColor }, style]} {...props} />;
}