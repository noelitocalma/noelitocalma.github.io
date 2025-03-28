import { useState, useEffect } from "react";
import { WorkExperience } from "../models/work-experience.model";

const useWorkExperience = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<WorkExperience | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWorkExperience = async () => {
      setLoading(true);

      try {
        const response = await fetch("/data/work-experiences.json");

        if (!response.ok) {
          throw new Error("Failed to fetch data.");
        }

        const _data = await response.json();
        setData(_data);
      } catch {
        setError("Unable to load work experiences.");
      } finally {
        setLoading(false);
      }
    };

    fetchWorkExperience();
  }, []);

  return { data, loading, error };
};

export default useWorkExperience;
