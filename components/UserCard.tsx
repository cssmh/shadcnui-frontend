import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
  company?: { name?: string };
};

export function UserCard({ user }: { user: User }) {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-base">{user.name}</CardTitle>
      </CardHeader>
      <CardContent className="text-sm text-muted-foreground space-y-1">
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
        <p>Website: {user.website}</p>
        {user.company?.name && <p>Company: {user.company.name}</p>}
      </CardContent>
    </Card>
  );
}
