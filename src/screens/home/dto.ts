export interface ResultListPokemonEntity {
  count: number;
  next: null | string;
  previous: null | string;
  results: {
    name: string;
    url: string;
  }[];
}
