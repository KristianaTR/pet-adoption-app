import Footer from "@Components/organisms/Footer"
import Header from "@Components/organisms/Header"
import SectionLogIn from "@Components/organisms/SectionLogIn"
import PageTemplate from "@Components/templates/PageTemplate"

const LogInPage = () => {
  return (
    <PageTemplate>
      <Header/>
      <SectionLogIn/>
      <Footer/>
    </PageTemplate>
  )
}

export default LogInPage