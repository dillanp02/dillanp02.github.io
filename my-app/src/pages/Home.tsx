import { MasonaryTile } from '../components/Containers/MasonaryTiles'
import { MasonaryContainer } from '../components/Containers/MasonryContainer'
import { TitleText } from '../components/Text/TitleText'
import {
    ABOUT_LINK,
    CONTAINCORP_BLOG_LINK,
    CONTAINCORP_LINK,
    SOCIAL_MEDIA_LINK,
    THEMES_LINK,
} from '../constants/url-links'
import { DefaultLink } from '../components/Navigation/DefaultLink'
import portrait from '../assets/self_portrait.jpg'
import themeImg from '../assets/theme.jpg'
import socialMediaImg from '../assets/social_media.jpg'
import blogImg from '../assets/blog.jpg'
import containcorpImg from '../assets/containcorpLogo.png'
import { TileBackgroundImage } from '../components/Images/TileBackgroundImage'
import { useState } from 'react'
import { DefaultContainer } from '../components/Containers/DefaultContainer'
import { BodyText } from '../components/Text/BodyText'
import PageTransition from './PageTransition'
import FlexContainer from '../components/Containers/FlexContainer'
import { FlexItemContainer } from '../components/Containers/FlexItemContainer'
import DefaultImage from '../components/Images/DefaultImage'
import hello_img from '../assets/hello.jpg'
import { useApplicationContext } from '../components/Context/AppContext'
import React from 'react'

export default function Home() {
    type TileType =
        | 'about'
        | 'theme'
        | 'social_media'
        | 'containcorp'
        | 'dev_blog'
        | ''

    const [showAboutPhoto, setShowAboutPhoto] = useState<TileType>()
    const { isMobile } = useApplicationContext()

    type TTileInfo = {
        tileKey: TileType
        title: string
        link: string
        bgImage: string
        width?: number
        height?: number
    }
    const tileInfoArray: TTileInfo[] = [
        {
            tileKey: 'about',
            title: 'About me',
            link: ABOUT_LINK,
            bgImage: portrait,
            height: 2,
        },
        {
            tileKey: 'theme',
            title: 'Themes',
            link: THEMES_LINK,
            bgImage: themeImg,
            width: 2,
        },
        {
            tileKey: 'dev_blog',
            title: 'Dev Blog',
            link: CONTAINCORP_BLOG_LINK,
            bgImage: blogImg,
        },
        {
            tileKey: 'social_media',
            title: 'Socials',
            link: SOCIAL_MEDIA_LINK,
            bgImage: socialMediaImg,
            width: 2,
            height: 2,
        },
        {
            tileKey: 'containcorp',
            title: 'Containcorp',
            link: CONTAINCORP_LINK,
            bgImage: containcorpImg,
            width: 3,
            height: 2,
        },
    ]

    return (
        <PageTransition $key="homepage">
            <FlexContainer>
                <FlexItemContainer $flex={isMobile ? 2 : 1}>
                    <TitleText>Welcome👋</TitleText>
                    <BodyText>
                        Hiya!! Welcome to my small corner of the internet!
                    </BodyText>
                    <br />
                    <BodyText>
                        While I highly recommend you view this web page on
                        desktop, every effort has been made to make everything
                        responsive so that you can find what you're looking for
                        that tiny bit easier!
                    </BodyText>
                    <br />
                    <BodyText>
                        Click the tiles below to explore - see you around!
                    </BodyText>
                </FlexItemContainer>
                <FlexItemContainer $flex={isMobile ? 1 : 2}>
                    <DefaultImage
                        src={hello_img}
                        attribute="Photo by Octavian Dan on Unsplash"
                        attributeLink="https://unsplash.com/@octadan?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
                    ></DefaultImage>
                </FlexItemContainer>
            </FlexContainer>

            <MasonaryContainer>
                {tileInfoArray.map(
                    (
                        { bgImage, link, tileKey, title, width, height },
                        index
                    ) => (
                        <MasonaryTile
                            onMouseEnter={() => setShowAboutPhoto(tileKey)}
                            onMouseLeave={() => setShowAboutPhoto('')}
                            key={index}
                            width={width}
                            height={height}
                        >
                            <DefaultLink to={link}>
                                {showAboutPhoto != tileKey && (
                                    <TitleText>{title}</TitleText>
                                )}

                                <TileBackgroundImage
                                    src={bgImage}
                                    show={showAboutPhoto == tileKey}
                                />
                            </DefaultLink>
                        </MasonaryTile>
                    )
                )}
            </MasonaryContainer>

            <DefaultContainer>
                <TitleText>You are here</TitleText>
                <BodyText>
                    There's roughly <strong>50 billion pages</strong> on the
                    Internet. If you're here, it's probably to see what I have
                    to show... or by a fortunate mistake...
                </BodyText>
                <br />
                <BodyText>
                    I want this to be a portfolio for my work, but also an
                    opportunity to learn. On this site, there'll be a lot of
                    "firsts" for me - creatively and visually - but more
                    importantly workflow wise using new tools and techniques.
                    Watch this space...
                </BodyText>
            </DefaultContainer>
        </PageTransition>
    )
}
