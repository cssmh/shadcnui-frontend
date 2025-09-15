import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export function PostCard({ post }: { post: Post }) {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="line-clamp-2">{post.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground whitespace-pre-line">
          {post.body}
        </p>
      </CardContent>
    </Card>
  );
}
