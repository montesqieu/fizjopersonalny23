import React from 'react'
import Layout from '../components/Layout'
import { details, featured, html} from '../styles/article-details.module.css'
import { GatsbyImage } from "gatsby-plugin-image"
import { graphql } from 'gatsby'

export default function ArticleDetails({ data }) {
    const { html } = data.markdownRemark
    const { title, category, date, featuredImg} = data.markdownRemark.frontmatter

  return (
    <Layout>
        <div className={details}>
            <h2>{ title }</h2>
            <h3>{ category }</h3>
            <h3>{ date }</h3>
            <div className={featured}>
                <GatsbyImage image={featuredImg.childImageSharp.gatsbyImageData} alt="featured Image"/>
            </div>
            <div className={html} dangerouslySetInnerHTML={{ __html: html }} />
        </div>
    </Layout>
    )
}

export const query = graphql`
    query ArticlesDetails($slug: String) {
        markdownRemark(frontmatter: {slug: {eq: $slug}}) {
        html
        frontmatter {
            category
            title
            date
            featuredImg {
                childImageSharp {
                  gatsbyImageData(layout: CONSTRAINED)
                }
            }
        }
    }
}
`