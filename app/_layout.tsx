// import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
// import 'react-native-reanimated';
import { Appearance } from 'react-native';

// import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';

export default function RootLayout() {
  // const colorScheme = useColorScheme();
  const colorScheme = Appearance.getColorScheme() ;
  const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;

  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    // <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
    //   <Stack>
    //     {/* <Stack.Screen name="(tabs)" options={{ headerShown: false }} /> */}
    //     {/* <Stack.Screen name="(chocolate)" options={{ 
    //       headerShown: false 
    //       }} /> */}
    //     {/* <Stack.Screen name="index" options={{ 
    //       headerShown: false,
    //       title: 'Home', 
    //       }} />
    //     <Stack.Screen name="contact" options={{ 
    //       title: 'Contact', 
    //       }} /> */}
    //     <Stack.Screen name="+not-found" />
    //   </Stack>
    //   <StatusBar style="auto" />
    // </ThemeProvider>
    <Stack screenOptions={{
      headerShown: false,
      contentStyle: { backgroundColor: theme.background },
      headerStyle: { backgroundColor: theme.HeaderBackground },
      headerTintColor: theme.headerTintColor,
      headerTitleStyle: theme.headerTitleStyle,
      headerShadowVisible: false,
    }}>
      <Stack.Screen name="index" options={{ headerShown: false, title: 'Home', }} />
      <Stack.Screen name="menu" options={{ headerShown: true, title: 'Menu', }} />
      <Stack.Screen name="contact" options={{ headerShown: true, title: 'Contact', }} />
      <Stack.Screen name="+not-found" options={{ headerShown: false }} />
      <StatusBar style="auto" />
    </Stack>
  );
}
