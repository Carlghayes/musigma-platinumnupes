import { BookOpen, Heart, Shield, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const values = [
  {
    name: "Brotherhood",
    description:
      "Creating lifelong bonds and supporting each other through every challenge.",
    icon: Users,
  },
  {
    name: "Leadership",
    description:
      "Developing the next generation of leaders through mentorship and experience.",
    icon: Shield,
  },
  {
    name: "Service",
    description:
      "Giving back to our community through meaningful volunteer work and initiatives.",
    icon: Heart,
  },
  {
    name: "Scholarship",
    description:
      "Pursuing academic excellence and supporting our brothers in their educational journey.",
    icon: BookOpen,
  },
];

export default function Values() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight">Our Core Values</h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            These principles guide our brotherhood and shape our impact on campus
            and beyond.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-lg gap-x-8 gap-y-12 grid-cols-1 sm:max-w-xl sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {values.map((value) => (
            <Card key={value.name} className="relative overflow-hidden border-none bg-muted/50 backdrop-blur supports-[backdrop-filter]:bg-muted/10">
              <CardContent className="p-6">
                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-primary/10" />
                <value.icon className="h-8 w-8 text-primary mb-6" />
                <h3 className="font-semibold text-xl">{value.name}</h3>
                <p className="mt-4 text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}