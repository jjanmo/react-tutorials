/**
 * 테스팅 시나리오
 * [ ] 페이지네이션 컴퍼넌트가 제대로 랜더링 된다
 * [ ] 페이지를 누르면 해당페이지로 이동한다 →
 * [ ] 1페이지에서 prev버튼을 누르면 페이지가 변하지 않는다
 * [ ] 2페이지에서 prev버튼을 누르면 1페이지로 이동한다
 * [ ] 마지막페이징에서 next버튼을 누르면 페이지가 변하지 않는다
 * [ ] 2페이지에서 next버튼을 누르면 3페이지로 이동한다
 */

import { render, screen } from '@testing-library/react';
import Pagination from './Pagination';

describe('Pagination', () => {
  test('페이지네이션 컴퍼넌트가 제대로 랜더링 된다', () => {
    render(<Pagination totalItems={100} itemsPerPage={10} />);

    const allButtons = screen.getAllByRole('button');
    const pageButtons = allButtons.filter((button) => button.classList.contains('page-button'));

    expect(pageButtons).toHaveLength(10);
    pageButtons.forEach((button, index) => {
      expect(button).toHaveTextContent((index + 1).toString());
    });
  });
});
