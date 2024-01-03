"use client";

import { Input } from "@/components/ui/input";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { ChangeEvent, ReactElement, useEffect } from "react";
import { Database } from "../../../../types/supabase";
import { QueryData, QueryError } from "@supabase/supabase-js";
import { useProfileStore } from "@/store/ProfileStore";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function Profile(): ReactElement {
  const supabase = createClientComponentClient<Database>();
  const { profile, setProfile } = useProfileStore((state) => ({
    profile: state.profile,
    setProfile: state.setProfile,
  }));

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
      setProfile(data[0]);
    }
  };

  const handleOnClickUpdate = async () => {
    if (profile) {
      const query = supabase
        .from("profile")
        .update({ name: profile.name, profession: profile.profession, picture: profile.picture })
        .eq("id", 1)
        .select();

      const { data, error }: { data: QueryData<typeof query> | null; error: QueryError | null } = await query;

      if (error) {
        throw error;
      }

      if (data && data[0].id > 0) {
        setProfile(data[0]);
        toast(`Data for id: ${data[0].id} has been updated`, {
          description: new Date().toLocaleString("it"),
        });
      }
    }
  };

  return (
    <div className="mt-24 flex w-96 flex-col gap-4">
      <ProfilePicture />
      <ProfileName />
      <ProfileProfession />
      <Button name="updateProfileButton" aria-label="updateProfileButton" onClick={handleOnClickUpdate}>
        Update
      </Button>
    </div>
  );
}

const ProfilePicture = (): ReactElement => {
  const { profile, setProfilePicture } = useProfileStore((state) => ({
    profile: state.profile,
    setProfilePicture: state.setProfilePicture,
  }));

  if (profile) {
    return (
      <div className="flex flex-col gap-4">
        <div className="relative h-44 w-44">
          <Image
            className="origin-center rounded-full shadow-sm"
            priority={true}
            fill={true}
            sizes="100vw, 100vh"
            src={profile.picture}
            alt="profile"
          />
        </div>
        <Label htmlFor="profile-picture">Picture</Label>
        <Input
          id="profile-picture"
          className="dark:bg-neutral-900 dark:text-white"
          placeholder="Name"
          value={profile.picture}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            setProfilePicture(event.target.value);
          }}
        />
      </div>
    );
  } else {
    return <Skeleton className="h-10 bg-neutral-200 dark:bg-neutral-800" />;
  }
};

const ProfileName = (): ReactElement => {
  const { profile, setProfileName } = useProfileStore((state) => ({
    profile: state.profile,
    setProfileName: state.setProfileName,
  }));

  if (profile) {
    return (
      <>
        <Label htmlFor="profile-name">Name</Label>
        <Input
          id="profile-name"
          className="dark:bg-neutral-900 dark:text-white"
          placeholder="Name"
          value={profile.name}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            setProfileName(event.target.value);
          }}
        />
      </>
    );
  } else {
    return <Skeleton className="h-10 bg-neutral-200 dark:bg-neutral-800" />;
  }
};

const ProfileProfession = (): ReactElement => {
  const { profile, setProfileProfession } = useProfileStore((state) => ({
    profile: state.profile,
    setProfileProfession: state.setProfileProfession,
  }));

  if (profile) {
    return (
      <>
        <Label htmlFor="profile-profession">Profession</Label>
        <Input
          id="profile-profession"
          className="dark:bg-neutral-900 dark:text-white"
          placeholder="Name"
          value={profile.profession}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            setProfileProfession(event.target.value);
          }}
        />
      </>
    );
  } else {
    return <Skeleton className="h-10 bg-neutral-200 dark:bg-neutral-800" />;
  }
};
