import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/layout";
import Welcome from "../components/welcome";
import Projects from "../components/projects";
import Contact from "../components/contact";

const IndexPage: React.FC<PageProps> = () => {
  return (
		<Layout>
			<Welcome />
			<Projects />
			<Contact />
		</Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
