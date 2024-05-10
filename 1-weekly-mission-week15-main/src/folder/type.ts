import { SampleLinkRawData } from "@/src/link/type";

export type SampleFolderRawData = {
  id: number;
  name: string;
  owner: {
    id: number;
    name: string;
    profileImageSource: string;
  };
  links: SampleLinkRawData[];
};

export type Folder = {
  id: number;
  created_At: string;
  name: string;
  userId: number;
  link_Count: number;
};

export type SelectedFolderId = number | "all";
