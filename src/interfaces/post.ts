export interface IPost {
  idpost: string;
  idcategoriapost: string;
  idowner: string;
  title: string;
  foto: string;
  description: string;
  date: Date;
}

export interface IPostUser {
  posts: IPost[];
  page: number;
}
