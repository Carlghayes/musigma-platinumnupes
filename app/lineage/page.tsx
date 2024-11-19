"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const lineageData = [
  {
    lineName: "Founding Fathers",
    crossDate: "Spring 1985",
    members: ["John Smith", "Michael Johnson", "William Brown"],
  },
  {
    lineName: "Legacy Lions",
    crossDate: "Fall 1950",
    members: ["Robert Davis", "James Wilson", "David Miller"],
  },
  {
    lineName: "Visionary Vanguard",
    crossDate: "Spring 1951",
    members: ["Thomas Anderson", "Christopher Lee", "Joseph Taylor"],
  },
];

export default function LineagePage() {
  return (
    <div className="container py-10">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Chapter Lineage</h1>
        <Card>
          <CardContent className="p-6">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Line Name</TableHead>
                  <TableHead>Cross Date</TableHead>
                  <TableHead>Members</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {lineageData.map((line) => (
                  <TableRow key={line.lineName}>
                    <TableCell className="font-medium">{line.lineName}</TableCell>
                    <TableCell>{line.crossDate}</TableCell>
                    <TableCell>{line.members.join(", ")}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}