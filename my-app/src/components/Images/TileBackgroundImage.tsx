import React, { useEffect, useState } from 'react'
import { StyledDefaultImage } from './DefaultImage'
import styled from 'styled-components'
import { AnimatePresence } from 'framer-motion'

const TileImage = styled(StyledDefaultImage)`
    height: 100%;
`

type ImageProps = {
    src: string
    show: boolean
}

export function TileBackgroundImage({ src, show }: ImageProps) {
    const [img, setImg] = useState<string>()

    const reloadGif = () => {
        show && setImg(`${src}?reload=${Date.now()}`)
    }

    useEffect(() => {
        if (show) {
            reloadGif()
        }
    }, [show])

    return (
        <AnimatePresence>
            {show && (
                <TileImage
                    key={src}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    src={img}
                />
            )}
        </AnimatePresence>
    )
}
