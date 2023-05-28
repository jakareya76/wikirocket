import Link from "next/link";

export default function Card({ result }) {
  return (
    <article className="m-4 p-5 max-w-lg bg-slate-700 text-slate-300">
      <div className="flex flex-row gap-4">
        <div className="flex flex-col justify-center">
          <h2>
            <Link
              href={`https://en.wikipedia.org/?curid=${result.pageid}`}
              target="_blank"
              className="text-xl font-bold underline"
            >
              {result.title}
            </Link>
          </h2>
          <p>{result.extract}</p>
        </div>
      </div>
    </article>
  );
}
