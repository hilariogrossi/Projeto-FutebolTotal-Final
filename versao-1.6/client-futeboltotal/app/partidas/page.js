'use client'

import Header from "../Header";
import React, { useState, useEffect } from 'react';
import axios from "axios";
import styles from './page.module.css';
import { validarToken } from "../Utils/validarToken";

export default function Partidas() {

    const [partidas, setPartidas] = useState([]);
    const [authInfo, setAuthInfo] = useState({ loggedIn: false, nome: '', email: ''});

    useEffect(() => {

        const fetchData = async () => {

            try {
                const response = await axios.get('http://api.futeboltotal.cloud/jogos');
                setPartidas(response.data);

            } catch (error) {
                console.error('Erro ao obetr dados do servidor:', error);

            }

        };

        const checkLoginStatus = async () => {

            const authResult = await validarToken();
            setAuthInfo(authResult);

            if (!authResult.loggedIn) {
                setTimeout(() => {
                    window.location.href = '/login';

                }, 6000);

            } else {
                fetchData();

            }

        };

        checkLoginStatus();

    }, []);


    const logout = function () {

        if (localStorage.getItem('token')) {
            localStorage.removeItem('token');
            localStorage.removeItem('email');
            localStorage.removeItem('nome');

        }

        setAuthInfo({ loggedIn: false, nome: '', email: '' });

    }

    if (!authInfo.loggedIn) {

        return (

            <div className={styles.loginContainer}>
                <p>Você não está logado.</p>
                <p>Redirecionando para a página de login...</p>

            </div>

        );

    }

    return (
        <>
            <Header />

            <div className={styles.container}>
                <ul>
                    {partidas
                        .slice()
                        .sort((a, b) => a.data_jogo.localeCompare(b.data_jogo))
                        .map(partida => {

                            const dataHoraJogo = new Date(partida.data_jogo);
                            dataHoraJogo.setHours(dataHoraJogo.getHours() + 3);

                            return (

                                    <li key={partida.id}>
                                        {partida.nome_time_casa} vs {partida.nome_time_visitante} <br />
                                        <span>Data do Jogo: </span> <span className={styles.style}> {dataHoraJogo.toLocaleString()} </span> <br />
                                        <span>Local do Jogo: </span> <span className={styles.style}> {partida.estadio_nome} </span> <br />
                                        <span>Árbitro: </span> <span className={styles.style}> {partida.arbitro} </span>

                                    </li>

                        )}
                        
                    )}

                </ul>
 
            </div>

        </>

    );

}
