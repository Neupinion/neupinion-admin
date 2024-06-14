import styled from 'styled-components'

interface LinkProps {
  label: string
  href: string
}

const Link = ({ label, href }: LinkProps) => {
  return <LinkStyle href={href}>{label}</LinkStyle>
}

export default Link

const LinkStyle = styled.a`
  width: fit-content;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.purple};
  word-wrap: break-word;
  overflow-wrap: break-word;
  white-space: normal;
`
