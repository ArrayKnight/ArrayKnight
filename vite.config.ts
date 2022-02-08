import path from 'path'
import { defineConfig } from 'vite'

const isExternal = (id: string) => !id.startsWith('.') && !path.isAbsolute(id)

export default defineConfig(() => ({
    build: {
        lib: {
            entry: path.resolve(__dirname, 'app/entry.client.ts'),
            formats: ['es'],
        },
        rollupOptions: {
            external: isExternal,
        },
    },
}))
