import { map } from "lodash";
import { FlowButton } from "../../components/FlowButton";
import { Category } from "../../interfaces/category";
import { categoryData } from "../../mockData/categoryData";

interface Props {
    onSelectCategory: (category: Category) => void,
}

const CategoryStep = ({ onSelectCategory }: Props) => {

    return (
        <div className="flex flex-col justify-center h-full space-y-8">
            {map(categoryData, category => <FlowButton key={category.id} text={category.name} onClick={() => onSelectCategory(category)} />)}
        </div>
    )
}

export { CategoryStep };
