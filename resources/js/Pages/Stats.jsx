import { Head } from "@inertiajs/react";
import Navbar from "@/components/Navbar";
import React from "react";
import { Bar, Pie } from "recharts";
import {
    BarChart,
    Bar as RechartsBar,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    PieChart,
    Pie as RechartsPie,
    Cell,
} from "recharts";

const SalesDashboard = ({ orders, lastOrders, user, login }) => {
    // Aggregate data for charts
    const categoryAggregate = orders.reduce((acc, order) => {
        const existing = acc.find((item) => item.category === order.category);
        if (existing) {
            existing.total += order.price;
        } else {
            acc.push({
                category: order.category,
                total: order.price,
            });
        }
        return acc;
    }, []);

    const variantAggregate = orders.reduce((acc, order) => {
        const existing = acc.find((item) => item.variant === order.variant);
        if (existing) {
            existing.total += order.price;
        } else {
            acc.push({
                variant: order.variant,
                total: order.price,
            });
        }
        return acc;
    }, []);

    // Color palette
    const COLORS = [
        "#0088FE",
        "#00C49F",
        "#FFBB28",
        "#FF8042",
        "#8884D8",
        "#FF6384",
    ];

    return (
        <>
            <Head title="Statistik" />
            <div className="bg-slate-950 text-white">
                <Navbar user={user} login={login} />
                <div className="p-6 min-h-screen">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Category Sales Chart */}
                        <div className="bg-slate-800 rounded-lg shadow-lg p-4">
                            <h2 className="text-xl font-semibold mb-4 text-white">
                                Sales by Category
                            </h2>
                            <BarChart
                                width={500}
                                height={300}
                                data={categoryAggregate}
                            >
                                <XAxis dataKey="category" stroke="#ffffff" />
                                <YAxis stroke="#ffffff" />
                                <Tooltip
                                    contentStyle={{
                                        backgroundColor: "#333",
                                        color: "#fff",
                                    }}
                                />
                                <Legend wrapperStyle={{ color: "#fff" }} />
                                <RechartsBar dataKey="total" fill="#00C49F" />
                            </BarChart>
                        </div>

                        {/* Variant Sales Pie Chart */}
                        <div className="bg-slate-800 rounded-lg shadow-lg p-4">
                            <h2 className="text-xl font-semibold mb-4 text-white">
                                Sales by Variant
                            </h2>
                            <PieChart width={500} height={300}>
                                <RechartsPie
                                    data={variantAggregate}
                                    dataKey="total"
                                    nameKey="variant"
                                    cx="50%"
                                    cy="50%"
                                    outerRadius={100}
                                >
                                    {variantAggregate.map((entry, index) => (
                                        <Cell
                                            key={`cell-${index}`}
                                            fill={COLORS[index % COLORS.length]}
                                        />
                                    ))}
                                </RechartsPie>
                                <Tooltip
                                    contentStyle={{
                                        backgroundColor: "#333",
                                        color: "#fff",
                                    }}
                                />
                                <Legend wrapperStyle={{ color: "#fff" }} />
                            </PieChart>
                        </div>
                    </div>

                    {/* Last Orders Table */}
                    <div className="bg-slate-800 rounded-lg shadow-lg p-4 mt-6">
                        <h2 className="text-xl font-semibold mb-4 text-white">
                            Last 10 Orders
                        </h2>
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="bg-slate-900 border-b border-slate-700">
                                        <th className="p-3 text-left text-gray-300">
                                            Name
                                        </th>
                                        <th className="p-3 text-left text-gray-300">
                                            Category
                                        </th>
                                        <th className="p-3 text-left text-gray-300">
                                            Variant
                                        </th>
                                        <th className="p-3 text-right text-gray-300">
                                            Price
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {lastOrders
                                        .slice(0, 10)
                                        .map((order, index) => (
                                            <tr
                                                key={index}
                                                className="border-b border-slate-700 hover:bg-slate-900"
                                            >
                                                <td className="p-3 text-gray-300">
                                                    {order.name}
                                                </td>
                                                <td className="p-3 text-gray-300">
                                                    {order.category}
                                                </td>
                                                <td className="p-3 text-gray-300">
                                                    {order.variant}
                                                </td>
                                                <td className="p-3 text-right text-gray-300">
                                                    {new Intl.NumberFormat(
                                                        "id-ID",
                                                        {
                                                            style: "currency",
                                                            currency: "IDR",
                                                        }
                                                    ).format(order.price)}
                                                </td>
                                            </tr>
                                        ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SalesDashboard;
