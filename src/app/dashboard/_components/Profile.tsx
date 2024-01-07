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
import { Textarea } from "@/components/ui/textarea";

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
        .update({ name: profile.name, profession: profile.profession, picture: profile.picture, about: profile.about })
        .eq("id", 1)
        .select();

      const { data, error }: { data: QueryData<typeof query> | null; error: QueryError | null } = await query;

      if (error) {
        throw error;
      }

      if (data && data[0].id > 0) {
        setProfile(data[0]);
        toast(`Data for ${data[0].name} has been updated`, {
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
      <ProfileAbout />
      <Button name="updateProfileButton" aria-label="updateProfileButton" onClick={handleOnClickUpdate}>
        Update Profile
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
        <Textarea
          id="profile-picture"
          className="scrollbar-none dark:bg-neutral-900 dark:text-white"
          placeholder="Name"
          rows={6}
          value={profile.picture}
          onChange={(event: ChangeEvent<HTMLTextAreaElement>) => {
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

const ProfileAbout = (): ReactElement => {
  const { profile, setProfileAbout } = useProfileStore((state) => ({
    profile: state.profile,
    setProfileAbout: state.setProfileAbout,
  }));

  if (profile) {
    return (
      <>
        <Label htmlFor="profile-about">About</Label>
        <Textarea
          id="profile-about"
          className="scrollbar-none dark:bg-neutral-900 dark:text-white"
          placeholder="About"
          value={profile.about}
          rows={6}
          onChange={(event: ChangeEvent<HTMLTextAreaElement>) => {
            setProfileAbout(event.target.value);
          }}
        />
      </>
    );
  } else {
    return <Skeleton className="h-10 bg-neutral-200 dark:bg-neutral-800" />;
  }
};
