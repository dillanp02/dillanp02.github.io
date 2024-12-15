import styled from 'styled-components'
import { MOBILE_RESPONSIVE_SIZE } from '../../constants/css-constants'

type MasonaryTileProps = { height?: number; width?: number }

export const MasonaryTile = styled.span<MasonaryTileProps>`
    border: solid 3px ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.border};
    margin: 10px;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    min-height: 150px;
    overflow: hidden;
    transition: all 1s ease-in-out;

    &:hover {
        transform: translateY(-8px);
        scale: 1.05;
        border-radius: 10px;
    }

    @media screen and (max-width: ${MOBILE_RESPONSIVE_SIZE}) {
        min-height: 100px;
        min-width: 150px;
        flex: 1;
    }

    grid-column: span ${({ width }) => width ?? 1};
    grid-row: span ${({ height }) => height ?? 1};
`
