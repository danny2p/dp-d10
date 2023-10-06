import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import { useState, useEffect } from 'react'
import { Nav } from '.'
import {
  CommerceLayer,
  OrderContainer,
  PricesContainer,
  Price,
  AddToCartButton,
  LineItemsContainer,
  LineItem,
  LineItemImage,
  LineItemName,
  LineItemQuantity,
  LineItemAmount,
  LineItemRemoveLink,
  LineItemsCount,
  LineItemsEmpty,
  CheckoutLink,
  SubTotalAmount,
  TotalAmount,
  DiscountAmount,
  Errors,
  OrderStorage,
  CartLink
} from '@commercelayer/react-components'

const root = ReactDOM.createRoot(document.getElementById('cl-product-price'));
const token = drupalSettings.commerceLayerAuthToken;
const apiUrl = drupalSettings.commerceLayerApiUrl;


root.render(
    <CommerceLayer accessToken={token} endpoint={apiUrl}>
      <OrderStorage persistKey="orderUS">
        <OrderContainer
          attributes={{
            cart_url: 'http://dp-d10.lndo.site/cart',
            return_url: 'http://dp-d10.lndo.site/return'
          }}>
          <div id="product-list" class="product-list">
            <h2>The Magic Doorknob</h2>
            <img src="https://cl-dp-d10.pantheonsite.io/sites/default/files/antique-doorknob.jpg" class="product-image" />
            <div class="prices">
              <PricesContainer>
                <Price
                  skuCode="dd-1111"
                  className="price-wrapper"
                  compareClassName="price-compare"
                />
              </PricesContainer>  
              <AddToCartButton
                skuCode='dd-1111'
                quantity='1'
                data-test='add-to-cart-button'
                className='add-to-cart-button'
              />
              </div>
          </div>
          <div id='shopping-cart' class='shopping-cart'>
            <h3 className='shopping-cart'>Shopping Cart</h3>
            <LineItemsContainer>
              <p className='text-sm m-2'>
                Your shopping cart contains{' '}
                <LineItemsCount
                  data-test='items-count'
                  className='font-bold'
                />{' '}
                items
              </p>
              <div className='flex flex-col p-2'>
              <LineItemsEmpty data-test='line-items-empty' />
                <LineItem>
                  <div className='flex justify-around items-center border-b p-5'>
                    <LineItemImage className='p-2' width={80} />
                    <LineItemName
                      data-test='line-item-name'
                      className='p-2'
                    />
                    <LineItemQuantity
                      data-test='line-item-quantity'
                      max={100}
                      className='p-2'
                    />
                    <Errors
                      className='text-red-700 p-2'
                      resource='line_items'
                      field='quantity'
                    />
                    <LineItemAmount
                      data-test='line-item-total'
                      className='p-2'
                    />
                    <LineItemRemoveLink
                      data-test='line-item-remove'
                      className='remove'
                    />
                  </div>
                </LineItem>
              </div>
            </LineItemsContainer>
          </div>
      </OrderContainer>
    </OrderStorage>
  </CommerceLayer>
);

