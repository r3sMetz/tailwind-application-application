import Head from "next/head"
import { submenuDocsData } from "@data"
import { DefaultLayout } from "@layouts"

export default function Home() {
  return (
    <DefaultLayout className="container" submenu={submenuDocsData}>
      <Head>
        <title>Welcome</title>
      </Head>
      <h1>Hello</h1>
    </DefaultLayout>
  )
}
