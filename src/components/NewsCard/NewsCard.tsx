import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "../ui/aspect-ratio";

interface NewsCardProps {
  Title?: string;
  imageUrl?: string | null;
  description?: string | null;
  link?: string;
}

export default function NewsCard({
  Title,
  imageUrl,
  description,
  link,
}: NewsCardProps) {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="block">
      <Card className="overflow-hidden h-full flex flex-row transition-all hover:shadow-lg px-6">
        {imageUrl ? (
          <div className="sm:w-40 sm:h-40 w-24 h-24 shrink-0 rounded-md overflow-hidden">
            <AspectRatio ratio={1 / 1}>
              <img
                src={imageUrl}
                alt={Title ?? ""}
                className="w-full h-full object-cover"
              />
            </AspectRatio>
          </div>
        ) : (
          <div className="sm:w-40 sm:h-40 w-24 h-24 shrink-0 rounded-md overflow-hidden bg-muted flex items-center justify-center">
            <span className="text-3xl font-bold text-primary ">GN</span>
          </div>
        )}
        <div className="flex flex-col flex-1">
          <CardTitle className="line-clamp-2 mb-2">{Title}</CardTitle>
          <CardContent className="flex-1 p-0">
            <p className="text-sm text-muted-foreground line-clamp-3">
              {description}
            </p>
          </CardContent>
        </div>
      </Card>
    </a>
  );
}
