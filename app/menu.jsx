import { StyleSheet, Appearance, Platform, SafeAreaView, ScrollView, FlatList, View, Text, Image, StatusBar } from "react-native";

import { Colors } from "@/constants/Colors";

import { MENU_ITEMS } from "@/constants/MenuItems";
import MENU_IMAGES from "@/constants/MenuImages";

export default function MenuScreen() {
    const colorScheme = Appearance.getColorScheme();

    const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;

    const styles = createStyles(theme, colorScheme);

    const Container = Platform.OS === 'web' ? ScrollView : SafeAreaView;

    return (
        <Container style={styles.container}>
            <FlatList
                data={MENU_ITEMS}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={{ marginBottom: 20 }}>
                        <Image
                            source={MENU_IMAGES[item.id - 1]}
                            style={{ width: 300, height: 300, marginBottom: 10, marginTop: 20, borderRadius: 10 }}
                        />
                        <View style={styles.header}>
                            <Text style={styles.text}>{item.title}</Text>
                        </View>
                        <Text style={styles.text}>{item.description}</Text>
                    </View>
                )}
            />
            <StatusBar style="auto" />
        </Container>
    );
}

function createStyles(theme, colorScheme) {
    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: theme.background,
            padding: 20,
        },
        text: {
            color: theme.text,
            fontSize: 16,
        },
        header: {
            backgroundColor: theme.HeaderBackground,
            color: theme.headerTintColor,
            ...theme.headerTitleStyle,
        },
    });
}