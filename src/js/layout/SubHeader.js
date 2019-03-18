// @flow
import * as React from 'react';
import debounce from 'lodash.debounce';
import SubHeaderLeft from '../components/SubHeaderLeft';

type Props = {
  products: Array<any>,
  actions: {
    setSearchFilter: (query: string) => void,
    setOnSaleFilter: (onSale: boolean) => void
  }
};

function SubHeader({ products, actions }: Props) {
  const dispatchSearch = React.useCallback(
    debounce((query: string) => {
      actions.setSearchFilter(query);
    }, 500)
  );

  const onChangeSearch = React.useCallback(
    (event: SyntheticEvent<HTMLInputElement>) => {
      dispatchSearch(event.currentTarget.value);
    }
  );

  const onChangeOnSale = React.useCallback(
    (event: SyntheticEvent<HTMLInputElement>) => {
      actions.setOnSaleFilter(event.currentTarget.checked)
    }
  );

  React.useEffect(() => () => {
    //cancel debounce when component will unmount or right before update
    dispatchSearch.cancel();
  });

  return (
    <div className="sub-header">
      <SubHeaderLeft productsSize={products.length}/>

    </div>
  );
}

export default SubHeader;
