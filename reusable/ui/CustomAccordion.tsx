import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type CustomAccordionProps = {
  type: "single" | "multiple";
  collapsible?: boolean;
  data: { value: string; title: string; content: string }[];
};

export function CustomAccordion({
  type,
  collapsible,
  data,
}: CustomAccordionProps) {
  return (
    <Accordion type={type} collapsible={collapsible} className="w-full">
      {data?.map(({ title, content, value }, i: number) => {
        return (
          <AccordionItem key={i} value={value}>
            <AccordionTrigger>{title}</AccordionTrigger>
            <AccordionContent>{content}</AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}
