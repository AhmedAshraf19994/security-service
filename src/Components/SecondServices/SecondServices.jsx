import mobileImg from "../../../public/assets/images/services/mobile-security.avif";
import remoteImg from "../../../public/assets/images/services/remote-guarding.jpg";
import electronicImg from "../../../public/assets/images/services/electronic-security.avif";
import siteGuard from "../../../public/assets/images/services/siteguarde.jpg";
import SecondServiceCard from "./SecondServiceCard";

const SecondServices = () => {
  const services = [
    {
      title:
        "Specialized On-Site Security for Your Permanent or Temporary Security Needs",
      text: "Our on-site guarding services offer a strategic security presence, effectively addressing your specific safety concerns while deterring potential threats in your unique environment. Focusing on enhancing safety, our comprehensive solutions include patrol and inspection services, reception/concierge duties, alarm and emergency response, safety equipment checks, employee and visitor badging and identification, special events security, and customized site-specific security. Delivered by our professional and well-trained security officers, these services are fully tailored to meet your needs.",
      image: siteGuard,
    },
    {
      title: "Advanced Mobile Security Patrols Powered by Technology",
      text: "Utilizing GPS tracking and instant communication tools, we can dispatch the nearest mobile guard to any situation, whether an alarm & emergency, an employee escort, or a fire watch. Our mobile guarding services cover the entire North American continent, giving us an unparalleled advantage in the security industry, ensuring rapid response and comprehensive coverage, and delivering peace of mind through continuous surveillance and proactive threat mitigation.",
      image: mobileImg,
    },
    {
      title: "Remote Guarding Services with Seamless System Integration",
      text: "Our remote guarding employs AI-driven motion detection and cloud-based access control camera and sensor technology, easily integrating with your existing systems to offer extensive monitoring and immediate response capabilities. With our remote guarding services, you can benefit from remote perimeter protection, remote entry/exit management, remote patrol, remote escort, and remote alarm verification. Our remote guarding solutions are cost-effective, scalable, and customizable to your specific needs.",
      image: remoteImg,
    },
    {
      title: "Specialized On-Site Security for Electronic Security Systems",
      text: "Our electronic security solutions, featuring customizable alerts and remote access, provide essential security benefits in scenarios ranging from unauthorized access prevention to real-time incident response. Our electronic security solutions include video surveillance, access control, electronic article surveillance, intrusion systems, visitor management, weapons and threat detection, security monitoring, and workplace management.These solutions are tailored to fit your unique security needs and provide a truly comprehensive security program when paired with on-site or remote guarding.",
      image: electronicImg,
    },
  ];
  return (
    <section className="w-full p-4 py-10">
      <div className="mx-auto max-w-5xl flex flex-col gap-10">
        {services.map((service, i) => (
          <SecondServiceCard
            key={i}
            index={1 + i}
            text={service.text}
            title={service.title}
            image={service.image}
          />
        ))}
      </div>
    </section>
  );
};

export default SecondServices;
