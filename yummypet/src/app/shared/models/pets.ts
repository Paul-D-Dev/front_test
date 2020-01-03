

export class Pets {
  collection: Collection[];
  extras: Extras;
}

interface Extras {
  num_found: number;
}

interface Collection {
  resource: Resource;
}

interface Resource {
  avatar: Avatar;
  breed: Breed;
  country: Country;
  id: number;
  is_crew_member: boolean;
  is_famous: boolean;
  pseudo: string;
  statistics: Statistics;
  type: Type;
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
