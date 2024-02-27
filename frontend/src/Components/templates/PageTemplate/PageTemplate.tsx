import { StyledPageTemplate } from './PageTemplate.style'
import { PageProps } from './PageTemplate.types'

const PageTemplate = ({children}: PageProps) => {
  return (
    <StyledPageTemplate>{children}</StyledPageTemplate>
  )
}

export default PageTemplate