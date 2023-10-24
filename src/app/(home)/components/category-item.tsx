import { CATEGORY_ICON } from "@/app/constants/category-icon";
import { Badge } from "@/components/ui/badge";
import { Category } from "@prisma/client";

interface CategoryItemProps {
  category: Category;
}

const CategoryItem = ({ category }: CategoryItemProps) => {
  return (
    <Badge
      className="flex items-center justify-center gap-2 py-3 rounded-lg"
      variant="outline"
    >
      {CATEGORY_ICON[category.slug as keyof typeof CATEGORY_ICON]}
      <span className="text-xs font-bold ">{category.name}</span>
    </Badge>
  );
};

export default CategoryItem;
