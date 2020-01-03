export class Pet {
  resource: Resource;
}
interface Resource {
    avatar: Avatar;
    breed: Breed;
    country?: Country;
    id: number;
    is_crew_member?: boolean;
    is_famous?: boolean;
    pseudo: string;
    statistics?: Statistics;
    type?: Type;
    born_date?: string;
  }

interface Type {
    id: number;
  }

interface Statistics {
    fans: number;
    followers: number;
  }

interface Country {
    iso: string;
  }

interface Breed {
    id: number;
    lib: string;
  }

interface Avatar {
    filename?: string;
    large?: string;
    medium?: string;
    thumb: string;
    thumbor?: string;
  }
  // resource: {
  //   avatar: {
  //     thumb: string
  //   };
  //   breed: {
  //     id?: number,
  //     lib: string
  //   };
  //   country?: {
  //     iso: string;
  //   };
  //   id: number;
  //   is_crew_member?: boolean;
  //   is_famous?: boolean;
  //   pseudo: string;
  //   statistics?: {
  //     fans: number;
  //     followers: number;
  //   };
  //   type?: number;
  //   born_date?: string;
  // };

