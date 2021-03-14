enum ItemType {
  STORY = 'story',
}

export type Author = {
  id: string;
  karma: number;
  about: string;
};

export type Story = {
  id: number;
  score: number;
  time: number;
  title: string;
  type: ItemType.STORY;
  url: URL;
  by: string;
  authorData: Author | null;
};
