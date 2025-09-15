import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export function PostCard({ post, index = 0 }: { post: Post; index?: number }) {
  return (
    <motion.div
      whileHover={{ scale: 1.04, rotate: -1 }}
      whileTap={{ scale: 0.98, rotate: 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 18 }}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      style={{
        background:
          index % 3 === 0
            ? "linear-gradient(135deg, #f9d423 0%, #ff4e50 100%)"
            : index % 3 === 1
            ? "linear-gradient(135deg, #30cfd0 0%, #330867 100%)"
            : "linear-gradient(135deg, #43cea2 0%, #185a9d 100%)",
      }}
      className="rounded-xl shadow-lg h-full"
    >
      <Card className="bg-transparent shadow-none h-full">
        <CardHeader>
          <CardTitle className="line-clamp-2 text-white drop-shadow-md">
            {post.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-base text-white/90 whitespace-pre-line drop-shadow">
            {post.body}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
