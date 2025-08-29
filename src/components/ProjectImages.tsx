import Image from "next/image";

type ProjectImagesProps = {
  beforeImages?: string[]; // optional
  images: string[]; // after images
};

export default function ProjectImages({
  beforeImages,
  images,
}: ProjectImagesProps) {
  // Case 1: If before images exist
  if (beforeImages && beforeImages.length > 0) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
        <div>
          <h3 className="text-lg font-semibold mb-2 text-gray-700">Before</h3>
          <Image
            src={beforeImages[0]} // main before image
            alt="Before"
            width={800}
            height={600}
            className="rounded-xl object-cover w-full h-auto shadow-md"
          />
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2 text-gray-700">After</h3>
          <Image
            src={images[0]} // first after image
            alt="After"
            width={800}
            height={600}
            className="rounded-xl object-cover w-full h-auto shadow-md"
          />
        </div>
      </div>
    );
  }

  // Case 2: Only after images
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
      {images.map((img, idx) => (
        <Image
          key={idx}
          src={img}
          alt={`Image ${idx + 1}`}
          width={800}
          height={600}
          className="rounded-xl object-cover w-full h-auto shadow-md"
        />
      ))}
    </div>
  );
}
