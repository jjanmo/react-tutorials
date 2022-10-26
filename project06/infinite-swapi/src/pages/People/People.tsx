import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchPeople } from '@apis/starwars';
import Card from './People.Card';
import * as S from './People.style';
import PageWrapper from '@components/PageWrapper/PageWrapper';

function People() {
  const { data, hasNextPage, fetchNextPage } = useInfiniteQuery(
    ['sw-people'],
    fetchPeople,
    {
      getNextPageParam: (currentPageData) => currentPageData.next,
    }
  );

  console.log('🙏', data, hasNextPage, fetchNextPage);

  return (
    <PageWrapper title="StarWars People">
      <S.Container>
        {data?.pages.map((page) =>
          page.results.map((people) => <Card {...people} />)
        )}
      </S.Container>
    </PageWrapper>
  );
}

export default People;
