import CardCarousel from "@/components/CardCarousel";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Book } from "@/interfaces/Books";
import supabaseServer from "@/supabase/config";
import { QueryData, QueryError } from "@supabase/supabase-js";
import { ReactElement, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

export default async function Books(): Promise<ReactElement | undefined> {
  const query = supabaseServer().from("books").select("*").eq("profile_id", 1).order("id", { ascending: true });
  const { data, error }: { data: QueryData<typeof query> | null; error: QueryError | null } = await query;

  if (error) {
    throw error;
  }

  const createBookCards = (books: Book[]): ReactNode[] => {
    const bookCards: ReactNode[] = [];

    books.forEach((book: Book) => {
      bookCards.push(<Book book={book} />);
    });

    return bookCards;
  };

  if (data) {
    return (
      <div className="mx-[0.5rem] mt-[8rem] flex max-w-[100rem] flex-col gap-4 md:mx-[8rem] md:mt-[10rem] lg:mx-[14rem] lg:mt-[14rem] 2xl:mx-[20rem] 2xl:mt-[20rem]">
        <h3 className="text-xl font-bold text-primary md:text-2xl">Knowledge books</h3>
        <CardCarousel cards={createBookCards(data)} />
      </div>
    );
  }
}

type BookProps = {
  book: Book;
};

const Book = ({ book }: BookProps): ReactElement => {
  return (
    <div className="flex flex-col items-center gap-4 p-4 xl:flex-row">
      <Link aria-label={`${book.name}Book`} href={book.link} className="relative h-60 w-48">
        <Image
          className="origin-center rounded-lg"
          priority={true}
          fill={true}
          sizes="192px"
          src={book.image}
          alt={book.name}
        />
      </Link>
      <Card className="flex flex-1 flex-col justify-between shadow-sm shadow-primary hover:shadow-md hover:shadow-primary md:h-60 dark:bg-black">
        <CardHeader className="px-6 py-4">
          <CardTitle className="text-lg lg:text-3xl">{book.name}</CardTitle>
        </CardHeader>
        <CardContent className="overflow-auto">
          <CardDescription className="text-[0.7em] font-semibold md:text-[0.9em]">{book.description}</CardDescription>
        </CardContent>
        <CardFooter className="self-end py-4 text-sm font-medium text-primary/90 md:text-lg">{book.author}</CardFooter>
      </Card>
    </div>
  );
};
