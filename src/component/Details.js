import React, { Component } from 'react';
import {ProductConsumer} from '../Context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';
import styled from 'styled-components';

class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => {
                    const { id, company, img, info, price, title, inCart} = value.detailProduct;
                 return (
                      <div className="container">
                          <div className="row">
                              <div className="col-10 mx-auto col-md-6 my-3 text-center">
                                  <img src={img} className="img-fluid" alt="product" />
                              </div>
                                <div className="col-10 mx-auto text-center text-slanted text-capitalize text-blue my-5">
                                    <h1>Model : {title}</h1>
                                    <h4 className="text-title-uppercase text-muted mt-3 mb-2">made by : 
                                        <span className="text-uppercase">
                                            {company}
                                        </span>
                                    </h4>
                                    <h4 className="text-blue"><strong>price : <span>Rp.</span> {price}</strong></h4>
                                    <p className="text-capitalize font-weight-bold mt-3 mb-0">some info about product :</p>
                                    <p className="text-muted lead">{info}</p>
                                    <div>
                                    <ButtonR> 
                                        {/* Menubah button pada halaman detail agar tidak mengambil desain button.js */}
                                            <Link to="/">
                                            <ButtonContainer className="btn-btn mr-2">
                                                    Back to Product
                                            </ButtonContainer>
                                            </Link>
                                            <ButtonContainer
                                                className="btn-btn"
                                                cart
                                                disabled={inCart ? true : false}
                                                onClick={() => {
                                                    value.addToCart(id);
                                                    value.openModal(id);
                                                }}
                                            >
                                                {inCart ? "In Cart" : "Add to Cart"}
                                            </ButtonContainer>
                                        </ButtonR>
                                    </div>
                                </div>
                          </div>
                      </div>
                  )
                }}
                    
            </ProductConsumer>
        );
    }
}

export default Details;

const ButtonR = styled.div`
    .btn-btn{
        color: var(--mainBlue);
        border-radius: 10px;
        border: 2px solid var(--mainBlue);
    }
`;