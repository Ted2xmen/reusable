import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type CustomTabsProps = {
  data: { title: string; content: string; value: string }[];
};

export function CustomTabs({ data }: CustomTabsProps) {
  return (
    <Tabs defaultValue={data[0].value} className="w-full">
      <TabsList className="w-full flex justify-between">
        {data?.map(({ title, value }, i) => {
          return (
            <TabsTrigger key={i} value={value} className="w-full">
              {title}
            </TabsTrigger>
          );
        })}
      </TabsList>

      {data.map(({ content, value }, i) => {
        return (
          <TabsContent key={i} value={value} className="border p-5">
            {content}
          </TabsContent>
        );
      })}
    </Tabs>
  );
}
