import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import store from '../redux/store'
import MasterLayout from '../components/masterLayout'

function MyApp({ Component, pageProps }: AppProps) {

  const Layout = Component.Layout || EmptyLayout;
  return <Provider store={store}>
          <MasterLayout>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </MasterLayout>
        </Provider>
}

const EmptyLayout = ({ children }) => <>{ children }</>

export default MyApp