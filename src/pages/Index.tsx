import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Programs from "@/components/Programs";
import ChildrenActivities from "@/components/ChildrenActivities";
import OrlyataProgram from "@/components/OrlyataProgram";

const Index = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Programs />
      <OrlyataProgram />
      <ChildrenActivities />
      <Footer />
    </div>
  );
};

export default Index;
