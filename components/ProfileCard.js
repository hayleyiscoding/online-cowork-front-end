import Link from "next/link";
import Image from "next/image";

export default function ProfileCard({ id, firstName, jobTitle, imageURL }) {
  return (
    <div className="group relative clickable-card rounded-lg focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500">
      <Link href={`/profiles/${id}`}>
        <a className="clickable-card__link"></a>
      </Link>
      <div className="block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 overflow-hidden relative group-hover:opacity-75">
        {imageURL && <Image src={imageURL} alt="event image" layout="fill" />}
      </div>
      <p className="block text-base font-medium text-gray-900">
        {firstName} - {jobTitle}
      </p>
    </div>
  );
}
