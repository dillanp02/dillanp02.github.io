import { useState } from 'react'
import { MasonaryContainer } from '../components/Containers/MasonryContainer'
import { MasonaryTile } from '../components/Containers/MasonaryTiles'
import { TitleText } from '../components/Text/TitleText'
import { TileBackgroundImage } from '../components/Images/TileBackgroundImage'

import spotify_img from '../assets/spotify-premium.gif'
import twitter_img from '../assets/x-twitter.gif'
import youtube_img from '../assets/youtube.gif'
import white_img from '../assets/white.png'
import snapchat_img from '../assets/snapchat-logo.gif'
import discord_img from '../assets/discord-logo.gif'
import discord_blue from '../assets/discord-frame.png'
import black_img from '../assets/black.png'
import instagram_img from '../assets/instagram.gif'
import bereal_img from '../assets/BeReal.gif'
import letterboxd_img from '../assets/letterboxd.png'
import linkedin_img from '../assets/linkedin.gif'
import reddit_img from '../assets/reddit.gif'
import twitch_img from '../assets/twitch.gif'
import twitch_frame from '../assets/twitch-frame.png'
import { LinkWrapper } from '../components/Navigation/LinkWrapper'
import PageTransition from './PageTransition'
import React from 'react'

export default function SocialMedia() {
    type TileType =
        | 'spotify'
        | 'twitter'
        | 'discord'
        | 'youtube'
        | 'snapchat'
        | 'insta'
        | 'bereal'
        | 'letterboxd'
        | 'linkedin'
        | 'reddit'
        | 'twitch'
        | ''

    const [currentPhoto, setCurrentPhoto] = useState<TileType>()

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
            tileKey: 'twitter',
            title: 'Twitter',
            link: 'https://twitter.com/Dillanp02',
            bgImage: twitter_img,
        },
        {
            tileKey: 'spotify',
            title: 'Spotify',
            link: 'https://open.spotify.com/user/vxgobr5jc5716irxzok7jrsbg',
            bgImage: spotify_img,
            width: 3,
            height: 2,
        },
        {
            tileKey: 'snapchat',
            title: 'Snapchat',
            link: 'https://www.snapchat.com/add/dillanp2002?share_id=0PXgnfbYsds&locale=en-GB',
            bgImage: snapchat_img,
        },
        {
            tileKey: 'discord',
            title: 'Discord',
            link: 'https://discord.gg/jrWyF5yN8Z',
            bgImage: discord_img,
        },
        {
            tileKey: 'youtube',
            title: 'Youtube',
            link: 'https://www.youtube.com/channel/UCGfFQhTL2rniAsImnQNt09A',
            bgImage: youtube_img,
            width: 2,
        },
        {
            tileKey: 'letterboxd',
            title: 'Letterboxd',
            link: 'https://letterboxd.com/dillanp02/',
            bgImage: letterboxd_img,
            height: 2,
        },
        {
            tileKey: 'bereal',
            title: 'Bereal',
            link: 'https://bere.al/dillanp02',
            bgImage: bereal_img,
        },
        {
            tileKey: 'insta',
            title: 'Instagram',
            link: 'https://www.instagram.com/dillanp02/',
            bgImage: instagram_img,
            width: 2,
        },
        {
            tileKey: 'reddit',
            title: 'Reddit',
            link: 'https://www.reddit.com/user/dillanp02',
            bgImage: reddit_img,
        },
        {
            tileKey: 'twitch',
            title: 'Twitch',
            link: 'https://www.twitch.tv/dillanp02',
            bgImage: twitch_img,
        },
        {
            tileKey: 'linkedin',
            title: 'LinkedIn',
            link: 'https://www.linkedin.com/in/dillanp02/',
            bgImage: linkedin_img,
            width: 3,
        },
    ]

    const reloadGif = (tileKey: TileType) => {
        setCurrentPhoto('')
        setTimeout(() => {
            setCurrentPhoto(tileKey)
        }, 0)
    }

    return (
        <PageTransition $key="sm">
            <MasonaryContainer>
                {tileInfoArray.map(
                    (
                        { bgImage, link, tileKey, title, width, height },
                        index
                    ) => (
                        <MasonaryTile
                            onMouseEnter={() => reloadGif(tileKey)}
                            onMouseLeave={() => setCurrentPhoto('')}
                            key={index}
                            width={width}
                            height={height}
                        >
                            <LinkWrapper href={link}>
                                {currentPhoto != tileKey && (
                                    <TitleText>{title}</TitleText>
                                )}
                                <TileBackgroundImage
                                    src={bgImage}
                                    show={currentPhoto == tileKey}
                                />
                            </LinkWrapper>
                        </MasonaryTile>
                    )
                )}
            </MasonaryContainer>
        </PageTransition>
    )
}
