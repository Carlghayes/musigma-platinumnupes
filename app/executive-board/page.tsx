import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const executiveBoard = [
  {
    name: "Michael Thompson",
    position: "Polemarch",
    bio: "Senior Economics major, focused on strengthening our community engagement.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
  },
  {
    name: "John Stevens",
    position: "Vice Polemarch",
    bio: "Senior Economics major, focused on strengthening our community engagement.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
  },
  {
    name: "David Rodriguez",
    position: "Exchequer",
    bio: "Junior Business major, passionate about member development and mentorship.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
  },
  {
    name: "Chris Keener",
    position: "Keeper of Records",
    bio: "Senior Finance major, managing our chapter's finances and fundraising initiatives.",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
  },
  {
    name: "Lamar Johnson",
    position: "Historian",
    bio: "Senior Finance major, managing our chapter's finances and fundraising initiatives.",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
  },
  {
    name: "Will Jones",
    position: "Strategus",
    bio: "Senior Finance major, managing our chapter's finances and fundraising initiatives.",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
  }
];

export default function ExecutiveBoardPage() {
  return (
    <div className="container py-10">
      <h1 className="text-4xl font-bold mb-8 text-center">Executive Board</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {executiveBoard.map((member) => (
          <Card key={member.name}>
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <Avatar className="h-24 w-24 mb-4">
                  <AvatarImage src={member.image} alt={member.name} />
                  <AvatarFallback>
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {member.position}
                </p>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}