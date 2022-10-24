import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchPeople } from '@apis/index';

function PeopleScroll() {
  const { data, hasNextPage, fetchNextPage } = useInfiniteQuery(
    ['sw-people'],
    fetchPeople,
    {
      getNextPageParam: (currentPageData) => currentPageData.next,
    }
  );

  console.log('🙏', data, hasNextPage, fetchNextPage);

  return (
    <div>
      {data?.pages.map((page) =>
        page.results.map((people) => <div>{people.name}</div>)
      )}
    </div>
  );
}

export default PeopleScroll;
