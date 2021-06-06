import { DokzProvider, GithubLink, ColorModeSwitch } from 'dokz'
import React, { Fragment } from 'react'
import Head from 'next/head'
import { ChakraProvider } from '@chakra-ui/react'

export default function App(props) {
    const { Component, pageProps } = props
    return (
        <ChakraProvider resetCSS>
            <Head>
                <link
                    href='https://fonts.googleapis.com/css?family=Fira+Code'
                    rel='stylesheet'
                    key='google-font-Fira'
                />
            </Head>
            <DokzProvider
                headerItems={[
                    <GithubLink
                        key='0'
                        url='https://github.com/andrewjamesford/react-andrewford-co-nz'
                    />,
                    <ColorModeSwitch key='1' />,
                ]}
                sidebarOrdering={{
                    'index.mdx': true,
                    Documents_Group: {
                        'another.mdx': true,
                    },
                }}
                headerLogo={
                    <img
                        src='/reactjs-notes.svg'
                        style={{ opacity: 0.8 }}
                        width='300px'
                    />
                }
            >
                <Component {...pageProps} />
            </DokzProvider>
        </ChakraProvider>
    )
}
