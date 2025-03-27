import React from 'react';

const FeatureSection = () => {
    const features = [
        {
            title: "Fast Delivery",
            description: "Get your products delivered within 24 hours!",
            icon: "🚀"
        },
        {
            title: "Best Quality",
            description: "We ensure the best quality for all our products.",
            icon: "✅"
        },
        {
            title: "Secure Payments",
            description: "Multiple secure payment options available.",
            icon: "🔒"
        },
        {
            title: "24/7 Support",
            description: "We're here to assist you anytime, anywhere!",
            icon: "📞"
        }
    ];

    return (
        <div className="bg-gray-100 py-12">
            <h2 className="text-center text-3xl font-bold text-gray-800 mb-8">Why Shop With Us?</h2>
            <div className="flex flex-wrap justify-center gap-6 px-4">
                {features.map((feature, index) => (
                    <div key={index} className="bg-white shadow-lg rounded-lg p-6 w-64 text-center transition transform hover:scale-105">
                        <div className="text-4xl mb-3">{feature.icon}</div>
                        <h3 className="text-xl font-semibold text-gray-800">{feature.title}</h3>
                        <p className="text-gray-600 mt-2">{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeatureSection;
