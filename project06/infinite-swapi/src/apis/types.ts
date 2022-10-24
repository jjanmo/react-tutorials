export interface People {
  birth_year: string;
  eye_color: string;
  gender: string;
  hair_color: string;
  height: string;
  mass: string;
  name: string;
  skin_hair: string;
}

export interface FetchPeopleResponse {
  count: number;
  next: string;
  previous: string;
  results: People[];
}
