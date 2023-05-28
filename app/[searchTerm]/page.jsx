import getWikiResults from "@/lib/getWikiResults";
import Card from "@/components/Card";

export async function generateMetadata({ params: { searchTerm } }) {
  const wikiData = await getWikiResults(searchTerm);
  const displayTerm = searchTerm.replaceAll("20%", " ");

  if (!wikiData?.query?.pages) {
    return {
      title: `${searchTerm} Not Found`,
    };
  }

  return {
    title: displayTerm,
    description: `Search results for ${displayTerm}`,
  };
}

const SearchResults = async ({ params: { searchTerm } }) => {
  const wikiData = await getWikiResults(searchTerm);

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
};
export default SearchResults;
