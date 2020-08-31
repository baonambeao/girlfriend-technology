import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Footer from '../components/footer'

const cx = {
  main: 'mw8 center',
  content: 'measure pa3',
  boxes: 'tl dib'
}

const theme = {
  light: '#fff',
  dark: '#333'
}

const Projects = () => (
  <Layout
    title='girlfriend technology ~ privacy policy'
    className={cx.main}
    {...theme}
  >
    <Nav />
    <div className={cx.content}>
      <h2>Privacy Policy</h2>
      <p>
        <strong>
          Last updated: Aug 29, 2020
        </strong>
      </p>
      <p>
        This policy applies to all apps and websites provided by <em>girlfriend technology</em> for any platform.
      </p>
      <p>
        Privacy is very important and that is why there is zero data collection in anything provided by <em>girlfriend technology</em>.
      </p>
      <h3>
        Your concent
      </h3>
      <p>
        By using websites and apps by <em>girlfriend technology</em> you concent to privacy policy. …About how girlfriend.technology collects nothing. (isn't that weird?)
      </p>
    </div>
    <Footer />
  </Layout>
)

export default Projects
