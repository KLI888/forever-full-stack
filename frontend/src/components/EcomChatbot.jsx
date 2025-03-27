import React, { useState } from "react";

const faqData = {
  "Product-Related Questions": {
    "What products do you offer?": "We offer a wide range of products including electronics, clothing, accessories, and home essentials.",
    "How do I search for a product?": "Use the search bar at the top of the page to enter keywords or product names.",
    "Are the products genuine?": "Yes, we ensure all products listed are authentic and sourced from verified suppliers.",
    "How can I check product availability?": "Availability is displayed on the product page. If out of stock, it will be clearly mentioned.",
    "Can I get product recommendations?": "Yes, based on your browsing history and preferences, we suggest relevant products.",
    "Do you offer product customization?": "Yes, select products are available for customization. Check the product page for options.",
    "How do I know if a product is eco-friendly?": "Look for the 'Eco-Friendly' label on product pages.",
    "Can I request a product that is not listed?": "Yes, contact support, and we'll try to source it for you.",
    "Do you sell gift cards?": "Yes, digital gift cards are available in various denominations.",
    "How do I view product reviews?": "Scroll to the product's page bottom to see customer reviews and ratings."
  },
  "Order-Related Questions": {
    "How do I place an order?": "Select your product, add it to your cart, and proceed to checkout.",
    "Can I modify my order after placing it?": "Orders can be modified within 1 hour of placement through your order history.",
    "How can I track my order?": "Go to 'My Orders' and select the order to track real-time delivery status.",
    "What if I receive the wrong item?": "Contact support immediately for a free return or replacement.",
    "Can I cancel my order?": "Orders can be canceled before they are shipped via 'My Orders' section.",
    "Can I change my delivery address after placing an order?": "Address changes are allowed only before the order is shipped.",
    "What happens if I miss my delivery?": "Our courier will attempt redelivery or contact you for further instructions.",
    "Do you offer bulk order discounts?": "Yes, contact our support team for bulk order inquiries and discounts.",
    "Can I reorder a previous purchase?": "Yes, go to 'Order History' and select 'Reorder' for convenience.",
    "What if my order is delayed?": "You will receive updates via email/SMS. Contact support for assistance."
  }
};

const EcommerceChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    if (!input.trim()) return;
    const userMessage = input.trim();
    let botResponse = "I'm sorry, I don't understand that question.";

    for (const category in faqData) {
      for (const question in faqData[category]) {
        if (question.toLowerCase() === userMessage.toLowerCase()) {
          botResponse = faqData[category][question];
          break;
        }
      }
    }

    setMessages([...messages, { sender: "user", text: userMessage }, { sender: "bot", text: botResponse }]);
    setInput("");
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full shadow-lg transition"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "Close Chat" : "Chat with us"}
      </button>
      {isOpen && (
        <div className="w-80 bg-gray-900 text-white p-4 rounded-lg shadow-xl fixed bottom-16 right-4 border border-gray-700">
          <div className="h-64 overflow-y-auto border-b border-gray-700 p-2 space-y-2">
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                <span
                  className={`px-3 py-1 rounded-md max-w-xs inline-block ${msg.sender === "user" ? "bg-blue-500" : "bg-gray-700"}`}
                >
                  {msg.text}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-2 flex">
            <input
              type="text"
              className="flex-1 p-2 bg-gray-800 border border-gray-600 rounded-l-md text-white focus:outline-none"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question..."
            />
            <button
              className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-md transition"
              onClick={handleSendMessage}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EcommerceChatbot;