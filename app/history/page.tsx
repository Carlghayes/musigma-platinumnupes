import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const timeline = [
  {
    year: "1950",
    title: "Founding",
    description:
      "Alpha Beta Gamma was founded by a group of visionary students committed to academic excellence and brotherhood.",
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    year: "1975",
    title: "Silver Anniversary",
    description:
      "Celebrated 25 years of brotherhood with the establishment of our annual scholarship fund.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    year: "2000",
    title: "Golden Jubilee",
    description:
      "Marked 50 years of excellence with the inauguration of our community service initiative.",
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
];

export default function HistoryPage() {
  return (
    <div className="container py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Our History</h1>
        <div className="space-y-12">
          {timeline.map((event, index) => (
            <Card key={event.year}>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative h-48 md:h-full">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-primary">
                      {event.year}
                    </div>
                    <h3 className="text-2xl font-bold mt-2">{event.title}</h3>
                    <p className="mt-4 text-muted-foreground">
                      {event.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}