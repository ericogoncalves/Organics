import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import Texto from '../../../componentes/Texto';



export default function Detalhes({nome, logoFazenda, nomeFazenda, descricao, preco}){
    return <>
    <Texto style={estilos.nome}>{nome}</Texto>
    <View style={estilos.fazenda}>
    <Image source={logoFazenda} style={estilos.imagemFazenda} />
    <Texto sttyle={estilos.nomeFazenda}>{nomeFazenda}</Texto>
    </View>
    <Texto style={estilos.descricao}>{descricao}</Texto>
<   Texto style={estilos.preco}>{preco}</Texto> 
    
    </>
}

const estilos = StyleSheet.create({
    nome: {
        color: "#464646",
        fonteSize: 26,
        lineHeight: 42,
        fontWeight: 'bold',
    },
    fazenda:{
        flexDirection: "row",
        paddingVertical: 12,
    },
    imagemFazenda:{
        widht: 32,
        heigth: 32,
        marginLeft: 12
    },
    nomeFazenda:{
        fonteSize: 16,
        lineHeight: 16,
    },
    descricao:{
        color: "#A3A3A3",
        fonteSize: 16,
        lineHeight: 26
    },
    preco:{
        color: "#2A9F85",
        fontWeight: "bold",
        fonteSize: 26,
        lineHeight: 42,
        marginTop: 8,
    }
})