export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export interface Database {
  public: {
    Tables: {
      books: {
        Row: {
          author: string;
          description: string;
          id: number;
          image: string;
          link: string;
          name: string;
          profile_id: number;
        };
        Insert: {
          author: string;
          description: string;
          id?: number;
          image: string;
          link: string;
          name: string;
          profile_id: number;
        };
        Update: {
          author?: string;
          description?: string;
          id?: number;
          image?: string;
          link?: string;
          name?: string;
          profile_id?: number;
        };
        Relationships: [
          {
            foreignKeyName: "books_profile_id_fkey";
            columns: ["profile_id"];
            isOneToOne: false;
            referencedRelation: "profile";
            referencedColumns: ["id"];
          },
        ];
      };
      companies: {
        Row: {
          contractual_status: Database["public"]["Enums"]["contractual_status_enum"];
          employment_status: Database["public"]["Enums"]["employment_status_enum"];
          end_date: string | null;
          id: number;
          logo: string;
          logo_heigth: number;
          logo_sizes: string;
          logo_width: number;
          name: string;
          profile_id: number;
          start_date: string | null;
        };
        Insert: {
          contractual_status: Database["public"]["Enums"]["contractual_status_enum"];
          employment_status: Database["public"]["Enums"]["employment_status_enum"];
          end_date?: string | null;
          id?: number;
          logo: string;
          logo_heigth: number;
          logo_sizes: string;
          logo_width: number;
          name: string;
          profile_id: number;
          start_date?: string | null;
        };
        Update: {
          contractual_status?: Database["public"]["Enums"]["contractual_status_enum"];
          employment_status?: Database["public"]["Enums"]["employment_status_enum"];
          end_date?: string | null;
          id?: number;
          logo?: string;
          logo_heigth?: number;
          logo_sizes?: string;
          logo_width?: number;
          name?: string;
          profile_id?: number;
          start_date?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "companies_profile_id_fkey";
            columns: ["profile_id"];
            isOneToOne: false;
            referencedRelation: "profile";
            referencedColumns: ["id"];
          },
        ];
      };
      frameworks: {
        Row: {
          id: number;
          image: string;
          name: string;
          type: string;
        };
        Insert: {
          id?: number;
          image: string;
          name: string;
          type: string;
        };
        Update: {
          id?: number;
          image?: string;
          name?: string;
          type?: string;
        };
        Relationships: [];
      };
      persons_worked_with: {
        Row: {
          id: number;
          name: string | null;
          picture: string | null;
          website: string | null;
        };
        Insert: {
          id?: number;
          name?: string | null;
          picture?: string | null;
          website?: string | null;
        };
        Update: {
          id?: number;
          name?: string | null;
          picture?: string | null;
          website?: string | null;
        };
        Relationships: [];
      };
      profile: {
        Row: {
          about: string;
          id: number;
          name: string;
          picture: string;
          profession: string;
        };
        Insert: {
          about?: string;
          id?: number;
          name?: string;
          picture?: string;
          profession?: string;
        };
        Update: {
          about?: string;
          id?: number;
          name?: string;
          picture?: string;
          profession?: string;
        };
        Relationships: [];
      };
      projects: {
        Row: {
          description: string;
          github: string;
          host: string;
          id: number;
          images: string[];
          name: string;
        };
        Insert: {
          description: string;
          github: string;
          host: string;
          id?: number;
          images: string[];
          name: string;
        };
        Update: {
          description?: string;
          github?: string;
          host?: string;
          id?: number;
          images?: string[];
          name?: string;
        };
        Relationships: [];
      };
      projects_frameworks: {
        Row: {
          framework_id: number;
          project_id: number;
        };
        Insert: {
          framework_id?: number;
          project_id: number;
        };
        Update: {
          framework_id?: number;
          project_id?: number;
        };
        Relationships: [
          {
            foreignKeyName: "projects_frameworks_framework_id_fkey";
            columns: ["framework_id"];
            isOneToOne: false;
            referencedRelation: "frameworks";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "projects_frameworks_project_id_fkey";
            columns: ["project_id"];
            isOneToOne: false;
            referencedRelation: "projects";
            referencedColumns: ["id"];
          },
        ];
      };
      socials: {
        Row: {
          id: number;
          link: string;
          name: string;
          profile_id: number;
        };
        Insert: {
          id?: number;
          link?: string;
          name?: string;
          profile_id: number;
        };
        Update: {
          id?: number;
          link?: string;
          name?: string;
          profile_id?: number;
        };
        Relationships: [
          {
            foreignKeyName: "socials_profile_id_fkey";
            columns: ["profile_id"];
            isOneToOne: false;
            referencedRelation: "profile";
            referencedColumns: ["id"];
          },
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      contractual_status_enum: "determined" | "undetermined" | "piva";
      employment_status_enum: "active" | "inactive";
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    ? (Database["public"]["Tables"] & Database["public"]["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R;
      }
      ? R
      : never
    : never;

export type TablesInsert<
  PublicTableNameOrOptions extends keyof Database["public"]["Tables"] | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
    ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I;
      }
      ? I
      : never
    : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends keyof Database["public"]["Tables"] | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
    ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U;
      }
      ? U
      : never
    : never;

export type Enums<
  PublicEnumNameOrOptions extends keyof Database["public"]["Enums"] | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
    ? Database["public"]["Enums"][PublicEnumNameOrOptions]
    : never;
