// @flow
import React from 'react';
import SubHeaderLeft from '../components/SubHeaderLeft';
import SubHeaderRight from '../components/SubHeaderRight';

type Props = {
  productsSize: number,
  actions: {
    setSearchFilter: (query: string) => void,
    setOnSaleFilter: (onSale: boolean) => void
  }
};

function SubHeader({ productsSize, actions }: Props) {
  return (
    <div className="sub-header">
      <SubHeaderLeft productsSize={productsSize}/>
      <SubHeaderRight setSearchFilter={actions.setSearchFilter}
                      setOnSaleFilter={actions.setOnSaleFilter}/>
    </div>
  );
}

export default React.memo<Props>(
  SubHeader,
  (prevProps: Props, nextProps) => {
    return prevProps.productsSize === nextProps.productsSize
  }
);
