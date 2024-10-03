import React from 'react';
import { StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';

// Define the props type for the YouTubePlayer component
interface YouTubePlayerProps {
  videoId: string; // The YouTube video ID
}

const YouTubePlayer: React.FC<YouTubePlayerProps> = ({ videoId }) => {
  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1` }} // Embed YouTube video using videoId
        style={styles.webview}
        allowsFullscreenVideo={true} // Enable fullscreen support
        
      />
    </View>
  );
};

// Define styles
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 300, // You can customize the height as needed
  },
  webview: {
    flex: 1,
  },
});

export default YouTubePlayer;