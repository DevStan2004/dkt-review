import Image from "next/image";
import Hero from "./components/Hero";
import MarqueeComponent from "./components/Marquee";
import Diet from "./components/Diet";
import MedicalSite from "./components/MedicalSite";
import DoctorChanges from "./components/DoctorChanges";
import DualAction from "./components/DualAction";
import DoctorSupport from "./components/DoctorSupport";
import Conversation from "./components/Conversation";
import FlexContainer from "./components/FlexContainer";
import Programmes from "./components/Programmes";
import PatientProof from "./components/PatientProof";
import Team from "./components/Team";
import Consultation from "./components/Consultation";
import FAQ from "./components/FAQ";
import BookConsultation from "./components/BookConsultation";
import GetStarted from "./components/GetStarted";

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden">
      <Hero />
      <MarqueeComponent />
      <Diet />
      <MedicalSite />
      <DoctorChanges />
      <DualAction />
      <DoctorSupport />
      <Conversation />
      <Programmes />
      <PatientProof />
      <Team />
      <Consultation />
      <FAQ />
      <BookConsultation />
      <GetStarted />
    </div>
  );
}
