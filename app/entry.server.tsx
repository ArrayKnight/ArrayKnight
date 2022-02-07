import { renderToString } from 'react-dom/server'
import { RemixServer } from 'remix'
import type { EntryContext } from 'remix'
import { ServerStyleSheet } from 'styled-components'

import { STYLES_PLACEHOLDER } from '~/common'

export default function handleRequest(
    request: Request,
    responseStatusCode: number,
    responseHeaders: Headers,
    remixContext: EntryContext,
) {
    const sheet = new ServerStyleSheet()
    const markup = renderToString(
        sheet.collectStyles(
            <RemixServer context={remixContext} url={request.url} />,
        ),
    )
    const styles = sheet.getStyleTags()

    responseHeaders.set('Content-Type', 'text/html')

    return new Response(
        '<!DOCTYPE html>' + markup.replace(STYLES_PLACEHOLDER, styles),
        {
            status: responseStatusCode,
            headers: responseHeaders,
        },
    )
}
