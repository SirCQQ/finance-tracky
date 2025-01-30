import { FianncesList } from "./(components)/finances-list";

export default async function Page() {
  return (
    <main>
      <div className="h-10 w-full p-2 text-center text-lg leading-[20px] sm:h-20 sm:leading-[80px]">
        Place holder for small utilities like create new, filter by last change,
        owned or invited
      </div>
      <FianncesList />
    </main>
  );
}
