import React from 'react';
import { Text, TextProps, useColorScheme } from 'react-native';

interface ThemedTextProps extends TextProps {
  type?: 'title' | 'subtitle' | 'body';
}

export function ThemedText({ style, type = 'body', ...props }: ThemedTextProps) {
  const colorScheme = useColorScheme();
  const color = colorScheme === 'dark' ? '#FFFFFF' : '#000000';

  const baseStyle = {
    color,
    fontSize: type === 'title' ? 24 : type === 'subtitle' ? 18 : 16,
    fontWeight: type === 'title' ? 'bold' : type === 'subtitle' ? '600' : 'normal',
  };

  return <Text style={[baseStyle, style]} {...props} />;
}