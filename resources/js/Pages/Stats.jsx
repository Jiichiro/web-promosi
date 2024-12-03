import React from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  PointElement, 
  LineElement, 
  BarElement, 
  Title, 
  Tooltip, 
  Legend 
} from 'chart.js';

// Registrasi komponen Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const SalesDashboard = ({ 
  products = [], 
  salesData = []
}) => {
  // Transformasi data produk untuk chart
  const processProductData = () => {
    // Kelompokkan penjualan berdasarkan kategori
    const categorySales = products.reduce((acc, product) => {
      const category = product.category;
      acc[category] = (acc[category] || 0) + product.price;
      return acc;
    }, {});

    return {
      labels: Object.keys(categorySales),
      datasets: [{
        label: 'Penjualan per Kategori',
        data: Object.values(categorySales),
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)'
        ]
      }]
    };
  };

  // Transformasi data penjualan untuk line chart
  const processSalesData = () => {
    return {
      labels: salesData.map(data => data.month),
      datasets: [{
        label: 'Penjualan Bulanan',
        data: salesData.map(data => data.total),
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
      }]
    };
  };

  // Hitung total penjualan
  const totalSales = products.reduce((sum, product) => sum + product.price, 0);

  // Temukan produk terlaris
  const bestSellingProduct = products.reduce((best, current) => 
    (current.price > best.price) ? current : best
  , products[0]);

  // Opsi chart
  const getChartOptions = (title) => ({
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: title,
      }
    }
  });

  return (
    <div className="container mx-auto p-6 bg-gray-100 font-sans">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Dasbor Statistik Penjualan
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <Line 
            data={processSalesData()} 
            options={getChartOptions('Statistik Penjualan Bulanan')} 
          />
        </div>
        
        <div className="bg-white shadow-lg rounded-lg p-6">
          <Bar 
            data={processProductData()} 
            options={getChartOptions('Penjualan per Kategori')} 
          />
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-blue-100 p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold">Total Penjualan</h2>
          <p className="text-2xl font-bold text-blue-600">
            Rp {totalSales.toLocaleString()}
          </p>
        </div>
        
        <div className="bg-green-100 p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold">Produk Terlaris</h2>
          <p className="text-2xl font-bold text-green-600">
            {bestSellingProduct?.name || 'Tidak ada data'}
          </p>
        </div>
        
        <div className="bg-purple-100 p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold">Kategori Utama</h2>
          <p className="text-2xl font-bold text-purple-600">
            {bestSellingProduct?.category || 'Tidak ada data'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SalesDashboard;