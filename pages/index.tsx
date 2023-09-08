import React from "react";
import MainLayout from "layouts/MainLayout";
import BlogPreviews from "@/components/Blog/BlogPreviews";
import Landing from "@/components/Landing";
import Projects from "@/components/Projects";
import SocialsLine from "@/components/SocialsLine/SocialsLine";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <MainLayout>
      <Landing />
      <Projects />
      <BlogPreviews />
      <Contact />
      <SocialsLine />
    </MainLayout>
  );
}
