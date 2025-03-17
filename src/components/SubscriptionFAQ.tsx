
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const SubscriptionFAQ = () => {
  const faqs = [
    {
      question: "How do I change my subscription plan?",
      answer: "You can easily change your subscription plan at any time from your account settings. The changes will take effect at the start of your next billing cycle."
    },
    {
      question: "Can I cancel my subscription?",
      answer: "Yes, you can cancel your subscription at any time from your account settings. You'll continue to have access to your subscription benefits until the end of your current billing period."
    },
    {
      question: "Are there any long-term commitments?",
      answer: "No, our subscriptions are billed monthly or yearly with no long-term commitment. You can cancel anytime without penalty."
    },
    {
      question: "How do the expert consultations work?",
      answer: "With eligible subscription plans, you'll receive access to our network of nutrition and fitness experts. You can book consultations through your dashboard based on the allowance in your plan."
    },
    {
      question: "What happens when my free trial ends?",
      answer: "When your free trial ends, your selected plan will automatically begin and you'll be billed according to your chosen billing cycle (monthly or yearly)."
    },
    {
      question: "Do you offer discounts for students or healthcare workers?",
      answer: "Yes, we offer special pricing for students, educators, and healthcare professionals. Please contact our support team with valid credentials to apply for these discounts."
    },
  ];

  return (
    <section className="my-16 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
            <AccordionContent>
              <p className="text-muted-foreground">{faq.answer}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default SubscriptionFAQ;
