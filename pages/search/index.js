import { Fragment } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

import Header from '../../components/Header'
import Results from '../../components/Results'
import Pagination from '../../components/Pagination'

export default function SearchPage({ results }) {
  const router = useRouter()
  
  return (
    <Fragment>
      <Head>
        <title>{router.query.q} - Google Search</title>
      </Head>
      <Header />
      <Results data={results} />
      <Pagination />
    </Fragment>
  )
}

export async function getServerSideProps(context) {
  const pageIndex = context.query.start || "0"

  const data = fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CTX_KEY}&q=${context.query.q}&start=${pageIndex}`
  )
    .then((res) => res.json())
    .catch((err) => console.error(err));

  return {
    props: {
      results: data
    }
  }
}
