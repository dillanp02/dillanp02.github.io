import styled from 'styled-components'
import React from 'react'
import { motion } from 'framer-motion'

const AttributionText = styled.a`
    position: absolute;
    bottom: 0;
    left: 0;
    color: ${({ theme }) => theme.colors.text};
    z-index: 5;
    padding: 10px;
    transition: all 1s ease;
    background-color: rgba(
        ${({ theme }) => getRGB(theme.colors.background)},
        0.2
    );

    &:hover {
        background-color: ${({ theme }) => theme.colors.border};
    }
`

function getRGB(hex: string) {
    // Convert hex to RGB
    const bigint = parseInt(hex.slice(1), 16)
    const r = (bigint >> 16) & 255
    const g = (bigint >> 8) & 255
    const b = bigint & 255
    return `${r}, ${g}, ${b}`
}

export const StyledDefaultImage = styled(motion.img)`
    min-width: 100%;
    max-height: 100%;
    position: absolute;
    inset: 0;
    margin: auto;
    z-index: 1;
    border-radius: 10px;
    object-fit: cover;
    filter: brightness(${({ theme }) => theme.colors.image_darkness_factor});
`

type DefaultImageProps = {
    src: string | undefined
    attribute?: string
    attributeLink?: string
}

export default function DefaultImage({
    src,
    attribute,
    attributeLink,
}: DefaultImageProps) {
    return (
        <>
            <StyledDefaultImage src={src} />
            {attribute && (
                <AttributionText href={attributeLink}>
                    {attribute}
                </AttributionText>
            )}
        </>
    )
}
