import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';

let deviceWidth = Dimensions.get('window').width

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.comentario}>
                Que saber como empreender e torna o seu negócio melhor? confira as nossas dicas nas redes socias!
            </Text>
            <View style={styles.btn}>
                <TouchableOpacity style={styles.btn1} title="instagram" onPress={() => navigation.navigate('Instagram')} >
                    <Text style={styles.customBtnText}>Instagram</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.btn}>
                <TouchableOpacity style={styles.btn1} title="facebook" onPress={() => navigation.navigate('Facebook')} >
                    <Text style={styles.customBtnText}>Facebook</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.btn}>
                <TouchableOpacity style={styles.btn1} title="linkedin" onPress={() => navigation.navigate('Linkedin')} >
                    <Text style={styles.customBtnText}>Linkedin</Text>
                </TouchableOpacity>
            </View>
            <Text style={{textAlign: 'center', marginTop: 90}}>By Alef Santos</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    comentario: {
        textAlign: 'center',
        height: 150,
        alignItems: "center",
        color: '#444',
        fontSize: 20,
        textAlignVertical: 'center'
    },
    btn: {
        height: 64,
        width: deviceWidth,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'azure',
        marginTop: 15,
    },
    btn1: {
        backgroundColor: "#007aff",
        borderRadius: 5,
        height: 64,
        width: deviceWidth,
    },
    customBtnText: {
        textAlign: 'center',
        textAlignVertical: 'center',
        marginTop: 20
    }
});