import { filter, map } from "lodash";
import { FlowButton } from "../../components/FlowButton";
import { useTodoStore } from "../../helpers/store";
import { Category } from "../../interfaces/category";

interface Props {
    onSelectCategory: (category: Category) => void,
}

const CategoryStep = ({ onSelectCategory }: Props) => {
    const categories  = useTodoStore(state => state.categories)
    const onlyActivecategories = filter(categories, category => !category.isHidden);

    return (
        <div className="flex flex-col justify-center h-full space-y-8">
            {map(onlyActivecategories, category => <FlowButton key={category.id} text={category.name} onClick={() => onSelectCategory(category)} />)}
        </div>
    )
}

export { CategoryStep };
