import { defineConfig, presetIcons, presetUno, presetAttributify, transformerDirectives, transformerVariantGroup  } from 'unocss'

export default defineConfig({
    presets: [
        presetUno(),
        presetIcons({
            extraProperties: {
                'display': 'inline-block',
                'vertical-align': 'middle'
            }
        }),
        presetAttributify()
    ],
    transformers: [
        transformerVariantGroup(),
        transformerDirectives()
    ]
})