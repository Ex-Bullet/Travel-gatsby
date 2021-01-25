import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import team from "../assets/images/team.jpg"

const About = () => (
  <Layout>
    <SEO title="A propos" />
    <AboutContainer>
      <AboutWrapper>
        <AboutText>
          <h2>Qui sommes-nous ?</h2>
          <p>
            Le groupe Selectour est le premier réseau d’agences de voyages
            indépendantes en France :{" "}
            <strong>1200 agences en sont membres</strong>
            <span>
              , réparties sur tout le territoire et les DOM. C’est un
              distributeur de voyages reconnu sur le marché français, aussi bien
              dans le domaine du tourisme que du voyage d’affaires.
            </span>
          </p>
        </AboutText>
        <ImageSplit>
          <ImageWrapper>
            <img src={team} alt="Our team" />
          </ImageWrapper>
        </ImageSplit>
      </AboutWrapper>
    </AboutContainer>

    <Link to="/">Retour page d'accueil</Link>
  </Layout>
)

export default About

const AboutContainer = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 1rem;
  box-sizing: content-box;

  @media screen and(min-width: 501px) {
    padding: 0 2rem;
  }
`
const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  margin-bottom: 3.5rem;

  @media screen and(min-width: 501px) {
    flex-direction: column;
  }
  @media (min-width: 1025px) {
    flex-direction: row;
    margin-bottom: 0;
  }
`
const AboutText = styled.div`
  position: relative;
  flex-basis: 50%;
  padding: 1rem 2rem;

  @media screen and(min-width: 1025px) {
    padding: 0 2rem;
  }
  @media (min-width: 1025px) {
    flex-direction: row;
    margin-bottom: 0;
  }
`
const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;

  @media screen and(min-width: 501px) {
    width: 70%;
  }
  @media (min-width: 1025px) {
    width: 100%;
  }
  img {
    position: relative;
    display: block;
    margin: 0 auto;
    z-index: 10;
    max-width: 100%;
  }
`

const ImageSplit = styled.div`
  position: relative;
  flex-basis: 50%;
  padding: 1rem 2rem;
  @media (min-width: 1025px) {
    padding: 0 2rem;
  }
`
