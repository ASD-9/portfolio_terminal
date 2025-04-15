import { Command, Experience } from "../types";

const experiences: Command = {
  name: "experiences",
  args: [],
  description: "Liste de mes expériences.",
  action: async () => {
    try {
      const API_URL = import.meta.env.VITE_PERSONAL_API_URL;
      const response = await fetch(`${API_URL}/experiences`);
      const data = await response.json();
      if (response.status != 200) {
        return "Problème interne au serveur, réessayez plus tard.";
      }
      return (
        <div>
          {data.data.map((experience: Experience, index: number) => (
            <div>
              <p>{experience.title}</p>
              <p>{experience.company} | {experience.place}</p>
              <p>De {experience.startDate} à {experience.endDate}</p>
              {experience.details.map((detail: string) => (
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

export default experiences;
