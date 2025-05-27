import { Command, Education } from "../types";

const education: Command = {
  name: "education",
  args: [],
  description: "Liste de mes diplômes et formation.",
  action: async () => {
    try {
      const API_URL = import.meta.env.VITE_PERSONAL_API_URL;
      const response = await fetch(`${API_URL}/education`);
      const data = await response.json();
      if (response.status != 200) {
        return "Problème interne au serveur, réessayez plus tard.";
      }
      return (
        <div>
          {data.data.map((education: Education, index: number) => (
            <div>
              <p>{education.title}</p>
              <p>{education.school} | {education.place}</p>
              <p>De {education.startDate} à {education.endDate}</p>
              {education.details.map((detail: string) => (
                <p>- {detail}</p>
              ))}
              {index !== data.data.length - 1 && <hr />}
            </div>
          ))}
        </div>
      );
    } catch {
      return "Une erreur est survenue, veuillez réessayer.";
    }
  },
}

export default education;
