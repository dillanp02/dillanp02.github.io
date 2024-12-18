import { FadeInOnViewContainer } from '../components/Containers/FadeInOnViewContainer'
import FlexContainer from '../components/Containers/FlexContainer'
import { BodyText } from '../components/Text/BodyText'
import { TitleText } from '../components/Text/TitleText'
import PageTransition from './PageTransition'
import colour_img from '../assets/theme.jpg'
import DefaultImage from '../components/Images/DefaultImage'
import { FlexItemContainer } from '../components/Containers/FlexItemContainer'
import choice_img from '../assets/choice.jpg'
import { LargerThemeButton } from '../components/Buttons/ThemeSwitchingButtons'
import { useApplicationContext } from '../components/Context/AppContext'
import { THEME_LIST } from '../constants/global-constants'
import { useTheme } from 'styled-components'
import { ThemeContainer } from '../components/Containers/ThemeContainer'
import React from 'react'

import nightGif from '../assets/night.gif'
import forestGif from '../assets/forest.gif'
import { AnimatePresence } from 'framer-motion'
import { ThemeImage } from '../components/Images/ThemeImage'

export default function Themes() {
    const { isMobile, updateTheme } = useApplicationContext()
    const theme = useTheme()
    return (
        <PageTransition $key="themepage">
            <FlexContainer>
                <FlexItemContainer $flex={isMobile ? 2 : 1}>
                    <TitleText>Themes</TitleText>
                    <BodyText>
                        Designed from the ground up in mind, themes are
                        integrated heavily into this site.
                    </BodyText>
                    <br />
                    <BodyText>
                        Click around, and hopefully you'll find one you like.
                        It's that easy.
                    </BodyText>
                </FlexItemContainer>

                <FlexItemContainer $flex={isMobile ? 1 : 2}>
                    <DefaultImage src={colour_img} />
                </FlexItemContainer>
            </FlexContainer>

            <FlexContainer>
                <FlexItemContainer $flex={isMobile ? 1 : 2}>
                    <DefaultImage
                        src={choice_img}
                        attribute="Image by macrovector"
                        attributeLink="https://www.freepik.com/free-vector/ui-ux-designers-isometric-composition-with-small-people-creating-custom-design-web-site-3d-vector-illustration_26760925.htm"
                    />
                </FlexItemContainer>

                <FlexItemContainer $flex={isMobile ? 2 : 1}>
                    <TitleText>Customisable</TitleText>
                    <BodyText>Everyone likes customisability.</BodyText>
                    <br />
                    <BodyText>
                        {' '}
                        It gives you that personal feeling that everything is
                        the way you want it.
                    </BodyText>
                    <br />
                    <BodyText>
                        Ranging from the background, text and border colours, to
                        the image brightness on each theme, everything has been
                        designed with colour themes in mind.
                    </BodyText>
                </FlexItemContainer>
            </FlexContainer>

            <FlexContainer>
                <FlexItemContainer>
                    <TitleText>Give it a go!</TitleText>
                    <ThemeContainer>
                        {THEME_LIST.map((_theme, index) => {
                            return (
                                <FadeInOnViewContainer
                                    key={index}
                                    $delay={
                                        // change the order that the list is delayed in depending
                                        // on if in column or row layout
                                        !isMobile
                                            ? (THEME_LIST.length - index) * 0.2
                                            : index * 0.2
                                    }
                                    travelDistance="-10vw"
                                >
                                    <LargerThemeButton
                                        themename={_theme.name}
                                        onClick={() => updateTheme(_theme)}
                                        bgcolor={_theme.colors.background}
                                        bordercolor={_theme.colors.border}
                                    ></LargerThemeButton>
                                </FadeInOnViewContainer>
                            )
                        })}
                    </ThemeContainer>
                </FlexItemContainer>
                <FlexItemContainer $flex={1}>
                    <TitleText>{theme.name}</TitleText>
                    <AnimatePresence mode="wait">
                        {theme.name === 'Dark' && (
                            <ThemeImage
                                key="dark"
                                src={nightGif}
                                attribute="Night gif by xiaokeng on DribbbleNight"
                                attributeLink="https://dribbble.com/shots/3030413-Night-gif"
                            />
                        )}
                        {theme.name === 'Green' && (
                            <ThemeImage
                                key="green"
                                src={forestGif}
                                attribute="Ghibli Totoro GIF"
                                attributeLink="https://tenor.com/en-GB/view/ghibli-totoro-forest-trees-calm-gif-5777465"
                            />
                        )}
                    </AnimatePresence>
                </FlexItemContainer>
            </FlexContainer>
        </PageTransition>
    )
}
