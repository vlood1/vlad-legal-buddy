import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion.tsx";

const Index = () => {
  return (
    <div> 
      <Accordion type="single" collapsible className="w-full max-w-md mx-auto mt-10">
        <AccordionItem value="item-1">
          <AccordionTrigger>What is your return policy?</AccordionTrigger>
          <AccordionContent>
            Our return policy lasts 30 days. If 30 days have gone by since your purchase, unfortunately we can’t offer you a refund or exchange.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Index;