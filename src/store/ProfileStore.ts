import { create } from "zustand";
import { produce } from "immer";
import { Profile } from "@/interfaces/Profiles";

type I_Profile = {
  profile: Profile | null;
};

type ProfileActions = {
  setProfile: (profile: Profile) => void;
  setProfileName: (name: string) => void;
  setProfileProfession: (profession: string) => void;
  setProfilePicture: (picture: string) => void;
};

export const useProfileStore = create<I_Profile & ProfileActions>()((set) => {
  return {
    profile: null,
    setProfile: (profile: Profile) =>
      set(
        produce((state: I_Profile) => {
          state.profile = profile;
        }),
      ),
    setProfileName: (name: string) =>
      set(
        produce((state: I_Profile) => {
          if (state.profile) {
            state.profile.name = name;
          }
        }),
      ),
    setProfileProfession: (profession: string) =>
      set(
        produce((state: I_Profile) => {
          if (state.profile) {
            state.profile.profession = profession;
          }
        }),
      ),
    setProfilePicture: (picture: string) =>
      set(
        produce((state: I_Profile) => {
          if (state.profile) {
            state.profile.picture = picture;
          }
        }),
      ),
  };
});
