import React from 'react';
import {Image, StyleSheet, Dimensions} from 'react-native';
import topo from '../../../../assets/topo.png';
import Texto from '../../../componentes/Texto'

const width = Dimensions.get('screen').width;


export default function Topo({titulo}){
    return <> 
    <Image source = {topo} style={estilos.topo} />
    <Texto style={estilos.titulo}>{titulo}</Texto>
    </>
}

const estilos = StyleSheet.create({
    topo: {
        wight: "100%",
        heigth: 578 / 768 * width,
        fontFamily: "MontserratBold",
    },
    titulo: {
        width: "100%",
        position: "absolute",
        textAlign: "center",
        fonteSize: 16,
        lineHeight: 26,
        color: "white",
        fontWeight: "bold",
        padding:16
    },
})