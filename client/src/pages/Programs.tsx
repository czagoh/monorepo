import { useEffect, useState } from "react";

type Program = {
  id: number;
  title: string;
  synopsis: string;
  poster: string;
  country: string;
  year: number;
};

const Programs = () => {
  const [programs, setPrograms] = useState<Program[]>([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/programs`)
      .then((response) => response.json())
      .then((data) => setPrograms(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>Programs</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {programs.map((program) => (
          <div key={program.id} style={{ width: "200px" }}>
            <img
              src={program.poster}
              alt={program.title}
              style={{ width: "100%" }}
            />
            <h2>{program.title}</h2>
            <p>
              {program.country} — {program.year}
            </p>
            <p>{program.synopsis}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
