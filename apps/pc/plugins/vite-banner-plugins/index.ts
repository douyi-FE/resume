export default function bannerPlugins(banner: string ) {
    return {
        name: 'vite-banner-plugins',
        enforce: 'post',
        apply: 'build',
        generateBundle(options, bundle, isWrite) {
            for (const file of Object.values(bundle)) {
                if ((file as any).type === 'chunk') {
                    (file as any).code = `/* ${banner} */\n` + (file as any).code;
                }
            }
        }
    }
}