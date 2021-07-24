import Layout from '../components/layout'
import Sidebar from '../components/sidebar'

export default function Index() {
  return (
    <section>
      <h2>Bem Vindo!!!</h2>
    </section>
  )
}

Index.getLayout = function getLayout(page) {
    return (
      <Layout>
        <Sidebar />
        {page}
      </Layout>
    )
  }