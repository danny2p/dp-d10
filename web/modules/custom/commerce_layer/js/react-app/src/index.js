import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  CommerceLayer,
  OrderContainer,
  OrderStorage,
  PricesContainer,
  Price,
  AddToCartButton,
  AvailabilityContainer,
  AvailabilityTemplate
} from '@commercelayer/react-components'

const root = ReactDOM.createRoot(document.getElementById('cl-product-price'));
const token = drupalSettings.commerceLayerAuthToken;
const apiUrl = drupalSettings.commerceLayerApiUrl;

root.render(
    <CommerceLayer accessToken={token} endpoint={apiUrl}>
      <OrderStorage persistKey="123456">
        <OrderContainer>
          <PricesContainer>
            <Price
              skuCode="dd-1111"
              className="price-wrapper"
              compareClassName="price-compare"
            />
          </PricesContainer>
          <AddToCartButton skuCode="dd-1111" />
          <AvailabilityContainer skuCode="dd-1111">
            <AvailabilityTemplate skuCode="dd-1111" />
          </AvailabilityContainer>
      </OrderContainer>
    </OrderStorage>
  </CommerceLayer>
);

