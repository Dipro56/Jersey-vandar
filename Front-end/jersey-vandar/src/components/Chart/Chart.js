import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import { useGetAllItem } from '../../hooks/useGetAllItem';

export const Chart = () => {
  const { cricketItems, footballItems, customeItems } = useGetAllItem();

  return (
    <div className="row d-flex justify-content-center align-items-center container-fluid">
      <h4 className="text-center m-5">Current Product Ratio</h4>
      <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center align-items-center">
        <PieChart
          data={[
            {
              title: 'Football items',
              value: footballItems?.length,
              color: '#E0D90A',
            },
            {
              title: 'Cricket items',
              value: cricketItems?.length,
              color: '#D8120C',
            },
            {
              title: 'Custome items',
              value: customeItems?.length,
              color: '#0D7C1C',
            },
          ]}
        />
      </div>
      <div className="col-lg-2 col-md-4 col-sm-4  align-items-center justify-content-center ps-5">
        <div className="ms-4 mt-4">
          <h4 className="text-start">Details</h4>
          <div className="d-flex justify-content-start align-items-center">
            <div
              style={{
                backgroundColor: '#E0D90A',
                height: '20px',
                width: '20px',
              }}
            ></div>
            <div className="mt-3 ms-2">
              <p>
                Football{' '}
                {(
                  (
                    footballItems?.length /
                    (footballItems?.length +
                      cricketItems?.length +
                      customeItems?.length)
                  ).toFixed(2) * 100
                ).toFixed(2)}{' '}
                %
              </p>
            </div>
          </div>
          <div className="d-flex justify-content-start align-items-center">
            <div
              style={{
                backgroundColor: '#D8120C',
                height: '20px',
                width: '20px',
              }}
            ></div>
            <div className="mt-3 ms-2">
              <p>
                Cricket{' '}
                {(
                  (cricketItems?.length /
                    (footballItems?.length +
                      cricketItems?.length +
                      customeItems?.length)) *
                  100
                ).toFixed(2)}{' '}
                %
              </p>
            </div>
          </div>
          <div className="d-flex justify-content-start align-items-center">
            <div
              style={{
                backgroundColor: '#0D7C1C',
                height: '20px',
                width: '20px',
              }}
            ></div>
            <div className="mt-3 ms-2">
              <p>
                Custome{' '}
                {(
                  (customeItems?.length /
                    (footballItems?.length +
                      cricketItems?.length +
                      customeItems?.length)) *
                  100
                ).toFixed(2)}{' '}
                %
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
