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
  time: Date;
  title: string;
  type: ItemType.STORY;
  url: URL;
  authorId: string;
};
