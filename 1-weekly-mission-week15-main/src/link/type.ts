export type SampleLinkRawData = {
  id: number;
  created_at: string;
  url: string;
  title: string;
  description: string;
  image_source: string;
};

export type LinkRawData = {
  id: number;
  created_at: string;
  updated_at: string;
  url: string;
  image_source: string;
  title: string;
  description: string;
  folder_id: number;
};

export type Link = {
  id: number;
  title: string;
  url: string;
  image_source: string;
  alt: string;
  description: string;
  elapsedTime: string;
  created_at: string;
};
