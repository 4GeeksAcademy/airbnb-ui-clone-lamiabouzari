type ImageGalleryMosaicProps = {
  images: string[];
};

export function ImageGalleryMosaic({ images }: ImageGalleryMosaicProps) {
  return (
    <section className="rounded-2xl bg-white p-5">
      <h2 className="text-lg font-semibold text-neutral-900">Image gallery mosaic</h2>
      <p className="mt-2 text-sm text-neutral-600">Total images: {images.length}</p>
    </section>
  );
}
