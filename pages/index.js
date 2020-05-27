import Head from "next/head"
import { DefaultLayout } from "@layouts"

export default function Home() {
  return (
    <DefaultLayout className="container">
      <Head>
        <title>Welcome</title>
      </Head>
      <h1>Hello</h1>
    </DefaultLayout>
  )
}
