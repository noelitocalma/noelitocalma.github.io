import { useState, useEffect } from "react";
import { Project } from "../models/project.model";

const useProjects = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<Project | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);

      try {
        const response = await fetch("/data/projects.json");

        if (!response.ok) {
          throw new Error("Failed to fetch data.");
        }

        const _data = await response.json();
        _data.details = _data?.details?.reverse() ?? [];

        setData(_data);
      } catch {
        setError("Unable to load work experiences.");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return { data, loading, error };
};

export default useProjects;
