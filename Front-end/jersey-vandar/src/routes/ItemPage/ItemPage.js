import React from 'react';
import { ItemCard } from '../../components/ItemCard/ItemCard';
import { useGetAllItem } from '../../hooks/useGetAllItem';
import './ItemPage.css';
import Nav from 'react-bootstrap/Nav';

export const ItemPage = () => {
  const { footballItems, cricketItems, customeItems } = useGetAllItem();
  console.log('football items', footballItems);

  return (
    <div>
      <div className="d-flex justify-content-center m-4">
        <Nav>
          <Nav.Link href="#footballItem" className="fs-5 link-color">
            Football items
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#crickteItem" className="fs-5 link-color">
            Cricket items
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#customeItem" className="fs-5 link-color">
            Custome items
          </Nav.Link>
        </Nav>
      </div>

      <div className="d-flex justify-content-center mb-5 item-slide-in">
        <div className="container row card-body shadow-lg p-4">
          <h4 id="footballItem" className="m-4">
            Football items
          </h4>
          {footballItems.map((data) => (
            <ItemCard key={data.id} itemData={data} />
          ))}
        </div>
      </div>
      <div className="d-flex justify-content-center mb-5 item-slide-in">
        <div className="container row card-body shadow-lg p-4">
          <h4 id="crickteItem" className="m-4">
            Cricket items
          </h4>
          {cricketItems.map((data) => (
            <ItemCard key={data.id} itemData={data} />
          ))}
        </div>
      </div>
      <div className="d-flex justify-content-center mb-5 item-slide-in">
        <div className="container row card-body shadow-lg p-4">
          <h4 id="customeItem" className="m-4">
            Custome items
          </h4>
          {customeItems.map((data) => (
            <ItemCard key={data.id} itemData={data} />
          ))}
        </div>
      </div>
    </div>
  );
};
