import { useEffect, useState } from "react";

import { TechStack } from "../models/tech-stack.model";

const useTechStacks = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<TechStack | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTechStacks = async () => {
      setLoading(true);

      try {
        const response = await fetch("/data/tech-stacks.json");

        if (!response.ok) {
          throw new Error("Failed to fetch data.");
        }

        const _data = await response.json();
        setData(_data);
      } catch (err) {
        setError("Unable to load tech stack.");
      } finally {
        setLoading(false);
      }
    };

    fetchTechStacks();
  }, []);

  return { data, loading, error };
};

export default useTechStacks;
