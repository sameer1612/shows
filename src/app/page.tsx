'use client';

import Link from 'next/link';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { FloatLabel } from 'primereact/floatlabel';
import { InputText } from 'primereact/inputtext';
import { Rating } from 'primereact/rating';

export default function Home() {
  //TODO: use actual data
  const shows = [
    {
      title: 'Breaking Bad',
      synopsis:
        "A high school chemistry teacher turned methamphetamine producer partners with a former student to secure his family's future.",
      releaseYear: 2008,
      genres: ['Crime', 'Drama', 'Thriller'],
      rating: 9,
      coverImage: null,
    },
    {
      title: 'Stranger Things',
      synopsis:
        'A group of kids in the 1980s uncover government secrets and face supernatural threats in their small town.',
      releaseYear: 2016,
      genres: ['Horror', 'Sci-Fi', 'Drama'],
      rating: 6,
      coverImage: null,
    },
    {
      title: 'Game of Thrones',
      synopsis: 'Noble families fight for control of the Seven Kingdoms while an ancient enemy rises in the North.',
      releaseYear: 2011,
      genres: ['Action', 'Drama', 'Fantasy'],
      rating: 5,
      coverImage: null,
    },
    {
      title: 'Breaking Bad',
      synopsis:
        "A high school chemistry teacher turned methamphetamine producer partners with a former student to secure his family's future.",
      releaseYear: 2008,
      genres: ['Crime', 'Drama', 'Thriller'],
      rating: 9,
      coverImage: null,
    },
    {
      title: 'Stranger Things',
      synopsis:
        'A group of kids in the 1980s uncover government secrets and face supernatural threats in their small town.',
      releaseYear: 2016,
      genres: ['Horror', 'Sci-Fi', 'Drama'],
      rating: 8,
      coverImage: null,
    },
    {
      title: 'Game of Thrones',
      synopsis: 'Noble families fight for control of the Seven Kingdoms while an ancient enemy rises in the North.',
      releaseYear: 2011,
      genres: ['Action', 'Drama', 'Fantasy'],
      rating: 9,
      coverImage: null,
    },
    {
      title: 'Breaking Bad',
      synopsis:
        "A high school chemistry teacher turned methamphetamine producer partners with a former student to secure his family's future.",
      releaseYear: 2008,
      genres: ['Crime', 'Drama', 'Thriller'],
      rating: 9,
      coverImage: null,
    },
    {
      title: 'Stranger Things',
      synopsis:
        'A group of kids in the 1980s uncover government secrets and face supernatural threats in their small town.',
      releaseYear: 2016,
      genres: ['Horror', 'Sci-Fi', 'Drama'],
      rating: 8,
      coverImage: null,
    },
    {
      title: 'Game of Thrones',
      synopsis: 'Noble families fight for control of the Seven Kingdoms while an ancient enemy rises in the North.',
      releaseYear: 2011,
      genres: ['Action', 'Drama', 'Fantasy'],
      rating: 9,
      coverImage: null,
    },
  ];

  return (
    <div className="px-10 py-20 w-full max-w-5xl mx-auto space-y-10">
      <header className="flex justify-between gap-2">
        <FloatLabel className="flex-1 max-w-md">
          <InputText className="w-full" />
          <label htmlFor="username">Search shows</label>
        </FloatLabel>

        <Link href="/new-show" passHref>
          <Button label="Add New" icon="pi pi-plus" />
        </Link>
      </header>

      <main className="grid gap-2 grid-cols-1 md:grid-cols-2">
        {shows.map((show, idx) => (
          <Card key={idx} title={show.title} subTitle={`${show.releaseYear} | ${show.genres.join(', ')}`}>
            <Rating stars={10} cancel={false} value={show.rating} />
            <p className="mt-4">{show.synopsis}</p>
          </Card>
        ))}
      </main>
    </div>
  );
}
