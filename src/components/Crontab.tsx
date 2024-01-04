"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { ReactElement, useEffect } from "react";
import { Database } from "../../types/supabase";
import { QueryData, QueryError } from "@supabase/supabase-js";

export default function Crontab(): ReactElement {
  const supabase = createClientComponentClient<Database>();

  useEffect(() => {
    getProfileData();
  }, []);

  const getProfileData = async () => {
    const query = supabase.from("profile").select("*").eq("id", 1);
    const { data, error }: { data: QueryData<typeof query> | null; error: QueryError | null } = await query;

    if (error) {
      throw error;
    }

    if (data && data[0].id > 0) {
      setInterval(() => {
        console.log(`This will run every ${data[0].crontab} second!`);
      }, data[0].crontab * 1000);
    }
  };

  return <></>;
}
