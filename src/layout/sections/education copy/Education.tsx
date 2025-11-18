import { ExperienceCard } from "../experience/experienceCard/ExperienceCard";
import { SectionTitle } from "../../../components/SectionTitle";

const educationExperiences = [
  {
    institution: "University of Toronto",
    position: "Student",
    period: "Jan 1999 - Dec 2003",
    certificateTitle: "Certificate of Web Training",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et ",
  },

  {
    institution: "University of Toronto",
    position: "Student",
    period: "Jan 1999 - Dec 2003",
    certificateTitle: "Certificate of Web Training",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et ",
  },
];
export const Education = () => {
  return (
    <div>
      <SectionTitle>Education</SectionTitle>
      {educationExperiences.map((item, index) => (
        <ExperienceCard
          key={index}
          institution={item.institution}
          position={item.position}
          period={item.period}
          certificateTitle={item.certificateTitle}
          details={item.details}
        />
      ))}
    </div>
  );
};
