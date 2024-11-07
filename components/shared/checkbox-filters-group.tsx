import { FC } from "react"
import { cn } from "@/lib/utils"
import { FilterChecboxProps, FilterCheckbox } from "@/components/shared/filter-checkbox"
import { Input } from "@/components/ui"

type Item = FilterChecboxProps

interface Props {
    title: string
    items: Item[]
    defoultItems?: Item[]
    limit?: number
    searchInputPlaceholder?: string
    onChange?: (values: string[]) => void
    defoultValue?: string[]
    className?: string
}

export const CheckboxFiltersGroup: FC<Props> = ({
    title,
    items,
    defoultItems,
    limit = 5,
    searchInputPlaceholder = "Поиск ...",
    className,
    onChange,
    defoultValue,
}) => {
    return (
        <div className={cn("", className)}>
            <p className="font-bold mb-3">{title}</p>
            <div className="mb-5">
                <Input placeholder={searchInputPlaceholder} className="bg-gray-50 border-none" />
            </div>

            <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
                {(items ? items : items).map((item) => (
                    <FilterCheckbox
                        onCheckedChange={() => console.log("hello")}
                        checked={false}
                        key={String(item.value)}
                        value={item.value}
                        text={item.text}
                        endAdornment={item.endAdornment}
                    />
                ))}
            </div>
        </div>
    )
}
