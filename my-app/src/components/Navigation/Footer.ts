import styled from 'styled-components'

export const Footer = styled.footer`
    background-color: ${({ theme }) => theme.colors.border};
    border-top: 3px solid ${({ theme }) => theme.colors.text};

    position: absolute;
    bottom: 0;
    width: 100%;
    height: 50px;
`
