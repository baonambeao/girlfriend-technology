import Logo from '../public/static/mask-icon.svg'
import Link from 'next/link'

const cx = {
  footer: 'left-0 right-0 absolute w-100 fw3 pv5 tc i',
  copyright: 'i',
  a: 'mh2 no-underline underline-hover',
  logo: 'v-mid dib mh1 stroke-current',
  links: 'mv2'
}

const Nav = () => (
  <footer className={cx.footer}>

    <div className={cx.links}>
      <Link
        href='/privacy'
        as='/privacy'
      >
        <a
          title='privacy policy'
        >
          your privacy is important
        </a>
      </Link>
    </div>
    <p className={cx.copyright}>
      © girlfriend technology {new Date().getFullYear()}
    </p>
    <a
      href='https://melaniekat.com'
      title='with love from melanie kat'
      className={cx.a}
    >
      with
      <Logo
        className={cx.logo}
        width='1.5rem'
      />
      from melanie kat
    </a>
  </footer>
)

export default Nav
