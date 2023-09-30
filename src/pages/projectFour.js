import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const PortfolioPage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "src/images/samantha-gades-BlIhVfXbi9s-unsplash.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (

      <div style={{ textAlign: 'center' }}>
        <h1>Welcome to My Portfolio</h1>
        <p>Here's a brief overview of my software projects and experience:</p>
                
        <div>
          <h2>About Me</h2>
          <p>
            Write a brief description about yourself here...
          </p>
        </div>
        
        <div>
          <h2>My Work</h2>
          <p>
            Describe your projects, accomplishments, and any other software-related work.
          </p>
        </div>

        <div>
          <h2>Contact</h2>
          <p>
            How can people reach you? Maybe provide an email, LinkedIn, or GitHub link.
          </p>
        </div>
      </div>

  )
}

export default PortfolioPage
