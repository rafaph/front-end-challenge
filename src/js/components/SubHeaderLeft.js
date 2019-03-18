// @flow
import * as React from 'react';

type Props = {
  productsSize: number,
};

function SubHeaderLeft({ productsSize }: Props) {
  return (
    <div className="sub-header--left">
      <div className="sub-header__items">
        <span className="sub-header__items-value">{productsSize}</span>
        <span className="sub-header__items-unit">item(s)</span>
      </div>
    </div>
  );
}

function areEqual(prevProps: Props, nextProps: Props) {
  return prevProps.productsSize === nextProps.productsSize;
}

export default React.memo<Props>(SubHeaderLeft, areEqual);
