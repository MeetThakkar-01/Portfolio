import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Projects from "../components/Projects"

const ProjectsPage = ({data:{allStrapiProjects:{nodes:projects}}}) => {
  return <Layout>
    
    <section>
      <Projects projects = {projects} title = "All Projects" />
    </section>
  </Layout>
}

export const query = graphql`
  {
    allStrapiProjects {
      nodes {
        github
        id
        description
        title
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stack {
          id
          title
        }
      }
    }
  }
`


export default ProjectsPage
