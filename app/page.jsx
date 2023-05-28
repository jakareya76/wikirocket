import getWikiResults from "@/lib/getWikiResults";
import Card from "@/components/Card";

export default async function Home() {
  const wikiData = await getWikiResults("React Js");
  const results = wikiData?.query?.pages;

  return (
    <main className="container mx-auto flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {results ? (
          Object.values(results).map((result) => {
            return <Card key={result.pageid} result={result} />;
          })
        ) : (
          <h2 className="p-2 text-xl text-red-500">{`${searchTerm} Not Found`}</h2>
        )}
      </div>
    </main>
  );
}
