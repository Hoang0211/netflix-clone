import {
  childrenSeries,
  comediesSeries,
  crimeSeries,
  documentariesSeries,
  feelgoodSeries,
  childrenFilms,
  dramaFilms,
  romanceFilms,
  suspenseFilms,
  thrillerFilms,
} from './movies-data';

export const filmList = [
  {
    id: 1,
    type: 'films',
    genre: 'children',
    moviesArr: childrenFilms,
  },
  {
    id: 2,
    type: 'films',
    genre: 'drama',
    moviesArr: dramaFilms,
  },
  {
    id: 3,
    type: 'films',
    genre: 'romance',
    moviesArr: romanceFilms,
  },
  {
    id: 4,
    type: 'films',
    genre: 'suspense',
    moviesArr: suspenseFilms,
  },
  {
    id: 5,
    type: 'films',
    genre: 'thriller',
    moviesArr: thrillerFilms,
  },
];

export const seriesList = [
  {
    id: 1,
    type: 'series',
    genre: 'children',
    moviesArr: childrenSeries,
  },
  {
    id: 2,
    type: 'series',
    genre: 'comedies',
    moviesArr: comediesSeries,
  },
  {
    id: 3,
    type: 'series',
    genre: 'crime',
    moviesArr: crimeSeries,
  },
  {
    id: 4,
    type: 'series',
    genre: 'documentaries',
    moviesArr: documentariesSeries,
  },
  {
    id: 5,
    type: 'series',
    genre: 'feel-good',
    moviesArr: feelgoodSeries,
  },
];
