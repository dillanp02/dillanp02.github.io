import { motion } from 'framer-motion'
import styled, { useTheme } from 'styled-components'
import React from 'react'

interface ThemeButtonProp {
    bgcolor?: string
    bordercolor?: string
    themename?: string
}

export const ThemeButton = styled(motion.button)<ThemeButtonProp>`
    font-size: 0.5rem;
    background-color: ${({ bgcolor }) => bgcolor};
    border-radius: 5px;
    width: 20px;
    height: 20px;
    cursor: pointer;
    border: none;
    &:hover {
        scale: 1.1;
    }
`

const StyledLargerThemeButton = styled(ThemeButton)<ThemeButtonProp>`
    width: 45px;
    height: 45px;
`

interface Props extends ThemeButtonProp {
    onClick?: () => void
}

export function LargerThemeButton({
    onClick,
    themename,
    bgcolor,
    bordercolor,
}: Props) {
    const theme = useTheme()
    const transitionSpeed = 0.3
    return (
        <StyledLargerThemeButton
            animate={
                themename === theme.name
                    ? {
                          rotate: 90,
                          scale: 0.8,
                          transition: {
                              rotate: { duration: transitionSpeed },
                              scale: {
                                  duration: transitionSpeed,
                                  delay: transitionSpeed,
                              },
                          },
                      }
                    : {
                          rotate: 0,
                          scale: 1.0,
                          transition: {
                              rotate: {
                                  duration: transitionSpeed,
                                  delay: transitionSpeed,
                              },
                              scale: {
                                  duration: transitionSpeed * 2,
                                  delay: transitionSpeed * 2,
                              },
                          },
                      }
            }
            onClick={onClick}
            bgcolor={bgcolor}
            bordercolor={bordercolor}
        />
    )
}
