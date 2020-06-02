import { DokzProvider, GithubLink, ColorModeSwitch } from 'dokz/dist'
import React from 'react'

export default function App(props) {
    const { Component, pageProps } = props
    return (
        <DokzProvider
            headerItems={[
                <GithubLink key='0' url='https://github.com/remorses/dokz' />,
                <ColorModeSwitch key='1' />,
            ]}
            headerLogo={
                <img
                    src='/learning-reactjs.svg'
                    style={{ opacity: 0.8 }}
                    width='300px'
                />
            }
            initialColorMode='dark'
            
        >
            <Component {...pageProps} />
        </DokzProvider>
    )
}
