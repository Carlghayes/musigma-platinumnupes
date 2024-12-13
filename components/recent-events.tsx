import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const events = [
  {
    title: "Annual Charity Gala",
    date: "March 15, 2024",
    description:
      "Our biggest fundraising event of the year, supporting local education initiatives.",
    imageUrl:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Spring Rush Week",
    date: "February 20, 2024",
    description:
      "Welcome event for potential new members to learn about our brotherhood.",
    imageUrl:
      "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Community Service Day",
    date: "February 10, 2024",
    description:
      "Brothers came together to clean up local parks and plant trees.",
    imageUrl:
      "https://images.unsplash.com/photo-1593113598332-cd59c5a3f40e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
];

export default function RecentEvents() {
  return (
    <section className="container pb-24 sm:pb-32">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-bold tracking-tight">Recent Events</h2>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          Take a look at some of our recent activities and brotherhood events.
        </p>
      </div>
      <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {events.map((event) => (
          <Card key={event.title} className="group relative overflow-hidden border-none bg-muted/50 backdrop-blur supports-[backdrop-filter]:bg-muted/10">
            <CardContent className="p-0">
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={event.imageUrl}
                  alt={event.title}
                  fill
                  className="object-cover transition duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <time className="text-sm text-muted-foreground">{event.date}</time>
                <h3 className="mt-3 text-xl font-semibold">{event.title}</h3>
                <p className="mt-4 text-muted-foreground">{event.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}