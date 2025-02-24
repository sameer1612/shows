'use client';

import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';
import { FileUpload, FileUploadFile } from 'primereact/fileupload';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { MultiSelect } from 'primereact/multiselect';
import { Rating } from 'primereact/rating';
import { FormEvent, useState } from 'react';

export default function NewShow() {
  const [form, setForm] = useState({
    title: '',
    synopsis: '',
    releaseYear: null,
    genres: [],
    rating: 0,
    coverImage: null,
  });

  const genreOptions = [
    { label: 'Action', value: 'Action' },
    { label: 'Comedy', value: 'Comedy' },
    { label: 'Drama', value: 'Drama' },
    { label: 'Horror', value: 'Horror' },
    { label: 'Sci-Fi', value: 'Sci-Fi' },
  ];

  const handleFormFieldChange = (field: string, value: string | number | Date | FileUploadFile | null | undefined) =>
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));

  //TODO: setup form submission, including handling image upload
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Form Data:', form);
  };

  return (
    <div className="mx-auto w-full max-w-5xl space-y-10 px-10 py-20">
      <header className="flex justify-between">
        <h1 className="text-2xl font-semibold">New Show</h1>
      </header>

      <main>
        <form onSubmit={handleSubmit} className="grid grid-cols-5 gap-10">
          <section className="col-span-3 flex flex-col gap-5">
            <InputText
              placeholder="Title"
              value={form.title}
              onChange={(e) => handleFormFieldChange('title', e.target.value)}
              required
            />
            <InputTextarea
              placeholder="Synopsis"
              autoResize
              rows={7}
              cols={30}
              value={form.synopsis}
              onChange={(e) => handleFormFieldChange('synopsis', e.target.value)}
            />
            <Calendar
              placeholder="Release year"
              view="year"
              dateFormat="yy"
              showIcon
              value={form.releaseYear}
              onChange={(e) => handleFormFieldChange('releaseYear', e.value)}
            />
            <MultiSelect
              placeholder="Genres"
              display="chip"
              options={genreOptions}
              value={form.genres}
              onChange={(e) => handleFormFieldChange('genres', e.value)}
            />
            <div className="flex space-x-4">
              <label className="text-lg">Rating:</label>
              <Rating
                stars={10}
                cancel={false}
                value={form.rating}
                onChange={(e) => handleFormFieldChange('rating', e.target.value)}
              />
            </div>
          </section>

          <section className="col-span-2">
            <FileUpload
              name="cover[]"
              accept="image/*"
              maxFileSize={1000000}
              customUpload
              emptyTemplate={<p className="m-0">Drag and drop a cover image here</p>}
              uploadHandler={(event) => handleFormFieldChange('coverImage', event.files[0])}
            />
          </section>

          <section className="col-span-full flex justify-end">
            <Button label="Create Show" type="submit" />
          </section>
        </form>
      </main>
    </div>
  );
}
