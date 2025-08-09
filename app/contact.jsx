// import { Image } from 'expo-image';
import { StyleSheet } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
// import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

import { Colors } from "@/constants/Colors";

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      // headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerBackgroundColor={{ light: Colors.light.HeaderBackground, dark: Colors.dark.HeaderBackground }}
      headerImage={
        <IconSymbol
          size={310}
          // color="#808080"
          color={ Colors.light.tint }
          name="person.fill"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Contact</ThemedText>
      </ThemedView>
      <Collapsible title="Address">
        <ThemedText>
          123 Chocolate Lane, Sweet City, CA 90210
        </ThemedText>
      </Collapsible>
      <Collapsible title="Phone">
        <ThemedText>
          <ThemedText type="defaultSemiBold">+1 (555) 123-4567</ThemedText>
        </ThemedText>
      </Collapsible>
      <Collapsible title="Hours">
        <ThemedText>
          Monday to Friday: 9 AM - 5 PM
          {'\n'}
          Saturday: 10 AM - 4 PM
          {'\n'}
          Sunday: Closed
        </ThemedText>
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    // color: '#808080',
    color: Colors.light.tint,
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
