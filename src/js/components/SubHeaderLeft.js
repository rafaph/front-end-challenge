// @flow
import React from 'react';
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

export default React.memo<Props>(
  SubHeaderLeft,
  (prevProps: Props, nextProps) => {
    return prevProps.productsSize === nextProps.productsSize
  }
);
