import React from "react";
import { Box, Container, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Heading, Text } from "@chakra-ui/react";

const FAQ = [
  {
    question: "What is the return policy?",
    answer: "Our return policy is 30 days. If 30 days have gone by since your purchase, unfortunately, we can’t offer you a refund or exchange.",
  },
  {
    question: "How do I track my order?",
    answer: "Once your order is shipped, we will send you an email with the tracking number and a link to track the package.",
  },
  {
    question: "Can I cancel or change my order?",
    answer: "We start working on your order as soon as it is placed, so there is a limited time during which you can cancel or modify it. Please contact us immediately if you would like to make any changes.",
  },
  {
    question: "Do you ship internationally?",
    answer: "Yes, we ship to most countries worldwide. International shipping rates will apply.",
  },
  {
    question: "How can I contact customer service?",
    answer: "Our customer service team can be reached by email at support@example.com or by phone at 1-800-123-4567 during business hours.",
  },
];

const Index = () => {
  return (
    <Container maxW="container.md" mt={10}>
      <Heading as="h1" mb={5}>
        Frequently Asked Questions
      </Heading>
      <Accordion allowMultiple>
        {FAQ.map((faqItem, index) => (
          <AccordionItem key={index}>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  {faqItem.question}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Text>{faqItem.answer}</Text>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Container>
  );
};

export default Index;
