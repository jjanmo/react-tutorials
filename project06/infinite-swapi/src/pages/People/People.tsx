import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchPeople } from '@apis/starwars';
import Card from './People.Card';
import * as S from './People.style';
import PageWrapper from '@components/PageWrapper/PageWrapper';
import InfiniteScroll from 'react-infinite-scroller';

function People() {
  const { data, hasNextPage, fetchNextPage, isLoading, isFetchingNextPage } =
    useInfiniteQuery(
      ['sw-people'],
      ({ pageParam }) => fetchPeople({ page: pageParam }),
      {
        getNextPageParam: (currentPageData) => {
          const nextUrl = currentPageData.next;
          const page = (nextUrl && nextUrl.split('=')[1]) || undefined;
          return page;
        },
      }
    );

  if (isLoading) return <S.Loader>Loading...</S.Loader>;

  return (
    <PageWrapper title="StarWars People">
      <S.Container>
        {data && (
          <InfiniteScroll
            hasMore={!!hasNextPage}
            loadMore={() => fetchNextPage()}
          >
            {data.pages.map((page) =>
              page.results?.map((people) => (
                <Card key={people.name} {...people} />
              ))
            )}
          </InfiniteScroll>
        )}
        {isFetchingNextPage ? (
          <S.Loader className="more">Loading more...</S.Loader>
        ) : (
          <S.Loader className="nothing">Nothing more to load</S.Loader>
        )}
      </S.Container>
    </PageWrapper>
  );
}

export default People;
