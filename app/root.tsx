import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
} from 'remix'
import type { MetaFunction } from 'remix'

import { IS_DEV, IS_SERVER, STYLES_PLACEHOLDER } from '~/common'

export const meta: MetaFunction = () => {
    return { title: 'New Remix App' }
}

export default function App() {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width,initial-scale=1"
                />
                <Meta />
                <Links />
                {IS_SERVER ? STYLES_PLACEHOLDER : null}
            </head>
            <body>
                <Outlet />
                <ScrollRestoration />
                <Scripts />
                {IS_DEV && <LiveReload />}
            </body>
        </html>
    )
}
