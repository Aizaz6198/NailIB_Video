"use client";
import Head from "next/head";
import { Highlight } from "../Components/Highlight.js";
import { Features } from "../Components/Feature.js";
import { joining} from "../Components/HTJ.js";
import { Navbar } from "../Components/Navbar.js";
import { Testimonials } from "../Components/Testimonial.js";
import { CallToAction } from "../Components/CTA.js";
import { Footer } from "../Components/Footer.js";
import { Subjects } from "../Components/Subject.js";
import { CostOfJoining } from "../Components/COJ.js";

export const Homepage = () => {
  return (
    <div className="font-sans text-gray-800 bg-gray-50">
      <Head>
        <title>Nailib Videos</title>
        <meta
          name="description"
          content="Access high-quality IB study videos crafted by expert tutors. Enhance your learning experience with Nailib's comprehensive video library."
        />
        <link rel="icon" href="/favicon.svg" type="image/x-icon" />
      </Head>
      <Navbar />
      <main className="pt-16">
        <Highlight />
        <Features />
        <joining/>
        <Subjects />
        <CostOfJoining />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Homepage;
