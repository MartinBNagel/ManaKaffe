import React from "react";
import {
  AboutSection,
  ArticlesSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="ManaKaffe - Frisk ristet til dig" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        <ProjectsSection sectionId="produkter" heading="Min kaffe" />
        <AboutSection sectionId="omkringmig" heading="Omkring mig" />
        <ContactSection sectionId="kontakt" heading="Er du interreseret i kaffe? Eller er der et problem, så kontakt mig endelig!" />
      </Page>
    </>
  );
}
