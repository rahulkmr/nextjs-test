import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import cowsay from 'cowsay-browser'

export default class extends React.Component {
    render() {
        return (
            <div>
                <Head>
                    <title>Next.js</title>
                    <meta
                        name="viewport"
                        content="initial-scale=1.0, width=device-width"
                    />
                </Head>
                <pre>{cowsay.say({text: 'Hi, there!'})}</pre>
                <div>
                    Click{' '}
                    <Link href="/about">
                        <a>here</a>
                    </Link>{' '}
                    to read more
                </div>
                <div>
                    Click{' '}
                    <Link prefetch href="/contact">
                        <a>here</a>
                    </Link>{' '}
                    to contact us
                </div>
            </div>
        )
    }
}
