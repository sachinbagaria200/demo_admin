import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { columns } from './components/columns';
import { DataTable } from './components/data-table';
import { tasks } from './data/tasks';

export default function Dashboard() {
  return (
    <div className="container p-8">
      <h3 className="text-3xl text-heading font-bold mb-4">Hi, Jason</h3>
      <div className="rounded-md border bg-card text-card-foreground shadow">
        <h3 className="text-3xl text-heading font-bold p-5">Today's Activities</h3>
        <Tabs defaultValue="account" className="p-5">
          <TabsList>
            <TabsTrigger className="group" value="account">
              Manor
              <span
                className="bg-gray-300 text-white group-data-[state=active]:bg-white ml-1 px-2.5 py-1 rounded-md group-data-[state=active]:text-red-500"
              >
                23
              </span>
            </TabsTrigger>
            <TabsTrigger className="group" value="password">
              Ashbury
              <span
                className="bg-gray-300 text-white group-data-[state=active]:bg-white ml-1 px-2.5 py-1 rounded-md group-data-[state=active]:text-red-500"
              >
                54
              </span>
            </TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <DataTable data={tasks} columns={columns} />
          </TabsContent>
          <TabsContent value="password">Change your password here.</TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
