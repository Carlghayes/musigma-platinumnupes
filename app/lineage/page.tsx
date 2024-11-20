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
    lineName: "New Edition",
    crossDate: "Spring 1985",
    members: ["Reginald Ransom", "Gene Sublet", "Victor Edmond", "Ken Holmes", "Rickey Scott", "Michael Pollard", "Terry Sylvester", "John Vallier", "George Redmon", "Mark Deckard", "Leslie Wilson", "Kevin Washington"],
  },
  {
    lineName: "Lords of Discipline",
    crossDate: "Spring 1987",
    members: ["Tony Newsom", "Calvin Neal", "Tony Wylie", "Jerry Woods", "Garry Matthews"],
  },
  {
    lineName: "2 The Administrative Way",
    crossDate: "Fall 1987",
    members: ["Abe Jernigan", "Rodney Jernigan"],
  },
  {
    lineName: "Diamond Duo",
    crossDate: "Spring 1988",
    members: ["Patrick Jackson", "Stevie Hicks"],
  },
  {
    lineName: "Six Signs of A Hostile Takeover",
    crossDate: "Spring 1990",
    members: ["Dirrick Butler", "Kirk Nobles", "Kenneth Nobles", "Bobbie Culberson", "Frank Milton", "Timothy Cavitt"],
  },
  {
    lineName: "Ten Elements of A Nuclear Meltdown",
    crossDate: "Spring 1991",
    members: ["Damian McDonald", "Keith Nobles", "Markus Lewis", "Dennis Oliver", "Augustine Mulatalla", "Terrance Archie", "Anthony McClemore", "Kendall Tolbert", "Foster Roughly", "Ron Clark"],
  },
  {
    lineName: "Double Impact",
    crossDate: "Spring 1992",
    members: ["Nico Robinson", "Michael Richardson"],
  },
  {
    lineName: "Total Recall",
    crossDate: "Fall 1992",
    members: ["Marlin Ford", "Marcus Stratford"],
  },
  {
    lineName: "Lords Of The Underground",
    crossDate: "Fall 1993",
    members: ["Rod Hanks", "Dean Martin", "Kenneth Taylor"],
  },
  {
    lineName: "Life After Death",
    crossDate: "Spring 1997",
    members: ["Norjuan Austin", "Mark Shavers", "Chris Roberson", "Quan Harris", "Rod Sadberry", "Curtis Brooks", "Craig Stallings"],
  },
  {
    lineName: "Platinum Playboys",
    crossDate: "Fall 1997",
    members: ["Sean Bradley", "Brian Remo", "Larry Brooks", "Pepe Bridges", "Christopher Sam", "Roderick Jaquet", "Corey James", "Micah Love", "Ric Davis"],
  },
  {
    lineName: "Five Elements of Achievement",
    crossDate: "Fall 1998",
    members: ["Travis Young", "Michael Smith", "Kevin Ards", "Rodney Covington", "Jason Green"],
  },
  {
    lineName: "Dirty Dozen",
    crossDate: "Fall 1999",
    members: ["Atlantis Williams", "Jo Jo Arthur", "Cory Green", "Lyn Derrick Williams", "Michael Carrier", "Coleman Chandler", "Jeff Guidry", "Dontray Hyder", "Kenneth Vickers", "Kory Walker", "Ayodele Taylor-Dixson", "Anthony Key"],
  },
  {
    lineName: "Ten Nupes of A Nu Breed",
    crossDate: "Fall 2000",
    members: ["Damian Mitchell", "Phillip Sutton", "Jarvis Woulward", "Paul Trinh", "Desmond Garrett", "David Shields", "Andre Key", "Trent Dews", "Milford Fontenot", "David Brown"],
  },
  {
    lineName: "Generation X",
    crossDate: "Spring 2001",
    members: ["Jerome Colbert"],
  },
  {
    lineName: "The Untouchables",
    crossDate: "Fall 2001",
    members: ["Phillip Yates", "Otis Ellis"],
  },
  {
    lineName: "10 Kuts of a Diamond",
    crossDate: "Fall 2002",
    members: ["Quasar Alexander", "Glenn Smith", "Phillip Chaney", "Todd Broussard", "Malcolm Watson", "Brandon Barrow", "Darryl Williams", "Fritz Beckworth", "James Prince", "Greg Johnson"],
  },
  {
    lineName: "Total Khaos",
    crossDate: "Fall 2003",
    members: ["Reginald Hollins", "Randall Fuller", "James Mosley", "Jason Arthur", "Rick Smith", "Brandon Crawford"],
  },
  {
    lineName: "7 Unbreakable Diamonds",
    crossDate: "Fall 2004",
    members: ["Charles Adams", "John Mitchell", "Anthony Fobbs", "Tim McClelland", "Olisa Ogbor", "Ronnie Cauley", "Josh Pemberton"],
  },
  {
    lineName: "78 Usual Suspekts",
    crossDate: "Spring 2007",
    members: ["Greg Phillips", "Aubrey Price", "Donovan Richardson", "Chris Garba", "Gerald Fonzie", "A'Doriyn Dixon", "Kyle Jacobs"],
  },
  {
    lineName: "Konflict Diamonds",
    crossDate: "Fall 2007",
    members: ["Lawrence Battle", "Joel Byrd", "Ray Scott", "Christopher Owor", "Derek Chatman", "Anthony Boutte", "Harold Whitaker"],
  },
  {
    lineName: "14 Karats of A Diamond",
    crossDate: "Fall 2008",
    members: ["Eric Bell", "Tony Holmes", "Andre Burnett", "Marshall Smith", "Nicholas Hightower", "Lawrence Edwards", "Canice Nnanna", "Randall Nnanna", "Jonathan Cook", "Joshua Holly", "Malcolm Manning", "Eddie Bass", "Terrance Nurse", "Nicholas Manson"],
  },
  {
    lineName: "10 Kustom Made Diamonds",
    crossDate: "Spring 2010",
    members: ["Mark St.Rose", "Kirk Booker", "Carl Hayes", "Darrion Polk", "Quinton Byrd", "Darrious Polk", "Astin Scott", "Craig Davis", "Brandon Scott", "Damian Morton"],
  },
  {
    lineName: "Reinkarnated 9",
    crossDate: "Spring 2016",
    members: ["Henry Wilson", "Yamill Acevedo", "Marqus Hawthorne", "Markel Johnson", "Sean McLaughlin", "JC Franklin", "Kendrick Papillion", "Dotwaun Harris", "Julian Young"],
  },
  {
    lineName: "Spring 17",
    crossDate: "Spring 2017",
    members: ["Jesse Biles", "Aaron Foy", "Jordan Phillips", "Xavier Richard", "Jared Hamilton"],
  },
  {
    lineName: "3 K.I.N.G.S",
    crossDate: "Spring 2018",
    members: ["Donald Satchell", "Jaylon Maxie", "Austin Hayes"],
  },
  {
    lineName: "Spring 19",
    crossDate: "Spring 2019",
    members: ["Joseph Simpson", "Jonathan Ellis", "Justin Garcia", "Kyron Hammond", "Josh Atkinson", "Jordan Myers", "Caleb Lawton", "Chris Moore", "Daylon Bell", "Alvin Brown"],
  },
  {
    lineName: "Outkast 5",
    crossDate: "Spring 2020",
    members: ["Shane Ferrier", "Alex Partridge", "Cameron Walker", "Re'Shawn Thomas", "Christopher Reed"],
  },
  {
    lineName: "Taktikal 7",
    crossDate: "Spring 2022",
    members: ["Alfred Howell II", "Andr'e Hankerson", "Xavier Blackman", "Caleb Gaddis", "TreMon Bates", "Matthew Reed", "Cameron Hanks"],
  },
  {
    lineName: "Krim De La Krim",
    crossDate: "Spring 2023",
    members: ["Andre Ferrier", "Stevie Williams", "Braeden Hawkins", "Nabil Issa", "Isaiah Wiley", "Tyson English"],
  },
  {
    lineName: "Kosa Nostra",
    crossDate: "Fall 2024",
    members: ["Dontrell O'Neal", "Sabastion Porter", "Matthew Parker", "Dekedryn Butler", "Malachi Murphy", "Braxton Robinson"],
  }

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