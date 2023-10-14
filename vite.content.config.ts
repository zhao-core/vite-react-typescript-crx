import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc';
import path from 'path'
import { CRX_CONTENT_OUT_DIR } from './globalConfig'

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        // 输出目录
        outDir: CRX_CONTENT_OUT_DIR,
        lib: {
            entry: [
                path.resolve(__dirname, 'src/content/index.tsx'),
            ],
            // content script不支持ES6，因此不用使用es模式，需要改为cjs模式
            formats: ['cjs'],
            // 设置生成文件的文件名
            fileName: () => {
                // 将文件后缀名强制定为js，否则会生成cjs的后缀名
                return 'content.js'
            }
        },
        rollupOptions: {
            output: {
                assetFileNames: () => {
                    // 附属文件命名，content script会生成配套的css
                    return 'content.css'
                },
            },
        },
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
    // 解决react代码中包含process.env.NODE_ENV导致无法使用的问题
    define: {
        'process.env.NODE_ENV': null
    },
    plugins: [react()],
})