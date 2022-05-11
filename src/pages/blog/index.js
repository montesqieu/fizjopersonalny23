import { graphql, Link } from 'gatsby'
import React from 'react'
import Layout from '../../components/Layout'
import { blog_main, blog_grid } from '../../styles/blog.module.css'
import { GatsbyImage } from "gatsby-plugin-image";

export default function Blog({ data }) {
  console.log(data)
  const article = data.article.nodes

  return (
    <Layout>
      <div className={blog_main}>
          <h2>Czytaj zdrów!</h2>
          <h3>Ciekawe artykuły</h3>
          <p>To jest ciekawe miejsce z fajnymi zartykułami z zakresu fizjoterapii i treningu. To jest ciekawe miejsce z fajnymi zartykułami z zakresu fizjoterapii i treningu. To jest ciekawe miejsce z fajnymi zartykułami z zakresu fizjoterapii i treningu. To jest ciekawe miejsce z fajnymi zartykułami z zakresu fizjoterapii i treningu. </p>
          <div className={blog_grid}>
            {article.map(article => (
              <Link to={"/blog/" + article.frontmatter.slug} key={article.id}>
                <div>
                  <GatsbyImage image={article.frontmatter.thumb.childImageSharp.gatsbyImageData} />
                  <h3>{ article.frontmatter.title }</h3>
                  <p>{ article.frontmatter.category }</p>
                  <p>{ article.frontmatter.date }</p>
                </div>
              </Link>
            ))}
          </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
query Articles {
  article: allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}) {
    nodes {
      frontmatter {
        category
        date
        slug
        title
        thumb {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
          id
        }
      }
    }
  }
}
`