import { StyleSheet, Appearance, Platform, SafeAreaView, ScrollView, FlatList, View, Text, Image, StatusBar } from "react-native";

import { Colors } from "@/constants/Colors";

import { MENU_ITEMS } from "@/constants/MenuItems";
import MENU_IMAGES from "@/constants/MenuImages";

export default function MenuScreen() {
    const colorScheme = Appearance.getColorScheme();

    const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;

    const styles = createStyles(theme, colorScheme);

    const Container = Platform.OS === 'web' ? ScrollView : SafeAreaView;

    const separatorComp = () => <View style={styles.separator} />;

    // const headerComp = <Text style={styles.title}>Top of List</Text>;
    // const footerComp = <Text style={styles.title}>End of List</Text>;
    const emptyComp = () => (
        <View style={{ padding: 20, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={styles.text}>No items available</Text>
        </View>
    );

    return (
        <Container style={styles.container}>
            <FlatList
                data={MENU_ITEMS}
                keyExtractor={(item) => item.id.toString()}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={ styles.contentContainer }
                ItemSeparatorComponent={separatorComp}
                ListEmptyComponent={emptyComp}
                // ListHeaderComponent={headerComp}
                // ListHeaderComponentStyle={styles.headerComp}
                // ListFooterComponent={footerComp}
                // ListFooterComponentStyle={styles.footerComp}
                // columnWrapperStyle={{ justifyContent: 'center' }}
                renderItem={({ item }) => (
                    <View style={styles.row}>
                        <Image
                            source={MENU_IMAGES[item.id - 1]}
                            style={styles.menuImage}
                        />
                        <View style={styles.menuTextRow}>
                            <Text style={styles.menuTitle}>{item.title}</Text>
                            <Text style={styles.menuText}>{item.description}</Text>
                        </View>
                    </View>
                )}
            />
            <StatusBar style="auto" />
        </Container>
    );
}

function createStyles(theme, colorScheme) {
    return StyleSheet.create({

        // container styles
        contentContainer: {
            paddingTop: 10,
            paddingBottom: 20,
            paddingHorizontal: 20,
            backgroundColor: theme.background,
            alignItems: 'center',
            justifyContent: 'center',
            flexGrow: 1,
        },
        separator: {
            height: 1,
            width: '10%',
            maxWidth: 300,
            marginHorizontal: 'auto',
            marginVertical: 10,
            marginBottom: 20,
            alignSelf: 'center',
            backgroundColor: theme.tint,
        },
        container: {
            flex: 1,
            backgroundColor: theme.background,
            padding: 20,
        },

        // header & footer styles
        header: {
            backgroundColor: theme.HeaderBackground,
            color: theme.headerTintColor,
            ...theme.headerTitleStyle,
        },
        headerComp: {
            padding: 20,
            backgroundColor: theme.HeaderBackground,
            alignItems: 'center',
            justifyContent: 'center',
            marginHorizontal: 'auto',
        },
        headerText: {
            color: theme.headerTintColor,
            fontSize: 20,
            ...theme.headerTitleStyle,
        },
        footerComp: {
            padding: 20,
            backgroundColor: theme.background,
            alignItems: 'center',
            justifyContent: 'center',
            marginHorizontal: 'auto',
        },
        footerText: {
            color: theme.text,
            fontSize: 16,
        },

        // menu item styles
        row: {
            flexDirection: 'column',
            width: '90%',
            // maxWidth: 600,
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 10,
            paddingHorizontal: 10,
            paddingVertical: 5,
            borderRadius: 10,
            borderStyle: 'solid',
            borderWidth: 1,
            borderColor: colorScheme === 'dark' ? theme.icon : theme.tint,
            overflow: 'hidden',
        },
        menuTextRow: {
            // width: '100%',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 10,
            paddingHorizontal: 10,
            paddingVertical: 5,
            borderRadius: 10,
            flexGrow: 1,
        },
        menuTitle: {
            fontSize: 24,
            fontWeight: 'bold',
            color: theme.tint,
            textAlign: 'center',
            marginBottom: 10,
            paddingHorizontal: 10,
            paddingVertical: 5,
            borderRadius: 10,
            letterSpacing: 1,
            textTransform: 'uppercase',
            // backgroundColor: theme.HeaderBackground,
            // overflow: 'hidden',
            // shadowColor: theme.text,
            // shadowOffset: { width: 0, height: 1 },
            // shadowOpacity: 0.05,
            // shadowRadius: 1,
            // elevation: 1,
            // textShadowColor: theme.text,
            // textShadowOffset: { width: 0, height: 1 },
            // textShadowRadius: 1,
        },
        menuText: {
            color: theme.text,
            fontSize: 16,
            textAlign: 'center',
            marginBottom: 10,
        },
        menuImage: {
            width: 300,
            height: 300,
            marginTop: 10,
            marginBottom: 10,
            borderRadius: 10,
            alignSelf: 'center',
        },
    });
}