import BeautifulFAQ from "./FAQ";

export default function FAQData() {
  const faqData = [
    {
      question: "What is the return policy?",
      answer:
        "We offer a 30-day money-back guarantee for all our products. If you're not satisfied, you can return the item for a full refund, no questions asked.",
    },
    {
      question: "How long does shipping take?",
      answer:
        "Shipping times vary depending on your location. Typically, domestic orders are delivered within 3-5 business days, while international orders may take 7-14 business days.",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Yes, we ship to over 100 countries worldwide. Shipping costs and delivery times may vary depending on the destination.",
    },
    {
      question: "How can I track my order?",
      answer:
        "Once your order is shipped, you'll receive a confirmation email with a tracking number. You can use this number to track your package on our website or the carrier's site.",
    },
  ];
  return (
    <div>
      <BeautifulFAQ faqData={faqData} />
    </div>
  );
}
