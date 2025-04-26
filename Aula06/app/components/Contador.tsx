import React from "react";
import { Text, Button, View, StyleSheet } from 'react-native';
import { red } from "react-native-reanimated/lib/typescript/Colors";

export default class Contador extends React.Component {
    constructor() {
        super();
        this.state = {
            contador: 0,
        };
    }
    Decrementar() {
        this.setState({
            contador: this.state.contador - 1
        });
    }
    Incrementar() {
        this.setState({
            contador: this.state.contador + 1
        });
    }
    Reset() {
        this.setState({
            contador:this.state.contador = 2
        })
    }
    render() {
        return (
            <View>
                <View style={styles.texto}>
                <Text>{this.state.contador}</Text>
                </View>
            <View style={styles.botoes}>
                <Button
                  style={styles.botao1}
                  title="Aumenta"
                  onPress={this.Incrementar.bind(this)}
                />
                <Button
                  style={styles.botao2}
                  title="Reseta"
                  onPress={this.Incrementar.bind(this)}
                />
                <Button
                  style={styles.botao3}
                  onPress={this.Decrementar.bind(this)}
                  title="Diminui"
                />
            </View>
        </View>       
        ); } }
        const styles = StyleSheet.create({
            botoes: {
                display: 'flex',
                flexDirection: 'column',
                alignSelf: 'center',
                top: 220,
                height: 80,
                justifyContent: 'center',
            },
            texto: {
                alignItems: 'center',
                top: 200,
            },
        });