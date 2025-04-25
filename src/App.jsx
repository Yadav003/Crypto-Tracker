import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updatePrices } from './features/crypto/cryptoSlice';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const assets = useSelector((state) => state.crypto.assets);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(updatePrices());
    }, 2000);

    return () => clearInterval(interval);
  }, [dispatch]);

  return (
    <div className="container">
      <h1>Crypto Price Tracker</h1>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Logo</th>
              <th>Name</th>
              <th>Symbol</th>
              <th>Price</th>
              <th>1h %</th>
              <th>24h %</th>
              <th>7d %</th>
              <th>Market Cap</th>
              <th>24h Volume</th>
              <th>Circulating Supply</th>
              <th>Max Supply</th>
              <th>7D Chart</th>
            </tr>
          </thead>
          <tbody>
            {assets.map((asset, index) => (
              <tr key={asset.id}>
                <td>{index + 1}</td>
                <td><img src={asset.logo} alt={asset.symbol} width={30} /></td>
                <td>{asset.name}</td>
                <td>{asset.symbol}</td>
                <td>${asset.price.toLocaleString()}</td>
                <td style={{ color: asset.percentChange1h >= 0 ? 'green' : 'red' }}>
                  {asset.percentChange1h}%
                </td>
                <td style={{ color: asset.percentChange24h >= 0 ? 'green' : 'red' }}>
                  {asset.percentChange24h}%
                </td>
                <td style={{ color: asset.percentChange7d >= 0 ? 'green' : 'red' }}>
                  {asset.percentChange7d}%
                </td>
                <td>${asset.marketCap.toLocaleString()}</td>
                <td>${asset.volume24h.toLocaleString()}</td>
                <td>{asset.circulatingSupply}</td>
                <td>{asset.maxSupply}</td>
                <td><img src={asset.chart} alt="chart" width={100} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
