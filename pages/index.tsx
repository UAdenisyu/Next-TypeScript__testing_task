// import type { NextPage } from 'next'
// import Head from 'next/head'
// import React from 'react'
// import Link from 'next/link'


import Header from '../components/header/header';
import DoTheTask from '../components/do-the-task/do-the-task';


const MainPage = () => {
    return(
        <>
            <Header text="Test task"/>
            <DoTheTask title1="Do The Task And Have Fun" title2="Be Persistent & Attentive To Details"/>
        </>
    )
}

export default MainPage
