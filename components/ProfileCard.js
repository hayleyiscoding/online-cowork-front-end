import Link from "next/link";
import Image from "next/image";

export default function ProfileCard({ id, profile }) {
  const { firstName, avatarImage, jobTitle, bio } = profile.fields;
  return (
    <div className="group relative clickable-card focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500">
      <Link href={`/members/${id}`}>
        <a className="clickable-card__link"></a>
      </Link>
      <div className="block w-full aspect-w-7 aspect-h-7 rounded-lg bg-coworkblue overflow-hidden relative group-hover:opacity-75">
        {avatarImage && (
          <Image src={avatarImage} alt="event image" layout="fill" />
        )}
      </div>
      <h5 className="block text-xl font-light text-gray-700 py-3">
        {firstName} - {jobTitle}
      </h5>
      {/* <p className="block text-base font-medium text-gray-900">{bio}</p> */}
    </div>
  );
}
